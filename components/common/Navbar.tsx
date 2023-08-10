import React from "react"
import {
  Button,
  Container,
  FormControl,
  NativeSelect,
  Paper,
  Typography,
} from "@mui/material"
import { faXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { locales } from "config/locales"
import styled from "@emotion/styled"
import { darkTheme, primaryGradient } from "config/theme"
import { ThemeProvider } from "@mui/material/styles"
import { ThemeProvider as EmotionThemeProvider } from "@emotion/react"
import { LocaleProps } from "types/pagesTypes"
import { grey } from "@mui/material/colors"
import { useRouter } from "next/router"
import Link from "next/link"
import { useContext } from "react"
import { NotificationContext } from "contexts/NotificationContext"

const NavbarWrapper = styled.nav`
  position: fixed;
  width: 100%;
  left: 0;
  z-index: 3;
`

const Notification = styled.div`
  background: ${primaryGradient};
  padding: 10px 20px;
  text-align: center;
`

const MainNavbar = styled(Paper)`
  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px;
    height: 80px;

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

const e = React.createElement
const LocaleLink = styled(
  // eslint-disable-next-line
  ({ isLocale, ...props }: any) => e(Link, props)
)`
  text-transform: uppercase;
  margin: 0 10px 0 0;
  color: ${({ theme, isLocale }) =>
    !isLocale ? grey[400] : theme.palette.primary.main};
  text-decoration-color: ${({ isLocale }) => !isLocale && grey[400]};
`

const Right = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  gap: 4%;
  > div:nth-of-type(1) {
    display: none;
  }
  > div:nth-of-type(2) {
    display: flex;
  }
  @media (min-width: 600px) {
    flex-direction: row;
    > div:nth-of-type(1) {
      display: flex;
    }
    > div:nth-of-type(2) {
      display: none;
    }
  }
`

const CloseButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  background: none;
  border: none;
  cursor: pointer;
  width: 12px;
  height: 12px;
  padding: 0;
  @media (min-width: 1120px) {
    top: 16px;
    right: 14px;
  }
`

interface NavbarProps {
  button: string
  notification: string
  locale: LocaleProps
  pageUrl: string
}

export default function Navbar({
  button,
  notification,
  locale,
  pageUrl,
}: NavbarProps) {
  const { isNotificationClosed, closeNotification } =
    useContext(NotificationContext)
  const router = useRouter()

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedAnchor = event.target.value
    router.push(`/${selectedAnchor}/${pageUrl}`)
  }

  return (
    <NavbarWrapper>
      {!isNotificationClosed && (
        <Notification>
          <Container maxWidth="content">
            <ThemeProvider theme={darkTheme}>
              <EmotionThemeProvider theme={darkTheme}>
                <Paper square elevation={0}>
                  <Typography
                    gutterBottom
                    dangerouslySetInnerHTML={{ __html: notification }}
                  />
                  <CloseButton onClick={closeNotification}>
                    <FontAwesomeIcon
                      icon={faXmark}
                      size="lg"
                      style={{ color: "white" }}
                    />
                  </CloseButton>
                </Paper>
              </EmotionThemeProvider>
            </ThemeProvider>
          </Container>
        </Notification>
      )}
      <MainNavbar square elevation={0}>
        <Container maxWidth="content">
          <Link href={`/${locale}`}>
            <Logo src="/common/logo.png" alt="Pulsus logo" />
          </Link>
          <Right>
            <div>
              {locales.map(item => {
                return (
                  <LocaleLink
                    key={`/${item}/${pageUrl}`}
                    href={`/${item}/${pageUrl}`}
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
        </Container>
      </MainNavbar>
    </NavbarWrapper>
  )
}
