export type LocaleProps = "es" | "en" | "pr"

export interface IndexProps {
  common: {
    body: { [key: string]: any }
  }
  pageContent: {
    metadata: {
      title: string
      description: string
    }
    body: { [key: string]: any }
    locale: LocaleProps
    page: string
  }
}

export interface TermsProps {
  common: {
    body: { [key: string]: any }
    locale: LocaleProps
  }
  pageContent: {
    metadata: {
      title: string
      description: string
    }
    body: { [key: string]: any }
    locale: LocaleProps
    page: string
  }
}
