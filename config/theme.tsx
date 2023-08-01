import { createTheme, Theme as MuiTheme } from "@mui/material/styles"

// declare emotion theme to match MUI
declare module "@emotion/react" {
  interface Theme extends MuiTheme {}
}

const green1 = "rgba(17, 153, 142, 1)"
const green2 = "rgba(35, 193, 174, 1)"
const green3 = "rgba(56, 239, 125, 1)"

const lightTheme = createTheme({
  palette: {
    primary: {
      main: "rgba(17, 153, 142, 1)",
      contrastText: "#fff",
    },
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          mark: {
            color: green2,
            background: "transparent",
          },
        },
      },
    },
  },
})

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "rgba(17, 153, 142, 1)",
      contrastText: "#fff",
    },
    background: {
      paper: "inherit",
    },
  },
  // TODO: refactor with lightTheme
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          mark: {
            color: green2,
            background: "transparent",
          },
        },
      },
    },
  },
})

export const primaryGradient = `
linear-gradient(
    210deg,
    ${green1} 0%,
    ${green2} 50%,
    ${green3} 100%
  );
`

export { lightTheme, darkTheme }
