import { Typography } from "@mui/material"
import Grid from "@mui/material/Unstable_Grid2"
import SuperImage from "./SuperImage"
// import styled from "@emotion/styled"
// import { primaryGradient } from "config/theme"

// const Test = styled(Container)`
//   background: ${primaryGradient};
// `

export default function Hero() {
  return (
    <Grid container spacing={8} minHeight="100vh">
      <Grid xs={6} display="flex" alignItems="center">
        <div>
          <Typography variant="h2" component="h1" gutterBottom>
            Tu nuevo y poderoso asistente personal <mark>impulsado por AI</mark>
          </Typography>
          <Typography variant="subtitle1" component="h1">
            Pulsus se integra a la perfección en su rutina, anticipándose a sus
            necesidades y brindando asistencia oportuna.
          </Typography>
        </div>
      </Grid>
      <Grid xs={6} display="flex" justifyContent="center" alignItems="center">
        <SuperImage />
      </Grid>
    </Grid>
  )
}
