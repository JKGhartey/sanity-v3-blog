import Header from '@/components/Header'
import '../globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Banner from '@/components/Banner'
import ScrollToTop from '@/components/ScrollToTop'
import Footer from '@/components/Footer'
import Providers from '@/components/Providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Beacon Daily',
  description: 'Becon Daily Blog',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <body className="max-w-7xl mx-auto">
        <Providers>
          <Header />
          <ScrollToTop />
          <Banner />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
