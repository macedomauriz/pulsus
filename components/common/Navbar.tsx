import Image from "next/image"
import { Button, Paper, Typography } from "@mui/material"
import styled from "@emotion/styled"
import { darkTheme, primaryGradient } from "config/theme"
import { ThemeProvider } from "@mui/material/styles"
import { ThemeProvider as EmotionThemeProvider } from "@emotion/react"

const NavbarWrapper = styled.div`
  position: fixed;
  width: 100%;
  left: 0;
  z-index: 2;
  > div:nth-of-type(1) {
    background: ${primaryGradient};
    padding: 10px 5%;
    text-align: center;
  }
  > div:nth-of-type(2) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 5%;
    height: 80px;
  }
`

interface NavbarProps {
  button: string
  notification: string
}

export default function Navbar({ button, notification }: NavbarProps) {
  return (
    <NavbarWrapper>
      <ThemeProvider theme={darkTheme}>
        <EmotionThemeProvider theme={darkTheme}>
          <Paper square elevation={0}>
            <Typography
              gutterBottom
              dangerouslySetInnerHTML={{ __html: notification }}
            />
          </Paper>
        </EmotionThemeProvider>
      </ThemeProvider>
      <Paper square elevation={0}>
        <Image
          src="/common/logo.png"
          alt="Pulsus logo"
          width="180"
          height="34"
        />
        <Button variant="outlined">{button}</Button>
      </Paper>
    </NavbarWrapper>
  )
}
