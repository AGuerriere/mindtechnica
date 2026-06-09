'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import dynamic from 'next/dynamic'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

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

export default function BookingForm() {
  const [showCalendar, setShowCalendar] = useState(false)
  const [submittedData, setSubmittedData] = useState<FormData | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ mode: 'onTouched' })

  const onSubmit = async (data: FormData) => {
    // Save the lead to the backend. Don't block the booking flow if it fails —
    // the user can still pick a time and the Cal.com webhook is the source of truth.
    try {
      await fetch('/api/book-a-call', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
    } catch (error) {
      console.error('Failed to save lead:', error)
    }

    setSubmittedData(data)
    setShowCalendar(true)
  }

  const inputClass =
    'rounded-lg w-full h-12 bg-blueFaded border border-grey/20 text-greyLight02 placeholder-grey pl-4 mt-2 focus:outline-none focus:border-green transition-colors text-sm'
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
            Tell us briefly what we can help you with <span className="text-green">*</span>
          </label>
          <textarea
            {...register('message', { required: 'Please tell us how we can help' })}
            id="message"
            rows={5}
            placeholder="We're looking to automate our document processing pipeline and integrate AI-powered insights into our existing systems..."
            className="rounded-lg w-full bg-blueFaded border border-grey/20 text-greyLight02 placeholder-grey pl-4 pt-3 mt-2 focus:outline-none focus:border-green transition-colors text-sm resize-none"
          />
          {errors.message && (
            <p className="text-red-400 text-xs mt-1">{errors.message.message}</p>
          )}
        </div>

        <div className="mt-8">
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
