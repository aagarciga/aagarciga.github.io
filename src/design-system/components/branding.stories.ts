
import type { Meta, StoryObj } from '@storybook/react'
import Branding from './branding';
import { Monogram } from '@/design-system/svg';

const meta = {
  title: 'Design System/UI/Branding',
  component: Branding,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    brandname: { control: 'text' },
    tagline: { control: 'text' },
    className: { control: 'text' },
    brandnameClassName: { control: 'text' },
    taglineClassName: { control: 'text' },

    size: {
      control: 'select',
      options: ['xsmall', 'small', 'medium', 'large', 'xlarge']
    },
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical']
    },
    children: { control: 'object' }
  }
} satisfies Meta<typeof Branding>

export default meta;

type Story = StoryObj<typeof Branding>;

const monogramSize: Record<string, number> = {
  xsmall: 24,
  small: 32,
  medium: 42,
  large: 58,
  xlarge: 64
};

const fillColor: Record<string, string> = {
  auto: "hsla(var(--color-foreground-hsl), 1)",
  light: "hsla(var(--color-gunmetal-hsl), 1)",
  dark: "hsla(var(--color-white-smoke-hsl), 1)"
};


export const Default: Story = {
  args: {

    size: 'medium',
    orientation: 'horizontal',
    brandname: "Alex Alvarez Garciga",
    tagline: "Software Engineer",
    children: Monogram({
      width: monogramSize['medium'],
      height: monogramSize['medium'],
      fill: fillColor['auto']
    }),
    className: '',
    brandnameClassName: '',
    taglineClassName: '',
  },

};

export const Large: Story = {
  args: {

    size: 'large',
    orientation: 'horizontal',
    brandname: "Alex Alvarez Garciga",
    tagline: "Software Engineer",
    children: Monogram({
      width: monogramSize['large'],
      height: monogramSize['large'],
      fill: fillColor['auto']
    }),
    className: '',
    brandnameClassName: '',
    taglineClassName: '',
  },

};

export const Vertical: Story = {
  args: {
    size: "medium",
    orientation: "vertical",
    brandname: "Alex Alvarez Garciga",
    tagline: "Software Engineer",

    children: Monogram({
      width: monogramSize['large'],
      height: monogramSize['large'],
      fill: fillColor['auto']
    }),

    className: "",
    brandnameClassName: "",
    taglineClassName: ""
  }
};
