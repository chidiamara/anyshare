import { Merriweather } from 'next/font/google'
import './globals.css'
// import Header from './_components/Header'

const theme = Merriweather({ subsets: ['latin'], weight: "400",})

export const metadata = {
  title: 'File Control With Anyshare',
  description: 'Upload, Save and Share',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={theme.className}>
        {children}
      </body>
    </html>
  )
}
