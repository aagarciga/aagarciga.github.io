import Branding from '@/components/ui/branding'
import type { Meta, StoryObj } from '@storybook/react'
const meta = {
  title: 'Components/Branding',
  component: Branding,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  }
} satisfies Meta<typeof Branding>

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    colorMode: 'auto'
  },
  argTypes: {}
};
