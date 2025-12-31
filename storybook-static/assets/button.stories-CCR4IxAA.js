import{b as s}from"./iframe-DiUZRr3J.js";import"./button-Cv_F6DFV.js";import"./preload-helper-PPVm8Dsz.js";import"./property-C7ReiNJ2.js";const l={title:"Components/UI Blocks/Button",component:"app-button",tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["primary","secondary"]},size:{control:{type:"select"},options:["small","medium","large"]},disabled:{control:"boolean"}},args:{variant:"primary",size:"medium",disabled:!1}},r={args:{variant:"primary"},render:a=>s`
    <app-button 
      .variant=${a.variant}
      .size=${a.size}
      ?disabled=${a.disabled}
    >
      Primary Action
    </app-button>
  `},n={args:{variant:"secondary"},render:a=>s`
    <app-button 
      .variant=${a.variant}
      .size=${a.size}
      ?disabled=${a.disabled}
    >
      Secondary Action
    </app-button>
  `},e={args:{size:"small"},render:a=>s`
    <app-button 
      .variant=${a.variant}
      .size=${a.size}
      ?disabled=${a.disabled}
    >
      Small Button
    </app-button>
  `},t={args:{size:"large"},render:a=>s`
    <app-button 
      .variant=${a.variant}
      .size=${a.size}
      ?disabled=${a.disabled}
    >
      Large Button
    </app-button>
  `};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary'
  },
  render: args => html\`
    <app-button 
      .variant=\${args.variant}
      .size=\${args.size}
      ?disabled=\${args.disabled}
    >
      Primary Action
    </app-button>
  \`
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'secondary'
  },
  render: args => html\`
    <app-button 
      .variant=\${args.variant}
      .size=\${args.size}
      ?disabled=\${args.disabled}
    >
      Secondary Action
    </app-button>
  \`
}`,...n.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'small'
  },
  render: args => html\`
    <app-button 
      .variant=\${args.variant}
      .size=\${args.size}
      ?disabled=\${args.disabled}
    >
      Small Button
    </app-button>
  \`
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'large'
  },
  render: args => html\`
    <app-button 
      .variant=\${args.variant}
      .size=\${args.size}
      ?disabled=\${args.disabled}
    >
      Large Button
    </app-button>
  \`
}`,...t.parameters?.docs?.source}}};const c=["Primary","Secondary","Small","Large"];export{t as Large,r as Primary,n as Secondary,e as Small,c as __namedExportsOrder,l as default};
