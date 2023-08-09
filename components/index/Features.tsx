import React from "react"
import styled from "@emotion/styled"
import { Container, Typography } from "@mui/material"
import Image from "next/image"
import { getFileName } from "utils/getFileName"

const FeaturesWrapper = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 60px;
  > div {
    text-align: center;
  }
  > div:nth-of-type(1) {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 900px;
  }
`

const Slide = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  > div {
    max-width: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 14px;
    padding: 20px;
  }
`

interface FeaturesProps {
  title: string
  subtitle: string
  items: {
    icon: string
    title: string
    subtitle: string
  }[]
}

export default function Features({ title, subtitle, items }: FeaturesProps) {
  return (
    <FeaturesWrapper maxWidth="content">
      <div>
        <Typography
          variant="h2"
          gutterBottom
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <Typography sx={{ maxWidth: 700 }}>{subtitle}</Typography>
      </div>
      <Slide>
        {items.map(i => {
          return (
            <div key={i.title}>
              <Image
                src={`/features/${i.icon}`}
                width={60}
                height={60}
                alt={getFileName(i.icon)}
              />
              <Typography variant="h3" align="center">
                {i.title}
              </Typography>
              <Typography align="center">{i.subtitle}</Typography>
            </div>
          )
        })}
      </Slide>
    </FeaturesWrapper>
  )
}
