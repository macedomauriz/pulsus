export type LocaleProps = "es" | "en" | "pr"

export interface IndexProps {
  data: {
    metadata: {
      title: string
      description: string
    }
    body: { [key: string]: any }
    locale: LocaleProps
  }
}
