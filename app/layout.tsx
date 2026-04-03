import type { Metadata } from 'next'
import './globals.css'
import {Profile_image} from '@/data/personal'
export const metadata: Metadata = {
  title: 'Khun Thi Han | Full Stack Developer',
  description: 'Welcome to the personal portfolio of Khun Thi Han...',
  openGraph: {
    title: 'Khun Thi Han | Full Stack Developer',
    description: 'Explore projects, skills, and contact information of Khun Thi Han...',
    url: 'https://khunthihan.vercel.app/', // replace with your actual domain
    siteName: 'Khun Thi Han Portfolio',
    images: [
      {
        url: Profile_image,
        width: 1200,
        height: 630,
        alt: 'Khun Thi Han Portfolio',
      },
    ],
    type: 'website',
  },
}



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
    <head>
      <link rel="icon" href={Profile_image} type='image/x-icon' />
    </head>
      <body>{children}</body>
    </html>
  )
}
