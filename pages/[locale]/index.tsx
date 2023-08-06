import * as React from "react"
import { GetStaticPaths, GetStaticProps } from "next"
import { IndexProps, LocaleProps } from "types/pagesTypes"
import Index from "components/Index"
import { getData } from "utils/getData"

export default function IndexPage({ data }: IndexProps) {
  return <Index data={data} />
}

const locales: LocaleProps[] = ["en", "es", "pr"]

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = locales.map(locale => ({ params: { locale } }))
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  return getData(params)
}
