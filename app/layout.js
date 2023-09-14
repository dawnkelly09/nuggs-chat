import './globals.css'
import { Eczar } from 'next/font/google'

const eczar = Eczar({ subsets: ['latin'] })

export const metadata = {
  title: 'Nuggs - Budtender',
  description: 'a chatbot to answer all your cannabis questions',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={eczar.className}>{children}</body>
    </html>
  )
}
