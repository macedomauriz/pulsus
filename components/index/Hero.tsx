import { Button, Typography } from "@mui/material"
import Grid from "@mui/material/Unstable_Grid2"
import SuperImage from "./SuperImage"

interface HeroProps {
  primary: string
  secondary: string
  button: string
}

export default function Hero({ primary, secondary, button }: HeroProps) {
  return (
    <Grid container spacing={10} minHeight="100vh">
      <Grid xs={6} display="flex" alignItems="center">
        <div>
          <Typography
            variant="h1"
            gutterBottom
            dangerouslySetInnerHTML={{ __html: primary }}
          />
          <Typography
            variant="subtitle"
            component="h2"
            gutterBottom
            dangerouslySetInnerHTML={{ __html: secondary }}
          />
          <Button variant="contained" sx={{ mt: 4 }}>
            {button}
          </Button>
        </div>
      </Grid>
      <Grid xs={6} display="flex" justifyContent="center" alignItems="center">
        <SuperImage />
      </Grid>
    </Grid>
  )
}
