import React, { useRef, useState } from "react"
import styled from "@emotion/styled"
import { Container, Link, Typography } from "@mui/material"
import Image from "next/image"
import { getFileName } from "utils/getFileName"
import { grey } from "@mui/material/colors"
import SiidesGradient from "components/wrappers/SidesGradient"

const LearnWrapper = styled.div`
  padding: 100px 0;
  background: ${grey[200]};
  > div {
    display: flex;
    flex-direction: column;
    gap: 40px;
  }
`

const Cards = styled.div`
  display: flex;
  gap: 24px;
  white-space: nowrap;
  overflow-x: auto;
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
  padding: 0 10px 0 0;
  > div {
    display: flex;
    flex-direction: column;
    gap: 14px;
    background: ${grey[50]};
    border-radius: 24px;
    > a {
      text-decoration: none;
      color: inherit;
    }
    > .MuiTypography-root {
      width: 240px;
      white-space: break-spaces;
      @media (min-width: 600px) {
        width: 400px;
      }
    }
  }
`
interface LearnProps {
  title: string
  items: {
    icon: string
    title: string
    subtitle: string
  }[]
}

export default function Learn({ title, items }: LearnProps) {
  const [showLeftGradient, setShowLeftGradient] = useState(false)
  const contentRef = useRef<HTMLDivElement | null>(null)

  const handleScroll = () => {
    if (contentRef.current) {
      const scrollLeft = contentRef.current.scrollLeft
      if (scrollLeft > 0) {
        setShowLeftGradient(true)
      } else {
        setShowLeftGradient(false)
      }
    }
  }

  return (
    <LearnWrapper>
      <Container maxWidth="content">
        <Typography variant="h2">{title}</Typography>
        <SiidesGradient
          width={14}
          color={grey[200]}
          hideLeft={!showLeftGradient}
        >
          <Cards ref={contentRef} onScroll={handleScroll}>
            {items.map(i => {
              return (
                <div key={i.title}>
                  <Link href="/" sx={{ p: 4 }}>
                    <Image
                      src={`/learn/${i.icon}`}
                      width={30}
                      height={30}
                      alt={getFileName(i.icon)}
                    />
                    <Typography variant="h4" gutterBottom>
                      {i.title}
                    </Typography>
                    <Typography>{i.subtitle}</Typography>
                  </Link>
                </div>
              )
            })}
          </Cards>
        </SiidesGradient>
      </Container>
    </LearnWrapper>
  )
}
