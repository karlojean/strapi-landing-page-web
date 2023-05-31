import { Heading } from ".";

export default {
  title: 'Heading',
  component: Heading,
  args: {
    children: "O texto",
  },
  argTypes: {
    children: {type: 'string'}
  },
  parameters: {
    backgrounds: {
      default: "dark"
    }
  }
}

export const Light = (args: any) => <Heading {...args} />
export const Dark = (args: any) => <Heading {...args} />

Light.parameters = {
  backgrounds: {
    default: 'light'
  }
}

Dark.args = {
  children: 'O texto',
  colorDark: false
}
