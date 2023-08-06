import { Typography } from "@mui/material"
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
    <Grid
      container
      spacing={{ xs: 2, md: 4, lg: 12 }}
      columns={{ lg: 18 }}
      direction={shift ? "row-reverse" : "row"}
      alignItems={{ xs: "start", md: "center" }}
    >
      <Grid
        xs={12}
        md={5}
        lg={8}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <SuperImage image={image} {...superImageProps} />
      </Grid>
      <Grid xs={12} md={7} lg={10} display="flex" alignItems="center">
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
  )
}
