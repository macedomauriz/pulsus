import React from "react"
import Footer from "components/common/Footer"
import Head from "next/head"
import Navbar from "components/common/Navbar"
import { IndexProps } from "types/pagesTypes"

export default function withLayout(WrappedComponent: any) {
  const ComponentWithPage = ({ common, pageContent }: IndexProps) => {
    const { body } = common
    const { metadata, locale, page } = pageContent

    const pageUrl = page === "index" ? "" : `${page}/`
    return (
      <>
        <Head>
          <title>{metadata.title}</title>
          <meta name="description" content={metadata.description} />
          <link
            rel="alternate"
            hrefLang={locale}
            href={`https://www.pulsus.ai/${locale}/${pageUrl}`}
          />
          <link
            rel="canonical"
            href={`https://www.pulsus.ai/${locale}/${pageUrl}`}
          />
        </Head>
        <Navbar
          button={body.navbar.button}
          notification={body.navbar.notification}
          locale={locale}
          pageUrl={pageUrl}
        />
        <WrappedComponent {...pageContent} />
        <Footer
          title={body.footer.title}
          subtitle={body.footer.subtitle}
          button={body.footer.button}
          dedication={body.footer.dedication}
          terms={body.footer.terms}
          copyright={body.footer.copyright}
          locale={locale}
          pageUrl={pageUrl}
        />
      </>
    )
  }
  return ComponentWithPage
}
