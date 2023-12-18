import { Merriweather } from 'next/font/google'
import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'

const theme = Merriweather ({ subsets: ['latin'], weight: "400",})

export const metadata = {
  title: 'File Control With Anyshare',
  description: 'Upload, Save and Share',
}

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={theme.className}>
        {children}
      </body>
    </html>
    </ClerkProvider>
  )
}
ClerkProvider