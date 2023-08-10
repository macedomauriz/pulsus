import * as React from "react"
import { NotificationProvider } from "contexts/NotificationContext"
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
  overflow: hidden;
  width: 100%;
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
          <NotificationProvider>
            <CssBaseline />
            <Main className={inter.className}>
              <style jsx global>{`
                * {
                  font-family: ${inter.style.fontFamily} !important;
                }
              `}</style>
              <Component {...pageProps} />
            </Main>
          </NotificationProvider>
        </EmotionThemeProvider>
      </ThemeProvider>
    </CacheProvider>
  )
}

export default MyApp
