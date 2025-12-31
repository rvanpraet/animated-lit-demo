import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '../components/button/button';

const meta: Meta = {
  title: 'Components/UI Blocks/Button',
  component: 'app-button',
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary'],
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    disabled: { control: 'boolean' },
  },
  args: {
    variant: 'primary',
    size: 'medium',
    disabled: false,
  },
};

export default meta;
type Story = StoryObj;

export const Primary: Story = {
  args: {
    variant: 'primary',
  },
  render: (args) => html`
    <app-button 
      .variant=${args.variant}
      .size=${args.size}
      ?disabled=${args.disabled}
    >
      Primary Action
    </app-button>
  `,
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
  },
  render: (args) => html`
    <app-button 
      .variant=${args.variant}
      .size=${args.size}
      ?disabled=${args.disabled}
    >
      Secondary Action
    </app-button>
  `,
};

export const Small: Story = {
  args: {
    size: 'small',
  },
  render: (args) => html`
    <app-button 
      .variant=${args.variant}
      .size=${args.size}
      ?disabled=${args.disabled}
    >
      Small Button
    </app-button>
  `,
};

export const Large: Story = {
  args: {
    size: 'large',
  },
  render: (args) => html`
    <app-button 
      .variant=${args.variant}
      .size=${args.size}
      ?disabled=${args.disabled}
    >
      Large Button
    </app-button>
  `,
};
