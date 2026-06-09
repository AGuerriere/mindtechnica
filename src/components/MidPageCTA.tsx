import Link from "next/link"
import { Bayon } from "next/font/google"

const bayon = Bayon({
  weight: "400",
  subsets: ["latin"],
})

export default function MidPageCTA() {
  return (
    <section className="my-20 md:my-32 rounded-2xl border border-green/30 bg-greenFaded px-6 py-10 text-center md:px-12 md:py-14">
      <h2 className={`${bayon.className} text-3xl text-white md:text-5xl lg:text-6xl`}>
        Ready to see what&apos;s possible?
      </h2>
      <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-stone-300 md:text-lg">
        Book a free 30-minute discovery call &mdash; no commitment.
      </p>
      <Link
        href="/book"
        className="mt-7 inline-block rounded-full bg-green px-8 py-4 text-base font-semibold text-bgBlack transition-all hover:bg-opacity-90 md:text-lg"
      >
        Book a free call
      </Link>
    </section>
  )
}
