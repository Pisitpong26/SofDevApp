import './globals.css'
import { Montserrat } from 'next/font/google'
import { Kanit } from 'next/font/google'

const montserrat = Montserrat({ subsets: ['latin'] })
const kanit = Kanit({
  subsets: ['thai'],
  weight: '300'
})

export const metadata = {
  title: 'Travel Tale',
  description: 'local travel in Tak',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={kanit.className}>{children}</body>
    </html>
  )
}
