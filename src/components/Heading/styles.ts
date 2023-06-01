import styled, { DefaultTheme, css } from "styled-components";

interface Props {
  colorDark: boolean;
  size: "small" | "medium" | "big" | "huge";
  uppercase: boolean;
}

const titleSize = {
  small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.size.medium};
  `,
  medium: (theme: DefaultTheme) => css`
    font-size: ${theme.font.size.large};
  `,
  big: (theme: DefaultTheme) => css`
    font-size: ${theme.font.size.xlarge};
  `,
  huge: (theme: DefaultTheme) => css`
    font-size: ${theme.font.size.xhuge};
  `,
};

const titleCase = (uppercase: boolean) => css`
  text-transform: ${uppercase ? "uppercase" : "none"};
`;

export const Title = styled.h1<Props>`
  color: ${({ theme, colorDark }) =>
    colorDark ? theme.colors.primaryBg : theme.colors.white};
  ${({ theme, size }) => titleSize[size](theme)}
  ${({ uppercase }) => titleCase(uppercase)}
`;
