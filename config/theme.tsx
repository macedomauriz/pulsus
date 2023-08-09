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

  interface BreakpointOverrides {
    content: true
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    body: true
    subtitle?: true
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
  breakpoints: {
    values: {
      content: 1340,
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
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
      fontWeight: 500,
      fontSize: "24px",
      "@media (min-width:1200px)": {
        fontSize: "21px",
      },
    },
    h5: {
      fontWeight: 500,
      fontSize: "24px",
      "@media (min-width:1200px)": {
        fontSize: "21px",
      },
    },
    h6: {
      fontWeight: 500,
      fontSize: "24px",
      "@media (min-width:1200px)": {
        fontSize: "21px",
      },
    },
    // Body
    body: {
      fontWeight: 400,
      fontSize: "16px",
    },
    // Body
    subtitle: {
      fontWeight: 400,
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
          variantMapping: {
            body: "p",
            subtitle: "p",
          },
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
      MuiLink: {
        styleOverrides: {
          root: {
            color: green1,
            textDecorationColor: green1,
          },
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
            fontWeight: 500,
            paddingTop: 8,
            paddingBottom: 8,
            paddingLeft: 22,
            paddingRight: 22,
            "@media (max-width:600px)": {
              fontSize: 14,
              paddingTop: 4,
              paddingBottom: 4,
              paddingLeft: 12,
              paddingRight: 12,
            },
          },
        },
        variants: [
          {
            props: { variant: "text" },
            style: {
              color: grey[900],
              "&:hover": {
                background: grey[200],
              },
            },
          },
          {
            props: { variant: "outlined" },
            style: {
              border: `2px solid ${grey[900]}`,
              color: grey[900],
              "&:hover": {
                border: `2px solid ${grey[900]}`,
                background: grey[200],
              },
            },
          },
          {
            props: { variant: "contained" },
            style: {
              background: grey[900],
              fontWeight: 400,
            },
          },
        ],
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
          variantMapping: {
            body: "p",
            subtitle: "p",
          },
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
      MuiLink: {
        styleOverrides: {
          root: {
            color: grey[100],
            textDecorationColor: grey[100],
          },
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
            fontWeight: 500,
            paddingTop: 8,
            paddingBottom: 8,
            paddingLeft: 22,
            paddingRight: 22,
            background: grey[900],
            "@media (max-width:600px)": {
              fontSize: 14,
              paddingTop: 4,
              paddingBottom: 4,
              paddingLeft: 18,
              paddingRight: 18,
            },
          },
        },
        variants: [
          {
            props: { variant: "text" },
            style: {
              color: grey[100],
              "&:hover": {
                background: green1,
                color: grey[50],
              },
            },
          },
          {
            props: { variant: "outlined" },
            style: {
              border: `2px solid ${grey[100]}`,
              background: "transparent",
              color: grey[100],
              "&:hover": {
                border: `2px solid ${grey[100]}`,
                background: green1,
              },
            },
          },
          {
            props: { variant: "contained" },
            style: {
              background: grey[100],
              color: grey[900],
              fontWeight: 400,
              "&:hover": {
                background: green1,
                color: grey[50],
              },
            },
          },
        ],
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
