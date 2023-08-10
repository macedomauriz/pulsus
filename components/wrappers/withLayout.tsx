import React, { useContext } from "react"
import Footer from "components/common/Footer"
import Head from "next/head"
import Navbar from "components/common/Navbar"
import { IndexProps } from "types/pagesTypes"
import styled from "@emotion/styled"
import { NotificationContext } from "contexts/NotificationContext"

const ComponentWrapper = styled.main<{ fill: number }>`
  > div {
    padding: ${({ fill }) => `${fill}px 0 0 0`};
    @media (min-width: 600px) {
      padding: ${({ fill }) => `${fill - 40}px 0 0 0`};
    }
  }
`

export default function withLayout(Component: any) {
  const ComponentWithPage = ({ common, pageContent }: IndexProps) => {
    const { isNotificationClosed } = useContext(NotificationContext)
    const { body } = common
    const { metadata, locale, page } = pageContent
    const fill = isNotificationClosed ? 140 : 180

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
        <ComponentWrapper fill={fill}>
          <Navbar
            button={body.navbar.button}
            notification={body.navbar.notification}
            locale={locale}
            pageUrl={pageUrl}
          />
          <Component {...pageContent} />
        </ComponentWrapper>
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
