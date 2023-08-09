import React, { useContext } from "react"
import { NotificationContext } from "contexts/NotificationContext"
import Footer from "components/common/Footer"
import Head from "next/head"
import Navbar from "components/common/Navbar"

export default function withPage<P>(WrappedComponent: React.ComponentType<P>) {
  const ComponentWithPage = (props: P) => {
    // const { isNotificationClosed } = useContext(NotificationContext)
    return (
      <>
        <Head>
          <title>{metadata.title}</title>
          <meta name="description" content={metadata.description} />
          <link
            rel="alternate"
            hrefLang={locale}
            href={`https://www.pulsus.ai/${locale}/`}
          />
          <link rel="canonical" href={`https://www.pulsus.ai/${locale}/`} />
        </Head>
        <Navbar
          button={body.navbar.button}
          notification={body.navbar.notification}
          locale={locale}
        />
        <WrappedComponent {...props} />
        <Footer
          title={body.footer.title}
          subtitle={body.footer.subtitle}
          button={body.footer.button}
          dedication={body.footer.dedication}
          terms={body.footer.terms}
          copyright={body.footer.copyright}
        />
      </>
    )
  }
  return ComponentWithPage
}
