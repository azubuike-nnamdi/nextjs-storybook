import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';
import { action } from '@storybook/addon-actions';

const meta: Meta<typeof Button> = {
  title: 'Components/ui/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Button component description',
      },
    },
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: 'select',
      description: 'Button variants',
      options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'],
    },
    size: {
      control: 'select',
      description: 'Sizes',
      options: ['default', 'sm', 'lg', 'icon'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'default',
    size: 'sm',
    disabled: false,
    onClick: action('default clicked'),
    children: 'Default button',
    className: 'shadow-lg',
  },
};

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    size: 'sm',
    disabled: false,
    onClick: action('destructive clicked'),
    children: 'Destructive button',
    className: 'shadow-lg',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    size: 'sm',
    disabled: false,
    onClick: action('outline clicked'),
    children: 'Outline button',
    className: 'shadow-lg',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    size: 'sm',
    disabled: false,
    onClick: action('secondary clicked'),
    children: 'Secondary button',
    className: 'shadow-lg',
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    size: 'sm',
    disabled: false,
    onClick: action('ghost clicked'),
    children: 'Ghost button',
    className: 'shadow-lg',
  },
};

export const Link: Story = {
  args: {
    variant: 'link',
    size: 'sm',
    disabled: false,
    onClick: action('link clicked'),
    children: 'Link button',
    className: 'shadow-lg',
  },
};
