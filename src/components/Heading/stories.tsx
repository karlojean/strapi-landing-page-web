import { Heading } from ".";

export default {
  title: 'Heading',
  component: Heading,
  parameters: {
    backgrounds: {
      default: "dark"
    }
  }
}

export const Template = (args: any) => <Heading {...args} />