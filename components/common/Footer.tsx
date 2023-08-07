import styled from "@emotion/styled"
import { Typography } from "@mui/material"
import DarkModeWrapper from "components/wrappers/DarkModeWrapper"
import { primaryGradient } from "config/theme"

const FooterWrapper = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${primaryGradient};
  border-radius: 64px 64px 0 0;
  min-height: 400px;
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
          <Typography variant="h1" gutterBottom>
            {title}
          </Typography>
          <Typography>{subtitle}</Typography>
        </div>
      </FooterWrapper>
    </DarkModeWrapper>
  )
}
