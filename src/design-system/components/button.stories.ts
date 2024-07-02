import Button from "./button";
import { Meta, StoryObj } from "@storybook/react";
import { DocumentTextIcon } from "@heroicons/react/24/solid";

const meta = {
  title: 'Design System/UI/Button',
  component: Button,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    primary: { control: 'boolean' },
    secondary: { control: 'boolean' },
    disabled: { control: 'boolean' }
  }

} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Button',
    primary: false,
    secondary: false,
    size: 'medium',
    disabled: false,
  }
}

export const Iconized: Story = {
  args: {
    label: "Button",
    primary: false,
    secondary: false,
    size: "medium",
    disabled: false,
    Icon: DocumentTextIcon
  }
};

export const Primary: Story = {
  args: {
    label: "Button",
    primary: true,
    secondary: false,
    size: "small",
    disabled: false
  }
};

export const Secondary: Story = {
  args: {
    label: "Button",
    primary: false,
    secondary: true,
    size: "small",
    disabled: false
  }
};

export const PrimaryIconized: Story = {
  args: {
    label: "Button",
    primary: true,
    secondary: false,
    size: "medium",
    disabled: false,
    Icon: DocumentTextIcon
  }
};

export const SecondaryIconized: Story = {
  args: {
    label: "Button",
    primary: false,
    secondary: true,
    size: "medium",
    disabled: false,
    Icon: DocumentTextIcon
  }
};

export const PrimaryDisabled: Story = {
  args: {
    label: "Button",
    primary: true,
    secondary: false,
    size: "small",
    disabled: true
  }
};

export const SecondaryDisabled: Story = {
  args: {
    label: "Button",
    primary: false,
    secondary: true,
    size: "small",
    disabled: true
  }
};
