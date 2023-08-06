import * as React from "react"
import { GetStaticProps } from "next"
import { IndexProps } from "types/pagesTypes"
import Index from "components/Index"
import { getData } from "utils/getData"

export default function IndexPage({ data }: IndexProps) {
  return <Index data={data} />
}

export const getStaticProps: GetStaticProps = async () => {
  return getData()
}
