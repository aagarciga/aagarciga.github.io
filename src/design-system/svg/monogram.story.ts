
import { Meta, StoryObj } from "@storybook/react";
import Monogram from "./monogram";

const meta = {
  title: 'Design System/SVG/Monogram',
  component: Monogram,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    fill: { control: 'color' },
    width: { control: 'number' },
    height: { control: 'number' }
  }
} satisfies Meta<typeof Monogram>

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    fill: '#000000',
    width: 64,
    height: 64
  }
}