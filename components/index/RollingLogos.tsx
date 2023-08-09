import { keyframes } from "@emotion/react"
import Image from "next/image"
import React from "react"
import styled from "@emotion/styled"
import Link from "next/link"
import { Container, Typography } from "@mui/material"
import { getFileName } from "utils/getFileName"
import SiidesGradient from "components/wrappers/SidesGradient"

const carouselAnimation = () => keyframes`
  from {transform: translate(0);}
  to {transform: translateX(-100%);}
`

const RollingLogosWrapper = styled(Container)`
  display: flex;
  flex-direction: column;
  gap: 30px;
`

const Logos = styled.div`
  position: relative;
  display: flex;
  overflow-x: hidden;
  ::-webkit-scrollbar {
    display: none;
  }
  > div {
    display: flex;
    flex-direction: column;
    gap: 54px;
    > div {
      display: flex;
    }
  }
  svg {
    fill: white;
  }
`

const ListWrapper = styled.div`
  display: flex;
  animation: ${carouselAnimation()} 30s linear infinite;
  > div {
    display: flex;
    gap: 40px;
    padding: 0 40px 0 0;
    transform: translateX(0);
  }
  > div div {
    position: relative;
    display: flex;
    align-items: center;
    width: 180px;
    height: 55px;
  }
`

type ListProps = Pick<RollingLogosProps, "logos">

function List({ logos }: ListProps) {
  return (
    <ListWrapper>
      <div>
        {logos.map(item => {
          return (
            <Link key={item.anchor} href={item.anchor}>
              <Image
                src={item.image}
                alt={getFileName(item.image)}
                width={item.size[0]}
                height={item.size[1]}
              />
            </Link>
          )
        })}
      </div>
    </ListWrapper>
  )
}

interface RollingLogosProps {
  title: string
  logos: {
    image: string
    anchor: string
    size: number[]
  }[]
}

export default function RollingLogos({ title, logos }: RollingLogosProps) {
  return (
    <RollingLogosWrapper maxWidth="content">
      <Typography variant="subtitle" component="p" align="center" gutterBottom>
        {title}
      </Typography>
      <SiidesGradient width={40} color="white">
        <Logos>
          <div>
            <div>
              <List logos={logos} />
              <List logos={logos} />
              <List logos={logos} />
            </div>
          </div>
        </Logos>
      </SiidesGradient>
    </RollingLogosWrapper>
  )
}
