import { Metadata } from 'next'
import { Analytics } from "@vercel/analytics/react"
import './globals.scss'
import { Montserrat } from 'next/font/google'
import Header from '@/app/components/header'
import Footer from './components/footer'
import Head from './head'

const webfont = Montserrat({ subsets: ['latin'], weight: ['300','400','700'] })

export const metadata: Metadata = {
  title: 'Maikel Salles',
  description: 'Personal Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      
      <Head />
      <body className={webfont.className}>
        <Header/>
        <main>
          {children}
        </main>
        <Footer/>
        <Analytics />
      </body>
    </html>
  )
}
