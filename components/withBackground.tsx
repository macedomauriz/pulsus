import { darkTheme, lightTheme, primaryGradient } from "config/theme"
import React, { ComponentType } from "react"
import { ThemeProvider } from "@mui/material/styles"
import { ThemeProvider as EmotionThemeProvider } from "@emotion/react"
import { Paper } from "@mui/material"

interface WithBackgroundProps {
  color?: "primaryGradient"
}

const withBackground = <P extends WithBackgroundProps>(
  WrappedComponent: ComponentType<P>
) => {
  class HOC extends React.Component<P> {
    render() {
      const { color, ...restProps } = this.props
      return (
        <ThemeProvider
          theme={color === "primaryGradient" ? darkTheme : lightTheme}
        >
          <EmotionThemeProvider
            theme={color === "primaryGradient" ? darkTheme : lightTheme}
          >
            <Paper
              square
              elevation={0}
              style={{
                background:
                  color === "primaryGradient" ? primaryGradient : "none",
              }}
            >
              <WrappedComponent {...(restProps as P)} />
            </Paper>
          </EmotionThemeProvider>
        </ThemeProvider>
      )
    }
  }
  return HOC
}

export default withBackground
