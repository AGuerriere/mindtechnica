'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

type TeamPortraitProps = {
  name: string
  src: string
  alt: string
  width: number
  height: number
}

export default function TeamPortrait({ name, src, alt, width, height }: TeamPortraitProps) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (!isOpen) return
    const dialog = dialogRef.current
    const previousOverflow = document.body.style.overflow
    dialog?.showModal()
    document.body.style.overflow = 'hidden'
    return () => {
      dialog?.close()
      document.body.style.overflow = previousOverflow
    }
  }, [isOpen])

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        aria-label={`Enlarge photo of ${name}`}
        aria-haspopup="dialog"
        className="group relative block w-full max-w-[240px] mx-auto aspect-square shrink-0 rounded-xl overflow-hidden cursor-zoom-in focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green"
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          sizes="240px"
          className="w-full h-full object-cover motion-safe:transition-transform motion-safe:duration-300 motion-safe:group-hover:scale-105"
        />
      </button>
      <dialog
        ref={dialogRef}
        aria-label={`Photo of ${name}`}
        onClose={() => setIsOpen(false)}
        onClick={event => {
          if (event.target === event.currentTarget) setIsOpen(false)
        }}
        className="m-auto max-w-[95vw] max-h-[95dvh] border-0 bg-transparent p-3 text-white backdrop:bg-black/85 backdrop:backdrop-blur-sm"
      >
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          aria-label="Close enlarged photo"
          className="block mx-auto mb-3 rounded-full px-4 py-2 bg-bgBlack text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-green"
        >
          Close ×
        </button>
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          aria-label={`Close photo of ${name}`}
          className="block cursor-zoom-out rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-green"
        >
          <Image
            src={src}
            alt={name}
            width={width}
            height={height}
            sizes="90vw"
            className="w-auto h-auto max-w-full max-h-[78dvh] rounded-lg object-contain"
          />
        </button>
      </dialog>
    </>
  )
}
