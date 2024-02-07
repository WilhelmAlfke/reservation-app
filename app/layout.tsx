import './globals.css'
import { Providers } from './providers'
export const metadata = {
  title: 'reservation app',
  description: 'generated',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
        
      </body>
    </html>
  )
}