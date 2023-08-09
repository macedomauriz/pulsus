import styled from "@emotion/styled"
import { IconProp } from "@fortawesome/fontawesome-svg-core"
import {
  faLinkedinIn,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Button, Container, Link, Typography } from "@mui/material"
import { grey } from "@mui/material/colors"
import DarkModeWrapper from "components/wrappers/DarkModeWrapper"
import { primaryGradient } from "config/theme"

const socialMedia = [
  {
    icon: faTwitter,
    href: "https://www.linkedin.com/in/macedomauriz/",
  },
  {
    icon: faLinkedinIn,
    href: "https://www.linkedin.com/in/macedomauriz/",
  },
  {
    icon: faInstagram,
    href: "https://www.linkedin.com/in/macedomauriz/",
  },
  {
    icon: faEnvelope,
    href: "https://www.linkedin.com/in/macedomauriz/",
  },
]

const FooterWrapper = styled.footer`
  background: ${grey[200]};
  > div {
    background: ${primaryGradient};
    border-radius: 64px 64px 0 0;
  }
  > div > div > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 50px 14px;
    > div:nth-of-type(1) {
      flex: 1;
      display: flex;
      justify-content: space-between;
      align-items: center;
      max-width: 500px;
      min-height: 400px;
      @media (min-width: 1000px) {
        min-height: 500px;
      }
    }
    > div:nth-of-type(2) {
      @media (min-width: 1000px) {
        display: flex;
        width: 100%;
        justify-content: space-between;
      }
      > div {
        display: flex;
        align-items: center;
        gap: 20px;
        @media (max-width: 1000px) {
          flex-direction: column;
        }
      }
    }
  }
`

const Action = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 40px 0;
  @media (min-width: 600px) {
    justify-content: center;
    flex-direction: row;
    flexwrap: wrap;
  }
`

export interface FooterProps {
  title: string
  subtitle: string
  button: string[]
  dedication: string
  terms: string
  copyright: string
}

export default function Footer({
  title,
  subtitle,
  button,
  dedication,
  terms,
  copyright,
}: FooterProps) {
  return (
    <DarkModeWrapper>
      <FooterWrapper>
        <div>
          <Container maxWidth="content">
            <div>
              <div>
                <div>
                  <Typography variant="h1" gutterBottom align="center">
                    {title}
                  </Typography>
                  <Typography align="center">{subtitle}</Typography>
                  <Action>
                    <Button variant="contained">{button[0]}</Button>
                    <Button variant="outlined">{button[1]}</Button>
                  </Action>
                </div>
              </div>
              <div>
                <div>
                  <div>
                    {socialMedia.map(i => {
                      return (
                        <Link
                          key={i.href}
                          href={i.href}
                          target="_blank"
                          sx={{ mr: 2 }}
                        >
                          <FontAwesomeIcon
                            icon={i.icon as IconProp}
                            size="xl"
                          />
                        </Link>
                      )
                    })}
                  </div>
                  <Typography variant="subtitle">
                    {dedication}
                    <Link href="https://brainlogic.ai/">BrainLogic</Link>
                  </Typography>
                </div>
                <div>
                  <Typography variant="subtitle">
                    <Link href="https://brainlogic.ai/">{terms}</Link>
                  </Typography>
                  <Typography variant="subtitle">{copyright}</Typography>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </FooterWrapper>
    </DarkModeWrapper>
  )
}
