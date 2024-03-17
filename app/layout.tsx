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
    font-family: '__ms_sans_serif_c1ce78';
  }
`
 
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${ms_sans_serif.className} ${ms_sans_serif_bold.className}`}
    >
      <body>
        <GlobalStyles />
        <ThemeProvider theme={original}>{children}</ThemeProvider>
      </body>
    </html>
  )
}
