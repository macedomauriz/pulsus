import {
  Button,
  FormControl,
  NativeSelect,
  Paper,
  Typography,
} from "@mui/material"
import { locales } from "config/locales"
import styled from "@emotion/styled"
import { darkTheme, primaryGradient } from "config/theme"
import { ThemeProvider } from "@mui/material/styles"
import { ThemeProvider as EmotionThemeProvider } from "@emotion/react"
import Link from "next/link"
import { LocaleProps } from "types/pagesTypes"
import { grey } from "@mui/material/colors"
import { useRouter } from "next/router"

const NavbarWrapper = styled.nav`
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

const Logo = styled.img`
  width: 119px;
  height: 22px;
  @media (min-width: 400px) {
    width: 133px;
    height: 25px;
  }
  @media (min-width: 600px) {
    width: 180px;
    height: 34px;
  }
`

const LocaleLink = styled(Link)<{ isLocale: boolean }>`
  text-transform: uppercase;
  margin: 0 10px 0 0;
  color: ${({ theme, isLocale }) =>
    isLocale ? theme.palette.primary.main : grey[400]};
`

const Right = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  gap: 4%;
  > div:nth-of-type(1) {
    display: none;
  }
  > div:nth-of-type(2) {
    display: block;
  }
  @media (min-width: 600px) {
    flex-direction: row;
    > div:nth-of-type(1) {
      display: block;
    }
    > div:nth-of-type(2) {
      display: none;
    }
  }
`

interface NavbarProps {
  button: string
  notification: string
  locale: LocaleProps
}

export default function Navbar({ button, notification, locale }: NavbarProps) {
  const router = useRouter()

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedAnchor = event.target.value
    router.push(`/${selectedAnchor}`)
  }

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
        <Logo src="/common/logo.png" alt="Pulsus logo" />
        <Right>
          <div>
            {locales.map(item => {
              return (
                <LocaleLink
                  key={item}
                  href={`/${item}`}
                  isLocale={item === locale}
                >
                  <Typography>{item}</Typography>
                </LocaleLink>
              )
            })}
          </div>
          <div>
            <FormControl style={{ width: 54 }}>
              <NativeSelect
                defaultValue={locale}
                onChange={handleSelectChange}
                variant="standard"
              >
                {locales.map(item => {
                  return (
                    <option key={item} value={item}>
                      {item.toUpperCase()}
                    </option>
                  )
                })}
              </NativeSelect>
            </FormControl>
          </div>
          <Button variant="outlined">{button}</Button>
        </Right>
      </Paper>
    </NavbarWrapper>
  )
}
