import { Button, Typography } from "@mui/material"
import Grid from "@mui/material/Unstable_Grid2"
import SuperImage from "./SuperImage"

interface HeroProps {
  primary: string
  secondary: string
  button: string
  image: string
}

export default function Hero({ primary, secondary, button, image }: HeroProps) {
  return (
    <Grid container spacing={10} minHeight={{ lg: "100vh", xl: "auto" }}>
      <Grid xs={12} md={6} display="flex" alignItems="center">
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
      <Grid
        xs={12}
        md={6}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <SuperImage image={image} offset={[0, 30]} scale={1.1} />
      </Grid>
    </Grid>
  )
}
