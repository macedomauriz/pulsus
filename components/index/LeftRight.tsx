import { Container, Typography } from "@mui/material"
import Grid from "@mui/material/Unstable_Grid2"
import SuperImage, { SuperImageProps } from "./SuperImage"

interface LeftRightProps {
  primary: string
  secondary: string
  image: string
  shift: boolean
  superImageProps?: Omit<SuperImageProps, "image">
}

export default function LeftRight({
  primary,
  secondary,
  image,
  shift,
  superImageProps,
}: LeftRightProps) {
  return (
    <Container maxWidth="content">
      <Grid
        container
        spacing={{ xs: 3, sm: 6, lg: 14 }}
        columns={{ lg: 18 }}
        direction={{
          xs: "column-reverse",
          sm: shift ? "row-reverse" : "row",
        }}
        alignItems={{ xs: "start", md: "center" }}
      >
        <Grid
          xs={12}
          sm={6}
          lg={8}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <SuperImage image={image} {...superImageProps} />
        </Grid>
        <Grid xs={12} sm={6} lg={10} display="flex" alignItems="center">
          <div>
            <Typography
              variant="h2"
              gutterBottom
              dangerouslySetInnerHTML={{ __html: primary }}
            />
            <Typography
              variant="subtitle"
              dangerouslySetInnerHTML={{ __html: secondary }}
            />
          </div>
        </Grid>
      </Grid>
    </Container>
  )
}
