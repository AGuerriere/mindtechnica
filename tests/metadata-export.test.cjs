// Run after `npm run build`: node --test tests/metadata-export.test.cjs
const { test } = require('node:test')
const assert = require('node:assert/strict')
const fs = require('node:fs')
const path = require('node:path')
const origin = 'https://mindtechnica.com'
const decode = value => value.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#x27;|&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>')

function walk(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap(entry => {
    const file = path.join(directory, entry.name)
    return entry.isDirectory() ? walk(file) : [file]
  })
}
function attributes(tag) {
  return Object.fromEntries([...tag.matchAll(/([\w:-]+)="([^"]*)"/g)].map(([, key, value]) => [key, decode(value)]))
}
const pages = walk('out').filter(file => file.endsWith('.html') && !file.endsWith('/404.html')).map(file => {
  const html = fs.readFileSync(file, 'utf8')
  const head = html.split('</head>')[0]
  const metas = [...head.matchAll(/<meta\b[^>]*>/g)].map(([tag]) => attributes(tag))
  const links = [...head.matchAll(/<link\b[^>]*>/g)].map(([tag]) => attributes(tag))
  const route = file === 'out/index.html' ? '/' : '/' + file.slice(4, -5)
  return { file, html, head, metas, links, route, meta: key => metas.find(m => (m.name || m.property) === key)?.content }
})

test('every exported page has matching page-specific search and social metadata', () => {
  const titles = new Set()
  for (const page of pages) {
    const title = decode(page.head.match(/<title>(.*?)<\/title>/s)?.[1] || '')
    assert.ok(title.endsWith('| Mind Technica'), page.file)
    assert.ok(!titles.has(title), `Duplicate title: ${title}`)
    titles.add(title)
    assert.ok(page.meta('description'), page.file)
    for (const platform of ['og', 'twitter']) {
      assert.equal(page.meta(`${platform}:title`), title, page.file)
      assert.equal(page.meta(`${platform}:description`), page.meta('description'), page.file)
      const image = new URL(page.meta(`${platform}:image`))
      assert.equal(image.origin, origin)
      assert.ok(fs.existsSync(path.join('out', image.pathname)), `Missing image: ${image}`)
    }
    const canonical = page.links.filter(link => link.rel === 'canonical')
    assert.equal(canonical.length, 1, page.file)
    assert.equal(canonical[0].href, origin + page.route)
    assert.equal(page.meta('og:url'), canonical[0].href)
    assert.ok(page.links.some(link => link.type === 'application/rss+xml' && link.href === origin + '/rss.xml'))
    assert.doesNotMatch(page.meta('description'), /70%|manpower|free audit/i)
    assert.equal(page.meta('og:type'), page.route.startsWith('/news/') ? 'article' : 'website')
  }
})

test('sitemap covers every indexable page and excludes utility and retired routes', () => {
  const xml = fs.readFileSync('out/sitemap.xml', 'utf8')
  const urls = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map(([, url]) => decode(url))
  assert.equal(urls.length, new Set(urls).size)
  const indexable = pages.filter(page => !page.meta('robots')?.includes('noindex'))
  assert.deepEqual(urls.sort(), indexable.map(page => origin + page.route).sort())
  assert.ok(urls.includes(origin + '/aws-cloud-services'))
  assert.ok(urls.includes(origin + '/kitchen-quotation-workflow'))
  for (const route of ['/success', '/promo', '/contact']) assert.ok(!urls.includes(origin + route))
  // Static pages have no editorial modification date: do not fabricate one at build time.
  const homeEntry = xml.match(/<url>\s*<loc>https:\/\/mindtechnica.com\/<\/loc>(.*?)<\/url>/s)
  assert.ok(homeEntry)
  assert.doesNotMatch(homeEntry[1], /lastmod/)
  const success = pages.find(page => page.route === '/success')
  assert.match(success.meta('robots'), /noindex/)
  assert.match(success.meta('googlebot'), /noindex/)
})

test('site identity and discovery files describe the current service offering', () => {
  const home = pages.find(page => page.route === '/')
  const schemas = [...home.html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)].map(([, json]) => JSON.parse(json))
  const organisation = schemas.find(schema => schema['@type'] === 'Organization')
  assert.deepEqual(organisation.makesOffer.map(offer => offer.itemOffered.name), [
    'Bespoke software development', 'AI integrations and bespoke AI solutions', 'AWS cloud management',
  ])
  assert.match(home.meta('description'), /bespoke software.*AI.*AWS/)
  const manifest = JSON.parse(fs.readFileSync('out/manifest.webmanifest', 'utf8'))
  assert.match(manifest.description, /AWS cloud management/)
  assert.match(fs.readFileSync('out/rss.xml', 'utf8'), /AWS cloud infrastructure/)
  assert.match(fs.readFileSync('out/robots.txt', 'utf8'), /Sitemap: https:\/\/mindtechnica.com\/sitemap.xml/)
})
