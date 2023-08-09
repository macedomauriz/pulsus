import styled from "@emotion/styled"

const SiidesGradientWrapper = styled.div<
  Pick<SiidesGradientProps, "color" | "width" | "hideLeft">
>`
  position: relative;
  width: 100%;
  height: 100%;
  &::before,
  &::after {
    content: "";
    position: absolute;
    z-index: 2;
    top: 0;
    bottom: 0;
    background: linear-gradient(to left, transparent, ${({ color }) => color});
  }
  &::before {
    left: 0;
    width: ${({ hideLeft, width }) => (hideLeft ? 0 : width)}px;
  }
  &::after {
    right: 0;
    width: ${({ width }) => width}px;
    transform: scaleX(-1);
  }
`

export interface SiidesGradientProps {
  children: React.ReactNode
  color: string
  width?: number
  hideLeft?: boolean
}

export default function SiidesGradient({
  children,
  color,
  width,
  hideLeft,
}: SiidesGradientProps) {
  return (
    <SiidesGradientWrapper color={color} width={width} hideLeft={hideLeft}>
      {children}
    </SiidesGradientWrapper>
  )
}
