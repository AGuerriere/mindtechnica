"use client"

import { FormEvent, useState } from "react"
import { useRouter } from "next/navigation"
import { Bayon } from "next/font/google"

const bayon = Bayon({
  weight: "400",
  subsets: ["latin"],
})

const inputClasses =
  "mt-2 w-full rounded-lg border border-grey/30 bg-blueFaded px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-stone-500 focus:border-green"

export default function BottomCTA() {
  const router = useRouter()
  const [messageSent, setMessageSent] = useState(false)

  function handleBookingSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const params = new URLSearchParams({
      name: String(formData.get("booking-name") || ""),
      email: String(formData.get("booking-email") || ""),
    })

    router.push(`/book?${params.toString()}`)
  }

  function handleMessageSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setMessageSent(true)
    event.currentTarget.reset()
  }

  return (
    <section id="contacts" className="mt-20 scroll-mt-8 md:mt-32">
      <div className="mb-8 flex flex-row items-center">
        <h2 className={`${bayon.className} min-w-fit pb-0 text-4xl text-white md:text-6xl lg:text-8xl`}>
          Let&apos;s Talk
        </h2>
        <div className="w-full border-b-2 border-white" />
      </div>

      <p className="mb-10 max-w-3xl text-sm leading-relaxed text-stone-300 md:text-lg">
        Tell us what you are working through, or book a free discovery call to explore the most effective next step.
      </p>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-green/30 bg-greenFaded p-6 md:p-9">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-green">
            Ready to talk?
          </p>
          <h3 className={`${bayon.className} mb-6 text-3xl text-white md:text-4xl`}>
            Book a call
          </h3>

          <form onSubmit={handleBookingSubmit} className="space-y-5">
            <div>
              <label htmlFor="booking-name" className="text-sm font-semibold text-stone-200">
                Full name
              </label>
              <input
                id="booking-name"
                name="booking-name"
                type="text"
                autoComplete="name"
                required
                className={inputClasses}
                placeholder="Your full name"
              />
            </div>

            <div>
              <label htmlFor="booking-email" className="text-sm font-semibold text-stone-200">
                Email
              </label>
              <input
                id="booking-email"
                name="booking-email"
                type="email"
                autoComplete="email"
                required
                className={inputClasses}
                placeholder="you@company.com"
              />
            </div>

            <div>
              <label htmlFor="booking-situation" className="text-sm font-semibold text-stone-200">
                What best describes your situation?
              </label>
              <select
                id="booking-situation"
                name="booking-situation"
                required
                defaultValue=""
                className={inputClasses}
              >
                <option value="" disabled>
                  Select an option
                </option>
                <option value="specific-project">I have a specific project in mind</option>
                <option value="exploring">I&apos;m exploring what&apos;s possible</option>
                <option value="automation">I want to automate a manual process</option>
                <option value="other">Something else</option>
              </select>
            </div>

            <div>
              <label htmlFor="booking-details" className="text-sm font-semibold text-stone-200">
                Tell us a bit more <span className="font-normal text-stone-500">(optional)</span>
              </label>
              <textarea
                id="booking-details"
                name="booking-details"
                rows={4}
                className={inputClasses}
                placeholder="A short overview of the opportunity or challenge"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-full bg-green px-7 py-4 text-base font-semibold text-bgBlack transition-all hover:bg-opacity-90 sm:w-auto"
            >
              Book your free call
            </button>
          </form>
        </div>

        <div className="rounded-2xl border border-grey/30 bg-blueFaded p-6 md:p-9">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-blue">
            Not ready to book yet?
          </p>
          <h3 className={`${bayon.className} mb-6 text-3xl text-white md:text-4xl`}>
            Send a message
          </h3>

          <form onSubmit={handleMessageSubmit} className="space-y-5">
            <div>
              <label htmlFor="message-name" className="text-sm font-semibold text-stone-200">
                Full name
              </label>
              <input
                id="message-name"
                name="message-name"
                type="text"
                autoComplete="name"
                required
                className={inputClasses}
                placeholder="Your full name"
              />
            </div>

            <div>
              <label htmlFor="message-email" className="text-sm font-semibold text-stone-200">
                Email
              </label>
              <input
                id="message-email"
                name="message-email"
                type="email"
                autoComplete="email"
                required
                className={inputClasses}
                placeholder="you@company.com"
              />
            </div>

            <div>
              <label htmlFor="message-text" className="text-sm font-semibold text-stone-200">
                Your message
              </label>
              <textarea
                id="message-text"
                name="message-text"
                rows={9}
                required
                className={inputClasses}
                placeholder="How can we help?"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-full border border-green px-7 py-4 text-base font-semibold text-green transition-all hover:bg-green hover:text-bgBlack sm:w-auto"
            >
              Send message
            </button>
          </form>

          {messageSent && (
            <p role="status" className="mt-6 rounded-lg border border-green/30 bg-greenFaded p-4 text-sm text-green">
              Thanks &mdash; we&apos;ll be back in touch within 24 hours.
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
