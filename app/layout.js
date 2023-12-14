import { Inter, Outfit } from 'next/font/google'
import './globals.css'
// import Header from './_components/Header'

const inter = Outfit({ subsets: ['latin'] })

export const metadata = {
  title: 'File Control With Anyshare',
  description: 'Upload, Save and Share',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}
      {/* <Header/> */}
      </body>
    </html>
  )
}
