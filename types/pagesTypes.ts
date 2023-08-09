export type LocaleProps = "es" | "en" | "pr"

export interface IndexProps {
  common: {
    metadata: {
      title: string
      description: string
    }
    body: { [key: string]: any }
    locale: LocaleProps
  }
  pageContent: {
    body: { [key: string]: any }
  }
}
