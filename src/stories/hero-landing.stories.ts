import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '../components/hero-landing/hero-landing';
import '../components/animated-card/animated-card';

const meta: Meta = {
  title: 'Components/HeroLanding',
  component: 'hero-landing',
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
  },
  args: {
    title: 'Experience the Future',
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
### HeroLanding Component

A full-screen hero component featuring a WebGL-powered animated grayscale gradient background (similar to Stripe's connect gradient).

It supports:
- **GSAP Animations**: Title fades in from left; slotted cards stagger in from bottom.
- **WebGL Background**: Custom GLSL shader for high-performance, smooth gradient animation.
- **Slot Composition**: Accepts any content, designed to work perfectly with \`animated-card\`.
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: (args) => html`
    <hero-landing .title=${args.title}></hero-landing>
  `,
};

export const WithCards: Story = {
  render: (args) => html`
    <hero-landing .title=${args.title}>
      <animated-card
        title="Performance"
        subtitle="WebGL Powered"
        content="Leveraging the GPU for smooth background animations."
      ></animated-card>
      <animated-card
        title="Animation"
        subtitle="GSAP Integrated"
        content="Complex timelines managed easily with GreenSock."
      ></animated-card>
      <animated-card
        title="Simplicity"
        subtitle="Lit Element"
        content="Built with lightweight web components standard."
      ></animated-card>
    </hero-landing>
  `,
};
