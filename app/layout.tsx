import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import Cursor from '@/components/AnimatedCursor'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ajinkya\' Portfolio',
  description: 'Ajinkyas Portfolio',
  generator: 'Udmale Ajinkya',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${GeistSans.variable} ${GeistMono.variable} font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Cursor />
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
