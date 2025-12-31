import{b as o}from"./iframe-DiUZRr3J.js";import"./animated-card-CrfZxORW.js";import"./button-Cv_F6DFV.js";import"./preload-helper-PPVm8Dsz.js";import"./property-C7ReiNJ2.js";const l={title:"Components/Composite/AnimatedCard",component:"animated-card",tags:["autodocs"],argTypes:{title:{control:"text"},subtitle:{control:"text"},content:{control:"text"}},args:{title:"Hello World",subtitle:"A simple subtitle",content:"This is the default content for the animated card."}},e={render:t=>o`
    <animated-card
      .title=${t.title}
      .subtitle=${t.subtitle}
      .content=${t.content}
    >
    </animated-card>
  `},n={render:t=>o`
    <animated-card
      .title=${t.title}
      .subtitle=${t.subtitle}
      .content=${t.content}
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
  `,args:{title:"Slotted Content",subtitle:"Demonstrating slots",content:"The main content is property-based."}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: args => html\`
    <animated-card
      .title=\${args.title}
      .subtitle=\${args.subtitle}
      .content=\${args.content}
    >
    </animated-card>
  \`
}`,...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => html\`
    <animated-card
      .title=\${args.title}
      .subtitle=\${args.subtitle}
      .content=\${args.content}
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
  \`,
  args: {
    title: 'Slotted Content',
    subtitle: 'Demonstrating slots',
    content: 'The main content is property-based.'
  }
}`,...n.parameters?.docs?.source}}};const c=["Default","WithSlotContent"];export{e as Default,n as WithSlotContent,c as __namedExportsOrder,l as default};
