import fsPromises from "fs/promises"
import path from "path"
import { LocaleProps } from "types/pagesTypes"

interface GetDataProps {
  params?: { locale: LocaleProps }
}

export const getData = async (props?: GetDataProps) => {
  const locale = props?.params ? props.params.locale : "es"
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
