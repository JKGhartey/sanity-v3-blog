import '../globals.css'

export const metadata = {
  title: 'Beacon | Studio',
  description: 'Sanity Blog Studio',
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
