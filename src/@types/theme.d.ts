import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primaryBg: string;
      secondaryBg: string;
      white: string;
    };
    font: {
      family: {
        default: string;
        secondary: string;
      };
      size: {
        xsmal: string;
        small: string;
        medium: string;
        large: string;
        xlarge: string;
        xxlarge: string;
        huge: string;
        xhuge: string;
      };
    };
    media: {
      lteMedium: string;
    };
  }
}
