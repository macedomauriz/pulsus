import * as React from "react"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { useTranslation } from "next-i18next"
import { Container } from "@mui/material"
import Hero from "components/Hero"
// import { NextPageContext } from "next"

export default function Index() {
  const { t } = useTranslation()
  return (
    <Container maxWidth="xl" disableGutters={true}>
      {t("HELLO_WORLD")}
      <Hero />
    </Container>
  )
}

export async function getStaticProps(context) {
  // extract the locale identifier from the URL
  const { locale } = context

  return {
    props: {
      // pass the translation props to the page component
      ...(await serverSideTranslations(locale)),
    },
  }
}
