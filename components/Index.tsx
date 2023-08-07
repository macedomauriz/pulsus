import * as React from "react"
import Head from "next/head"
import { Stack } from "@mui/material"
import Hero from "components/index/Hero"
import { IndexProps } from "types/pagesTypes"
import LeftRight from "./index/LeftRight"
import Navbar from "./common/Navbar"

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
      <Stack spacing={{ xs: 4, md: 10, lg: 14 }}>
        <Hero
          primary={body.hero.primary}
          secondary={body.hero.secondary}
          button={body.hero.button}
          image={body.hero.image}
        />
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
      </Stack>
    </>
  )
}
