import { Bebas_Neue, Barlow } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from './components/ThemeProvider'

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
  display: 'swap',
})

const barlow = Barlow({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-barlow',
  display: 'swap',
})

export const metadata = {
  title: 'Fitness Sports Center | Est. 2023',
  description:
    'Your ultimate fitness destination. Train harder, push limits, and transform your body at Fitness Sports Center.',
  keywords: 'gym, fitness, sports center, bodybuilding, personal training',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`
          ${bebasNeue.variable} ${barlow.variable}
          font-body antialiased
          bg-gym-offwhite dark:bg-gym-black
          text-gym-black dark:text-gym-offwhite
          transition-colors duration-300
        `}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}