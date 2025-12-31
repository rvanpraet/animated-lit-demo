import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '../components/animated-card/animated-card';
import '../components/button/button';

const meta: Meta = {
  title: 'Components/Composite/AnimatedCard',
  component: 'animated-card',
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    subtitle: { control: 'text' },
    content: { control: 'text' },
  },
  args: {
    title: 'Hello World',
    subtitle: 'A simple subtitle',
    content: 'This is the default content for the animated card.',
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: (args) => html`
    <animated-card
      .title=${args.title}
      .subtitle=${args.subtitle}
      .content=${args.content}
    >
    </animated-card>
  `,
};

export const WithSlotContent: Story = {
  render: (args) => html`
    <animated-card
      .title=${args.title}
      .subtitle=${args.subtitle}
      .content=${args.content}
    >
      <div style="margin-top: 1rem; padding: 0.5rem; background: #f3f4f6; border-radius: 4px;">
        <strong>Extra Content via Slot:</strong>
        <p>This content is injected via the default slot.</p>
        <p>The button is slotted content and a custom component from this library.</p>
        <app-button
          variant="primary"
          size="small"
        >Action</app-button>
      </div>
    </animated-card>
  `,
  args: {
    title: 'Slotted Content',
    subtitle: 'Demonstrating slots',
    content: 'The main content is property-based.',
  },
};
