import * as React from "react"
import Head from "next/head"
import { Stack } from "@mui/material"
import Hero from "components/index/Hero"
import { IndexProps } from "types/pagesTypes"
import LeftRight from "./index/LeftRight"
import Navbar from "./common/Navbar"
import Footer from "./common/Footer"
import RollingLogos from "./index/RollingLogos"
import Features from "./index/Features"
import Learn from "./index/Learn"

export default function Index({ data }: IndexProps) {
  const { metadata, body, locale } = data
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
      <Stack spacing={{ xs: 10, lg: 14 }}>
        <Hero
          primary={body.hero.primary}
          secondary={body.hero.secondary}
          button={body.hero.button}
          image={body.hero.image}
        />
        <RollingLogos title={body.press.title} logos={body.press.logos} />
        <RollingLogos title={body.partners.title} logos={body.partners.logos} />
        {body.attributes.map((item: any, index: number) => {
          return (
            <LeftRight
              key={item.title}
              primary={item.title}
              secondary={item.subtitle}
              image={item.image}
              shift={index % 2 === 0}
              superImageProps={
                index % 2 === 0
                  ? {
                      scale: 0.9,
                      transformOrigin: "bottom",
                      aspectRatio: "1/1",
                    }
                  : { scale: 0.8, aspectRatio: "1/1" }
              }
            />
          )
        })}
        <Features
          title={body.features.title}
          subtitle={body.features.subtitle}
          items={body.features.items}
        />
        <Learn title={body.learn.title} items={body.learn.items} />
      </Stack>
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
