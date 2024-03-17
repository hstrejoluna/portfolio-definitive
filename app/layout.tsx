'use client'
import 'tailwindcss/tailwind.css'

import { IBM_Plex_Mono, Inter, PT_Serif } from 'next/font/google'
import localFont from 'next/font/local'


import { MenuList, MenuListItem, Separator, styleReset } from 'react95'
 
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import original from 'react95/dist/themes/original'

const ms_sans_serif = localFont({ src: '../assets/fonts/ms_sans_serif.woff'})
const ms_sans_serif_bold = localFont({ src: '../assets/fonts/ms_sans_serif_bold.woff'})

const GlobalStyles = createGlobalStyle`
  ${styleReset}
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif}') format('woff2');
    font-weight: 400;
    font-style: normal
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif_bold}') format('woff2');
    font-weight: bold;
    font-style: normal
  }
  body, input, select, textarea {
    font-family: 'ms_sans_serif';
  }
`

const serif = PT_Serif({
  variable: '--font-serif',
  style: ['normal', 'italic'],
  subsets: ['latin'],
  weight: ['400', '700'],
})
const sans = Inter({
  variable: '--font-sans',
  subsets: ['latin'],
  // @todo: understand why extrabold (800) isn't being respected when explicitly specified in this weight array
  // weight: ['500', '700', '800'],
})
const mono = IBM_Plex_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
  weight: ['500', '700'],
})

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${mono.variable} ${sans.variable} ${serif.variable}`}
    >
      <body>
        <GlobalStyles />
        <ThemeProvider theme={original}>{children}</ThemeProvider>
      </body>
    </html>
  )
}
