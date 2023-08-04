import * as React from "react"
import Head from "next/head"
import { AppProps } from "next/app"
import { ThemeProvider } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"
import { CacheProvider, EmotionCache } from "@emotion/react"
import { lightTheme } from "../config/theme"
import createEmotionCache from "../config/createEmotionCache"
import { ThemeProvider as EmotionThemeProvider } from "@emotion/react"
import { Inter } from "next/font/google"
import { appWithTranslation } from "next-i18next"

const inter = Inter({ subsets: ["latin"] })

const clientSideEmotionCache = createEmotionCache()

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}

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
          <main className={inter.className} style={{ padding: "0 6%" }}>
            <style jsx global>{`
              * {
                font-family: ${inter.style.fontFamily} !important;
              }
            `}</style>
            <Component {...pageProps} />
          </main>
        </EmotionThemeProvider>
      </ThemeProvider>
    </CacheProvider>
  )
}

export default appWithTranslation(MyApp)
