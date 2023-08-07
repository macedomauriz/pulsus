import * as React from "react"
import Head from "next/head"
import { AppProps } from "next/app"
import { ThemeProvider } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"
import { CacheProvider, EmotionCache } from "@emotion/react"
import { lightTheme } from "../config/theme"
import styled from "@emotion/styled"
import createEmotionCache from "../config/createEmotionCache"
import { ThemeProvider as EmotionThemeProvider } from "@emotion/react"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

const clientSideEmotionCache = createEmotionCache()

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}

const Main = styled.main`
  padding: 180px 5% 0 5%;
  > nav {
    transform: translate(0, -180px);
  }
  @media (min-width: 600px) {
    padding: 140px 5% 0 5%;
    > nav {
      transform: translate(0, -140px);
    }
  }
`

function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={lightTheme}>
        <EmotionThemeProvider theme={lightTheme}>
          <CssBaseline />
          <Main className={inter.className}>
            <style jsx global>{`
              * {
                font-family: ${inter.style.fontFamily} !important;
              }
            `}</style>
            <Component {...pageProps} />
          </Main>
        </EmotionThemeProvider>
      </ThemeProvider>
    </CacheProvider>
  )
}

export default MyApp
