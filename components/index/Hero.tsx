import { Button, Typography } from "@mui/material"
import Grid from "@mui/material/Unstable_Grid2"
import SuperImage from "./SuperImage"
import styled from "@emotion/styled"

interface HeroProps {
  primary: string
  secondary: string
  button: string
  image: string
}

const TextContainer = styled.div`
  h1,
  h2 {
    text-align: left;
  }
  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1,
    h2 {
      text-align: center;
    }
  }
`

export default function Hero({ primary, secondary, button, image }: HeroProps) {
  return (
    <Grid
      container
      spacing={{ xs: 8, sm: 4, lg: 10 }}
      columns={{ xs: 12, md: 20 }}
      alignItems={{ xs: "start", md: "center" }}
    >
      <Grid xs={12} sm={6} md={9} display="flex">
        <TextContainer>
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
        </TextContainer>
      </Grid>
      <Grid
        xs={12}
        sm={6}
        md={11}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <SuperImage
          image={image}
          offset={[0, 50]}
          scale={0.95}
          aspectRatio="7/6"
        />
      </Grid>
    </Grid>
  )
}
