'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Cal, { getCalApi } from '@calcom/embed-react'
import { Bayon, Inter } from 'next/font/google'

const bayon = Bayon({ weight: '400', subsets: ['latin'] })
const inter = Inter({ subsets: ['latin'] })

// cal.com booking link (the part after the domain) and its origin.
// This account is on cal.com's EU region (cal.eu), so calOrigin must be set.
const CAL_LINK = 'mindtechnica/45min'
const CAL_ORIGIN = 'https://cal.eu'
const CAL_NAMESPACE = 'booking'

type FormData = {
  fullName: string
  companyName: string
  phone: string
  email: string
  message: string
}

type Props = {
  formData: FormData
  onClose: () => void
}

export default function CalendarModal({ formData, onClose }: Props) {
  const router = useRouter()

  useEffect(() => {
    let cancelled = false
    ;(async () => {
      const cal = await getCalApi({ namespace: CAL_NAMESPACE })
      if (cancelled) return
      cal('on', {
        action: 'bookingSuccessful',
        callback: () => {
          router.push('/success')
        },
      })
    })()
    return () => {
      cancelled = true
    }
  }, [router])

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto py-8 px-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal card */}
      <div className="relative z-10 w-full max-w-4xl bg-bgBlack border border-grey/20 rounded-2xl p-6 md:p-10 my-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-grey hover:text-white text-xl leading-none transition-colors"
          aria-label="Close"
        >
          ✕
        </button>

        <h2 className={`${bayon.className} text-white text-3xl md:text-5xl mb-2`}>
          Choose a <span className="text-green">time</span>
        </h2>
        <p className={`${inter.className} text-stone-400 text-sm md:text-base mb-8`}>
          Pick a time that best suits you and we&apos;ll send you a calendar reminder with a video call link.
        </p>

        <Cal
          namespace={CAL_NAMESPACE}
          calLink={CAL_LINK}
          calOrigin={CAL_ORIGIN}
          config={{
            name: formData.fullName,
            email: formData.email,
            notes: `Company: ${formData.companyName}\nPhone: ${formData.phone}\n\n${formData.message}`,
          }}
          style={{ width: '100%', minHeight: '600px' }}
        />
      </div>
    </div>
  )
}
