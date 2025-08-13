import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'
import { ReactNode } from 'react'

export const metaData = {
  title: 'Self-Analysis App',
  description: 'Structured self-analysis to guide users',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body>
        <ThemeProvider
        attribute='class'
        defaultTheme='system'
        enableSystem
        disableTransitionOnChange
        >
        {children}
        </ThemeProvider>
      </body>
    </html>
  )
}