'use client'

import { useState, useEffect } from 'react'

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })
  const [isExpired, setIsExpired] = useState(false)

  useEffect(() => {
    const calculateTimeLeft = (): TimeLeft => {
      // Get current year
      const now = new Date()
      const currentYear = now.getFullYear()

      // Set target date to March 21st of current year at 23:59:59
      const targetDate = new Date(currentYear, 2, 21, 23, 59, 59) // Month is 0-indexed, so 2 = March

      // If we're past March 21st this year, target next year
      if (now > targetDate) {
        targetDate.setFullYear(currentYear + 1)
      }

      const difference = targetDate.getTime() - now.getTime()

      if (difference <= 0) {
        setIsExpired(true)
        return { days: 0, hours: 0, minutes: 0, seconds: 0 }
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      }
    }

    // Initial calculation
    setTimeLeft(calculateTimeLeft())

    // Update every second
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const formatNumber = (num: number): string => {
    return num.toString().padStart(2, '0')
  }

  if (isExpired) {
    return (
      <div className="text-2xl md:text-4xl text-red-500 font-bold">
        OFFER EXPIRED
      </div>
    )
  }

  return (
    <div className="flex gap-3 md:gap-6 justify-center items-center">
      <div className="flex flex-col items-center bg-greenFaded rounded-lg p-3 md:p-5 min-w-[70px] md:min-w-[100px]">
        <span className="text-3xl md:text-5xl font-bold text-green">
          {formatNumber(timeLeft.days)}
        </span>
        <span className="text-xs md:text-sm text-stone-300 mt-1">DAYS</span>
      </div>
      <div className="text-2xl md:text-4xl text-green font-bold">:</div>
      <div className="flex flex-col items-center bg-greenFaded rounded-lg p-3 md:p-5 min-w-[70px] md:min-w-[100px]">
        <span className="text-3xl md:text-5xl font-bold text-green">
          {formatNumber(timeLeft.hours)}
        </span>
        <span className="text-xs md:text-sm text-stone-300 mt-1">HOURS</span>
      </div>
      <div className="text-2xl md:text-4xl text-green font-bold">:</div>
      <div className="flex flex-col items-center bg-greenFaded rounded-lg p-3 md:p-5 min-w-[70px] md:min-w-[100px]">
        <span className="text-3xl md:text-5xl font-bold text-green">
          {formatNumber(timeLeft.minutes)}
        </span>
        <span className="text-xs md:text-sm text-stone-300 mt-1">MINUTES</span>
      </div>
      <div className="text-2xl md:text-4xl text-green font-bold">:</div>
      <div className="flex flex-col items-center bg-greenFaded rounded-lg p-3 md:p-5 min-w-[70px] md:min-w-[100px]">
        <span className="text-3xl md:text-5xl font-bold text-green">
          {formatNumber(timeLeft.seconds)}
        </span>
        <span className="text-xs md:text-sm text-stone-300 mt-1">SECONDS</span>
      </div>
    </div>
  )
}
