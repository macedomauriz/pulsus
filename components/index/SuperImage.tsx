import styled from "@emotion/styled"
import { primaryGradient } from "config/theme"
import Image from "next/image"
import { getFileName } from "utils/getFileName"

const SuperImageWrapper = styled.div<
  Pick<SuperImageProps, "offset" | "scale" | "transformOrigin" | "aspectRatio">
>`
  position: relative;
  background: ${primaryGradient};
  width: 100%;
  aspect-ratio: ${({ aspectRatio }) => aspectRatio ?? "5/4"};
  border-radius: 30px;
  > img {
    object-fit: contain;
    transform: ${({ scale, offset }) =>
      `scale(${scale ?? 1}) translate(${(offset && offset[0]) ?? 0}px, ${
        (offset && offset[1]) ?? 0
      }px)`};
    transform-origin: ${({ transformOrigin }) => transformOrigin ?? "center"};
  }
`

export interface SuperImageProps {
  image: string
  offset?: number[]
  scale?: number
  transformOrigin?: React.CSSProperties["transformOrigin"]
  aspectRatio?: string
}

export default function SuperImage({
  image,
  offset,
  scale,
  transformOrigin,
  aspectRatio,
}: SuperImageProps) {
  return (
    <SuperImageWrapper
      offset={offset}
      scale={scale}
      transformOrigin={transformOrigin}
      aspectRatio={aspectRatio}
    >
      <Image src={image} alt={getFileName(image)} fill />
    </SuperImageWrapper>
  )
}
