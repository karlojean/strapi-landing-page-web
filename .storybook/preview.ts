import type { Preview } from "@storybook/react";
import { globalDecorators } from "./decorators";
import { theme } from "../src/styles/theme";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    backgrounds: {
      default: "light",
      values: [
        {
          name: "light",
          value: theme.colors.white
        },
        {
          name: "dark",
          value: theme.colors.primaryBg
        }
      ]
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: globalDecorators
};

export default preview;
