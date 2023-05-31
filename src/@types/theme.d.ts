import "styled-components";

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primaryBg: string,
      secondaryBg: string,
      white: string,
    },
    font: {
      family: {
        default: string,
        secondary: string
      }
    }
  }
}