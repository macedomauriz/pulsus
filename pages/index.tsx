import * as React from "react"
import { GetStaticProps } from "next"
import { IndexProps } from "types/pagesTypes"
import Index from "components/Index"
import { getData } from "utils/getData"

export default function IndexPage({ common, pageContent }: IndexProps) {
  return <Index common={common} pageContent={pageContent} />
}

export const getStaticProps: GetStaticProps = async () => {
  return getData({ locale: "es" }, "index")
}
