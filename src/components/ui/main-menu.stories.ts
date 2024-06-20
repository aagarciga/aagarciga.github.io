
import type { Meta, StoryObj } from '@storybook/react'
import MainMenu from './main-menu';
const meta = {
  title: 'Components/MainMenu',
  component: MainMenu,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  }
} satisfies Meta<typeof MainMenu>

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  argTypes: {}
};