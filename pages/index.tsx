import * as React from "react"
import { Container } from "@mui/material"
import Hero from "components/Hero"

export default function Index() {
  return (
    <Container maxWidth="xl" disableGutters={true}>
      <Hero />
    </Container>
  )
}
