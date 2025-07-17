import type { Metadata } from 'next'
import OdometerLoader from '@/components/Odometer'
import Script from 'next/script'
import './globals.css'

export const metadata: Metadata = {
  title: 'Serwis Motocyklowy',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {

  

  return (
    <html lang="en">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/odometer.js/0.4.8/themes/odometer-theme-default.min.css" />

      <OdometerLoader />
      <body>      
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/odometer.js/0.4.7/odometer.min.js" strategy="beforeInteractive"/> 
        {children}
      </body>
    </html>
  )
}
