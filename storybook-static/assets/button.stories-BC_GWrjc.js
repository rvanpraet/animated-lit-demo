import{r as f,i as g,a as v,b as t}from"./iframe-YI3ivEqr.js";import{n as m,t as y}from"./property-C4ojN_2n.js";import"./preload-helper-PPVm8Dsz.js";const x=".app-button{display:inline-flex;align-items:center;justify-content:center;padding:.75rem 1.5rem;border-radius:9999px;font-family:Inter,system-ui,sans-serif;font-weight:600;font-size:1rem;line-height:1.5;cursor:pointer;transition:all .2s cubic-bezier(.4,0,.2,1);border:1px solid transparent;outline:none;text-decoration:none;-webkit-user-select:none;user-select:none;position:relative;overflow:hidden}.app-button:disabled{opacity:.6;cursor:not-allowed;pointer-events:none}.app-button:focus-visible{box-shadow:0 0 0 3px #3b82f64d}.app-button--primary{background:linear-gradient(135deg,#3b82f6,#0b63f3);color:#fff;box-shadow:0 4px 6px -1px #3b82f633,0 2px 4px -1px #3b82f61a}.app-button--primary:hover{transform:translateY(-1px);box-shadow:0 10px 15px -3px #3b82f64d,0 4px 6px -2px #3b82f626;filter:brightness(1.1)}.app-button--primary:active{transform:translateY(0);filter:brightness(.95)}.app-button--secondary{background:#fffc;-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px);color:#111827;border-color:#0000001a;box-shadow:0 1px 2px #0000000d}.app-button--secondary:hover{background:#fffffff2;transform:translateY(-1px);box-shadow:0 4px 6px -1px #0000001a,0 2px 4px -1px #0000000f}.app-button--secondary:active{transform:translateY(0);background:#ffffffb3}.app-button--small{padding:.5rem 1rem;font-size:.875rem}.app-button--large{padding:1rem 2rem;font-size:1.125rem}";var $=Object.defineProperty,z=Object.getOwnPropertyDescriptor,l=(a,n,b,s)=>{for(var r=s>1?void 0:s?z(n,b):n,c=a.length-1,u;c>=0;c--)(u=a[c])&&(r=(s?u(n,b,r):u(r))||r);return s&&r&&$(n,b,r),r};let e=class extends v{constructor(){super(...arguments),this.variant="primary",this.size="medium",this.disabled=!1}render(){return t`
      <button 
        class="app-button app-button--${this.variant} app-button--${this.size}"
        ?disabled=${this.disabled}
        @click=${this._handleClick}
      >
        <slot></slot>
      </button>
    `}_handleClick(a){this.disabled&&(a.preventDefault(),a.stopPropagation())}};e.styles=g`${f(x)}`;l([m({type:String})],e.prototype,"variant",2);l([m({type:String})],e.prototype,"size",2);l([m({type:Boolean})],e.prototype,"disabled",2);e=l([y("app-button")],e);const _={title:"Components/Button",component:"app-button",tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["primary","secondary"]},size:{control:{type:"select"},options:["small","medium","large"]},disabled:{control:"boolean"}},args:{variant:"primary",size:"medium",disabled:!1}},o={args:{variant:"primary"},render:a=>t`
    <app-button 
      .variant=${a.variant}
      .size=${a.size}
      ?disabled=${a.disabled}
    >
      Primary Action
    </app-button>
  `},i={args:{variant:"secondary"},render:a=>t`
    <app-button 
      .variant=${a.variant}
      .size=${a.size}
      ?disabled=${a.disabled}
    >
      Secondary Action
    </app-button>
  `},p={args:{size:"small"},render:a=>t`
    <app-button 
      .variant=${a.variant}
      .size=${a.size}
      ?disabled=${a.disabled}
    >
      Small Button
    </app-button>
  `},d={args:{size:"large"},render:a=>t`
    <app-button 
      .variant=${a.variant}
      .size=${a.size}
      ?disabled=${a.disabled}
    >
      Large Button
    </app-button>
  `};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};const P=["Primary","Secondary","Small","Large"];export{d as Large,o as Primary,i as Secondary,p as Small,P as __namedExportsOrder,_ as default};
