import * as React from "react"
import Head from "next/head"
import { Container } from "@mui/material"
import Hero from "components/index/Hero"
import { IndexProps } from "types/pagesTypes"

export default function Index({ data }: IndexProps) {
  const { metadata, body, locale } = data
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link
          rel="alternate"
          hrefLang={locale}
          href={`https://www.pulsus.ai/${locale}/`}
        />
        <link rel="canonical" href={`https://www.pulsus.ai/${locale}/`} />
      </Head>
      <Container maxWidth="xl" disableGutters={true}>
        <Hero
          primary={body.hero.primary}
          secondary={body.hero.secondary}
          button={body.hero.button}
        />
      </Container>
    </>
  )
}
