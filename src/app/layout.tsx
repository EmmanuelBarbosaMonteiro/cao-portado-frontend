import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import NextAuthSessionProvider from '@/providers/sessionProvider'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Caoportado',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html className={inter.variable} lang="pt antialiased">
      <body>
        <div className="min-h-screen bg-gray-50">
          <main>
            <NextAuthSessionProvider>{children}</NextAuthSessionProvider>
          </main>
        </div>
      </body>
    </html>
  )
}
