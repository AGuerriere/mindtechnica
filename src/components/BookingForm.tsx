'use client'

import { inter } from '@/lib/fonts'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import dynamic from 'next/dynamic'

const CalendarModal = dynamic(() => import('./CalendarModal'), {
  ssr: false,
  loading: () => null,
})

type FormData = {
  fullName: string
  companyName: string
  phone: string
  email: string
  message: string
}

export default function BookingForm({ campaign }: { campaign?: 'kitchen-quotation-workflow' }) {
  const [showCalendar, setShowCalendar] = useState(false)
  const [submittedData, setSubmittedData] = useState<FormData | null>(null)
  const [saveError, setSaveError] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ mode: 'onTouched' })

  const onSubmit = async (data: FormData) => {
    setSaveError(false)
    const params = new URLSearchParams(window.location.search)
    const attribution = [
      `Enquiry page: ${window.location.pathname}`,
      ...(campaign ? [`Campaign: ${campaign}`] : []),
      ...['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term']
        .filter(key => params.has(key))
        .map(key => `${key}: ${params.get(key)?.slice(0, 200)}`),
    ].join('\n')
    // Keep attribution in the existing message field, including calendar notes.
    // This works with the current database schema and notification emails.
    const leadData = { ...data, message: `${data.message}\n\n${attribution}` }
    try {
      const response = await fetch('/api/book-a-call', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(leadData),
      })
      if (!response.ok) throw new Error('Lead could not be saved')
      // A static-host fallback can return HTML with status 200. Require the API response.
      const result = await response.json()
      if (result.message !== 'Lead saved successfully') throw new Error('Unexpected response')
    } catch (error) {
      console.error('Failed to save lead:', error)
      setSaveError(true)
      return
    }

    setSubmittedData(leadData)
    setShowCalendar(true)
  }

  // text-base (16px) on mobile prevents iOS Safari from auto-zooming on focus;
  // md:text-sm keeps the smaller size on desktop.
  const inputClass =
    'rounded-lg w-full h-12 bg-blueFaded border border-grey/20 text-greyLight02 placeholder-grey pl-4 mt-2 focus:outline-none focus:border-green transition-colors text-base md:text-sm'
  const labelClass = `${inter.className} text-sm font-semibold text-greyLight02`

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="fullName" className={labelClass}>
              Full Name <span className="text-green">*</span>
            </label>
            <input
              {...register('fullName', { required: 'Full name is required' })}
              id="fullName"
              type="text"
              placeholder="Your full name"
              className={inputClass}
            />
            {errors.fullName && (
              <p className="text-red-400 text-xs mt-1">{errors.fullName.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="companyName" className={labelClass}>
              Company Name <span className="text-green">*</span>
            </label>
            <input
              {...register('companyName', { required: 'Company name is required' })}
              id="companyName"
              type="text"
              placeholder="Your business name"
              className={inputClass}
            />
            {errors.companyName && (
              <p className="text-red-400 text-xs mt-1">{errors.companyName.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="email" className={labelClass}>
              Email Address <span className="text-green">*</span>
            </label>
            <input
              {...register('email', {
                required: 'Email is required',
                pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Invalid email address' },
              })}
              id="email"
              type="email"
              placeholder="Your email"
              className={inputClass}
            />
            {errors.email && (
              <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="phone" className={labelClass}>
              Phone Number <span className="text-green">*</span>
            </label>
            <input
              {...register('phone', { required: 'Phone number is required' })}
              id="phone"
              type="tel"
              placeholder="Your Phone number"
              className={inputClass}
            />
            {errors.phone && (
              <p className="text-red-400 text-xs mt-1">{errors.phone.message}</p>
            )}
          </div>
        </div>

        <div className="mt-6">
          <label htmlFor="message" className={labelClass}>
            {campaign ? 'Which part of your sales process would you like to improve?' : 'Tell us briefly what we can help you with'} <span className="text-green">*</span>
          </label>
          <textarea
            {...register('message', { required: 'Please tell us how we can help' })}
            id="message"
            rows={5}
            placeholder={campaign
              ? 'For example, we lose track of quotes sent and copy client details between our CRM, spreadsheets and accounts software.'
              : 'A sentence or two about the problem you would like to solve is plenty.'}
            className="rounded-lg w-full bg-blueFaded border border-grey/20 text-greyLight02 placeholder-grey pl-4 pt-3 mt-2 focus:outline-none focus:border-green transition-colors text-base md:text-sm resize-none"
          />
          {errors.message && (
            <p className="text-red-400 text-xs mt-1">{errors.message.message}</p>
          )}
        </div>

        <div className="mt-8">
          {saveError && (
            <p role="alert" className="text-red-300 text-sm mb-4">
              We couldn&apos;t save your details. Please try again. If it still doesn&apos;t work, email{' '}
              <a href="mailto:projects@mindtechnica.com" className="underline">projects@mindtechnica.com</a>
              {' '}and we&apos;ll arrange a time with you.
            </p>
          )}
          <p className="text-xs text-stone-500 mb-4">
            By submitting this form you agree to our{' '}
            <a href="/privacy" className="text-green hover:underline" target="_blank" rel="noopener noreferrer">
              Privacy Policy
            </a>
            .
          </p>
          <button type="submit" disabled={isSubmitting} className="contacts disabled:opacity-50">
            {isSubmitting ? 'Saving...' : 'Next: Pick a Time'}
          </button>
        </div>
      </form>

      {showCalendar && submittedData && (
        <CalendarModal
          formData={submittedData}
          onClose={() => setShowCalendar(false)}
        />
      )}
    </>
  )
}
