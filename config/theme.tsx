import { createTheme, Theme as MuiTheme } from "@mui/material/styles"
import { deepmerge } from "@mui/utils"
import { grey } from "@mui/material/colors"

// declare emotion theme to match MUI
declare module "@emotion/react" {
  interface Theme extends MuiTheme {}
}

declare module "@mui/material/styles" {
  interface TypographyVariants {
    body: React.CSSProperties
    subtitle: React.CSSProperties
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    body?: React.CSSProperties
    subtitle?: React.CSSProperties
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    body: true
    subtitle?: true
    h5: false
    h6: false
    body1: false
    subtitle1: false
    body2: false
    subtitle2: false
  }
}

const green1 = "rgba(17, 153, 142, 1)"
const green2 = "rgba(35, 193, 174, 1)"
const green3 = "rgba(56, 239, 125, 1)"

const themeCommonOptions = {
  typography: {
    htmlFontSize: 16,
    // Headings
    h1: {
      fontWeight: 400,
      fontSize: "40px",
      "@media (min-width:1200px)": {
        fontSize: "56px",
      },
    },
    h2: {
      fontWeight: 400,
      fontSize: "32px",
      "@media (min-width:1200px)": {
        fontSize: "48px",
      },
    },
    h3: {
      fontWeight: 400,
      fontSize: "26px",
      "@media (min-width:1200px)": {
        fontSize: "32px",
      },
    },
    h4: {
      fontWeight: 400,
      fontSize: "24px",
      "@media (min-width:1200px)": {
        fontSize: "21px",
      },
    },
    // Body
    body: {
      fontWeight: 300,
      fontSize: "16px",
    },
    // Body
    subtitle: {
      fontWeight: 300,
      fontSize: "18px",
    },
    // Button
    button: {
      fontWeight: 400,
      fontSize: "18px",
    },
    // Caption
    caption: {
      fontWeight: 300,
      fontSize: "12px",
    },
    // Overline
    overline: {
      fontWeight: 300,
      fontSize: "14px",
    },
  },
}

const lightTheme = createTheme(
  deepmerge(themeCommonOptions, {
    palette: {
      primary: {
        main: "rgba(17, 153, 142, 1)",
        contrastText: "#fff",
      },
    },
    components: {
      MuiTypography: {
        defaultProps: {
          variant: "body",
        },
        styleOverrides: {
          root: {
            mark: {
              color: green2,
              background: "transparent",
            },
          },
        },
      },
      MuiStack: {
        defaultProps: {
          useFlexGap: true,
        },
      },
      MuiButton: {
        defaultProps: {
          disableRipple: true,
          disableElevation: true,
        },
        styleOverrides: {
          root: {
            whiteSpace: "nowrap",
            textTransform: "initial",
            borderRadius: 40,
            paddingTop: 16,
            paddingBottom: 16,
            paddingLeft: 22,
            paddingRight: 22,
            background: grey[900],
          },
        },
      },
    },
  })
)

const darkTheme = createTheme(
  deepmerge(themeCommonOptions, {
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
        defaultProps: {
          variant: "body",
        },
        styleOverrides: {
          root: {
            mark: {
              color: green2,
              background: "transparent",
            },
          },
        },
      },
      MuiStack: {
        defaultProps: {
          useFlexGap: true,
        },
      },
      MuiButton: {
        defaultProps: {
          disableRipple: true,
          disableElevation: true,
        },
        styleOverrides: {
          root: {
            whiteSpace: "nowrap",
            textTransform: "initial",
            borderRadius: 40,
            paddingTop: 16,
            paddingBottom: 16,
            paddingLeft: 22,
            paddingRight: 22,
            background: grey[900],
          },
        },
      },
    },
  })
)

export const primaryGradient = `
linear-gradient(
    210deg,
    ${green1} 0%,
    ${green2} 50%,
    ${green3} 100%
  );
`

export { lightTheme, darkTheme }
