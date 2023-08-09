import fsPromises from "fs/promises"
import path from "path"
import { LocaleProps } from "types/pagesTypes"

export interface GetDataProps {
  locale: LocaleProps
}

export const getData = async (params: GetDataProps, page: string) => {
  const localeCommonPath = path.join(
    process.cwd(),
    "public",
    "locales",
    params.locale,
    "common.json"
  )

  const jsonData = await fsPromises.readFile(localeCommonPath)
  const common = JSON.parse(jsonData.toString())
  common["locale"] = params.locale

  const localePagePath = path.join(
    process.cwd(),
    "public",
    "locales",
    params.locale,
    `${page}.json`
  )

  const jsonPageData = await fsPromises.readFile(localePagePath)
  const pageContent = JSON.parse(jsonPageData.toString())

  return {
    props: {
      common,
      pageContent,
    },
  }
}
