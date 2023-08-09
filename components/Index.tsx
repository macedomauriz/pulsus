import * as React from "react"
import { Stack } from "@mui/material"
import Hero from "components/index/Hero"
import { IndexProps } from "types/pagesTypes"
import LeftRight from "./index/LeftRight"
import RollingLogos from "./index/RollingLogos"
import Features from "./index/Features"
import Learn from "./index/Learn"
import withLayout from "./wrappers/withLayout"

function IndexContent(props: IndexProps["pageContent"]) {
  const { body } = props
  return (
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
  )
}

const WithLayoutIndex = withLayout(IndexContent)

export default function Index({ common, pageContent }: IndexProps) {
  return <WithLayoutIndex common={common} pageContent={pageContent} />
}
