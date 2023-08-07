import fsPromises from "fs/promises"
import path from "path"
import { LocaleProps } from "types/pagesTypes"

export interface GetDataProps {
  locale: LocaleProps
}

export const getData = async (params?: GetDataProps) => {
  const locale = params?.locale ?? "es"
  const localePath = path.join(
    process.cwd(),
    "public",
    "locales",
    locale,
    "common.json"
  )

  const jsonData = await fsPromises.readFile(localePath)
  const data = JSON.parse(jsonData.toString())
  data["locale"] = locale

  return {
    props: {
      data,
    },
  }
}
