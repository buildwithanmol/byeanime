import '@/app/globals.css'
import { Metadata } from 'next'
import React from 'react'
import { Mukta } from 'next/font/google'
import RecoilWrapper from '@/lib/recoil'

export const metadata: Metadata = {
  title: 'ByeAnime',
  description: 'ByeAnime is an open source alternative to HiAnime! This is changed by Aryan Vishwakarma.'
}

const mukta = Mukta({
  weight: ['200', '400', "600"],
  subsets: ["latin"]
})

const RootLayout = ({ children }: {
  children: Readonly<React.ReactNode>
}) => {
  return (
    <html>
      <body className={`${mukta.className} bg-background text-white`}>
        <RecoilWrapper>
          {children}
        </RecoilWrapper>
      </body>
    </html>
  )
}

export default RootLayout