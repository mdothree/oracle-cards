import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Oracle Cards',
  description: 'Message-focused card readings',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
