import styled from "@emotion/styled"
import { primaryGradient } from "config/theme"

const SuperImageWrapper = styled.div`
  background: ${primaryGradient};
  width: 100%;
  aspect-ratio: 5 / 4;
  border-radius: 30px;
`

export default function SuperImage() {
  return <SuperImageWrapper />
}
