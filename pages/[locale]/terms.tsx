import * as React from "react"
import { GetStaticPaths, GetStaticProps } from "next"
import { LocaleProps, TermsProps } from "types/pagesTypes"
import { locales } from "config/locales"
import TermsEn from "../../public/locales/en/terms.mdx"
import TermsEs from "../../public/locales/es/terms.mdx"
import TermsPr from "../../public/locales/pr/terms.mdx"

export default function TermsPage({ params }: TermsProps) {
  const { locale } = params
  if (locale === "en") return <TermsEn />
  if (locale === "es") return <TermsEs />
  if (locale === "pr") return <TermsPr />
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
  return {
    props: {
      params,
    },
  }
}
