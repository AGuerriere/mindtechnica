// Run with: node --test tests/booking.test.cjs
const { test } = require('node:test')
const assert = require('node:assert/strict')
const fs = require('node:fs')
const vm = require('node:vm')
const ts = require('typescript')

const source = ts.transpileModule(fs.readFileSync('functions/api/book-a-call.ts', 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
}).outputText

const lead = {
  fullName: 'Test Person', companyName: 'Test Kitchens', phone: '0123456789',
  email: 'test@example.com', message: 'Checking prices takes too long.\n\nCampaign: kitchen-quotation-workflow',
}

async function submit({ body = lead, databaseFails = false, notification = 'ok', apiKey = 'test-key' } = {}) {
  const saved = []
  const notices = []
  const context = {
    exports: {}, Response,
    console: { error() {}, warn() {} },
    fetch: async (_url, options) => {
      notices.push(JSON.parse(options.body))
      if (notification === 'throws') throw new Error('Network unavailable')
      return new Response('', { status: notification === 'rejected' ? 503 : 200 })
    },
  }
  vm.runInNewContext(source, context)
  const response = await context.exports.onRequestPost({
    request: new Request('https://example.com/api/book-a-call', { method: 'POST', body: JSON.stringify(body) }),
    env: {
      RESEND_API_KEY: apiKey,
      DB: { prepare() { return { bind(...values) { return { async run() {
        if (databaseFails) throw new Error('Database unavailable')
        saved.push(values)
      } } } } } },
    },
  })
  return { response, saved, notices }
}

test('saves the enquiry and campaign details before confirming success', async () => {
  const { response, saved, notices } = await submit()
  assert.equal(response.status, 200)
  assert.equal((await response.json()).message, 'Lead saved successfully')
  assert.equal(saved.length, 1)
  assert.equal(saved[0][4], lead.message)
  assert.equal(notices.length, 1)
})

test('database failure returns a failure and sends no notification', async () => {
  const { response, notices } = await submit({ databaseFails: true })
  assert.equal(response.status, 500)
  assert.equal(notices.length, 0)
})

for (const notification of ['throws', 'rejected']) {
  test(`a notification that ${notification} does not block a saved enquiry`, async () => {
    const { response, saved } = await submit({ notification })
    assert.equal(response.status, 200)
    assert.equal(saved.length, 1)
  })
}

test('booking still works when notification email is not configured', async () => {
  const { response, saved, notices } = await submit({ apiKey: '' })
  assert.equal(response.status, 200)
  assert.equal(saved.length, 1)
  assert.equal(notices.length, 0)
})

test('required fields are still enforced', async () => {
  const { response, saved } = await submit({ body: { ...lead, phone: '' } })
  assert.equal(response.status, 400)
  assert.equal(saved.length, 0)
})
