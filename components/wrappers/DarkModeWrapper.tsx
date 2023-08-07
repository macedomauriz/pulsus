import { darkTheme } from "config/theme"
import { ThemeProvider } from "@mui/material/styles"
import { ThemeProvider as EmotionThemeProvider } from "@emotion/react"
import { Paper } from "@mui/material"

export interface DarkModeWrapperProps {
  children: React.ReactNode
}

export default function DarkModeWrapper({ children }: DarkModeWrapperProps) {
  return (
    <ThemeProvider theme={darkTheme}>
      <EmotionThemeProvider theme={darkTheme}>
        <Paper square elevation={0}>
          {children}
        </Paper>
      </EmotionThemeProvider>
    </ThemeProvider>
  )
}
