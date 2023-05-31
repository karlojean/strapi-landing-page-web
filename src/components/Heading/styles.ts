import styled from "styled-components";

interface Props {
  colorDark: boolean,
}

export const Title = styled.h1<Props>`
  ${({theme, colorDark}) => `
  color: ${colorDark ? theme.colors.primaryBg : theme.colors.white}
  `}
`
