import * as React from "react"
import { GetStaticPaths, GetStaticProps } from "next"
import { LocaleProps, TermsProps } from "types/pagesTypes"
import { locales } from "config/locales"
import TermsEn from "../../public/locales/en/terms.mdx"
import TermsEs from "../../public/locales/es/terms.mdx"
import TermsPr from "../../public/locales/pr/terms.mdx"
import withLayout from "components/wrappers/withLayout"
import { getData } from "utils/getData"
import { Container } from "@mui/material"

function TermsContent(props: TermsProps["pageContent"]) {
  const { locale } = props

  return (
    <Container maxWidth="content">
      {locale === "en" && <TermsEn />}
      {locale === "es" && <TermsEs />}
      {locale === "pr" && <TermsPr />}
    </Container>
  )
}

const WithLayoutTerms = withLayout(TermsContent)

export default function TermsPage({ common, pageContent }: TermsProps) {
  return <WithLayoutTerms common={common} pageContent={pageContent} />
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = locales.map(locale => ({ params: { locale } }))
  return { paths, fallback: false }
}

interface ParamsProps {
  params: { locale: LocaleProps }
}

export const getStaticProps: GetStaticProps = async context => {
  const { params } = context as ParamsProps
  return getData(params, "terms")
}
