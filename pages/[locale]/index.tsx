import * as React from "react"
import Head from "next/head"
import { Container } from "@mui/material"
import Hero from "components/Hero"
import { GetStaticPaths, GetStaticProps } from "next"

export default function Index() {
  const metadata = {
    title: "EN | Pulsus Title",
    description: "EN | Pulsus Description",
  }
  const locale = "en"
  const content = {
    hero: {
      primary:
        "Tu nuevo y poderoso asistente personal <mark>impulsado por AI</mark>",
      secondary:
        "Pulsus se integra a la perfección en su rutina, anticipándose a sus necesidades y brindando asistencia oportuna.",
      button: "Únete a la waitlist",
    },
  }
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link
          rel="alternate"
          hrefLang={locale}
          href={`https://yourdomain.com/${locale}/`}
        />
      </Head>
      <Container maxWidth="xl" disableGutters={true}>
        <Hero
          primary={content.hero.primary}
          secondary={content.hero.secondary}
          button={content.hero.button}
        />
      </Container>
    </>
  )
}

const locales = ["en", "es", "pr"]

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = locales.map(locale => ({ params: { locale } }))
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // const locale = params.locale
  const data = "hola"

  return {
    props: {
      data,
    },
  }
}
