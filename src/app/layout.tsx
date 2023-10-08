import { ReactNode } from 'react'
import '../styles/globals.css'
import { poppins, roboto } from './fonts'

export default async function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en" className={roboto.className}>
      <body>{children}</body>
    </html>
  )
}
