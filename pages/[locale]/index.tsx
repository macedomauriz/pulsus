import * as React from "react"
import { GetStaticPaths, GetStaticProps } from "next"
import { IndexProps, LocaleProps } from "types/pagesTypes"
import Index from "components/Index"
import { getData } from "utils/getData"
import { locales } from "config/locales"

export default function IndexPage({ data }: IndexProps) {
  return <Index data={data} />
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
  return getData(params)
}
