import{f as g,u as h,r as f,i as x,e as v,d as p}from"./iframe-Coz2Aa8T.js";import"./preload-helper-PPVm8Dsz.js";const y=t=>(n,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(t,n)}):customElements.define(t,n)};const _={attribute:!0,type:String,converter:h,reflect:!1,hasChanged:g},$=(t=_,n,e)=>{const{kind:a,metadata:r}=e;let i=globalThis.litPropertyMetadata.get(r);if(i===void 0&&globalThis.litPropertyMetadata.set(r,i=new Map),a==="setter"&&((t=Object.create(t)).wrapped=!0),i.set(e.name,t),a==="accessor"){const{name:o}=e;return{set(s){const u=n.get.call(this);n.set.call(this,s),this.requestUpdate(o,u,t,!0,s)},init(s){return s!==void 0&&this.C(o,void 0,t,s),s}}}if(a==="setter"){const{name:o}=e;return function(s){const u=this[o];n.call(this,s),this.requestUpdate(o,u,t,!0,s)}}throw Error("Unsupported decorator location: "+a)};function b(t){return(n,e)=>typeof e=="object"?$(t,n,e):((a,r,i)=>{const o=r.hasOwnProperty(i);return r.constructor.createProperty(i,a),o?Object.getOwnPropertyDescriptor(r,i):void 0})(t,n,e)}const w=".animated-card{display:flex;flex-direction:column;padding:24px;border-radius:16px;background-color:#fff;box-shadow:0 4px 6px -1px #0000001a,0 2px 4px -1px #0000000f;transition:all .3s cubic-bezier(.4,0,.2,1);cursor:pointer;border:1px solid rgba(0,0,0,.05);font-family:Inter,system-ui,sans-serif;max-width:400px}.animated-card:hover{transform:translateY(-8px);box-shadow:0 20px 25px -5px #0000001a,0 10px 10px -5px #0000000a}.animated-card__header{margin-bottom:12px}.animated-card__title{font-size:1.5rem;font-weight:700;color:#1a1a1a;margin:0 0 4px;line-height:1.2}.animated-card__subtitle{font-size:.875rem;font-weight:500;color:#6b7280;margin:0;text-transform:uppercase;letter-spacing:.05em}.animated-card__content{font-size:1rem;color:#4b5563;line-height:1.6;margin:0}";var C=Object.defineProperty,S=Object.getOwnPropertyDescriptor,m=(t,n,e,a)=>{for(var r=a>1?void 0:a?S(n,e):n,i=t.length-1,o;i>=0;i--)(o=t[i])&&(r=(a?o(n,e,r):o(r))||r);return a&&r&&C(n,e,r),r};let d=class extends v{constructor(){super(...arguments),this.title="",this.subtitle="",this.content=""}render(){return p`
      <div class="animated-card">
        <div class="animated-card__header">
          <h2 class="animated-card__title">${this.title}</h2>
          ${this.subtitle?p`<h3 class="animated-card__subtitle">${this.subtitle}</h3>`:""}
        </div>
        <div class="animated-card__body">
          <p class="animated-card__content">${this.content}</p>
          <slot></slot>
        </div>
      </div>
    `}};d.styles=x`${f(w)}`;m([b({type:String})],d.prototype,"title",2);m([b({type:String})],d.prototype,"subtitle",2);m([b({type:String})],d.prototype,"content",2);d=m([y("animated-card")],d);const T={title:"Components/AnimatedCard",component:"animated-card",tags:["autodocs"],argTypes:{title:{control:"text"},subtitle:{control:"text"},content:{control:"text"}},args:{title:"Hello World",subtitle:"A simple subtitle",content:"This is the default content for the animated card."}},c={render:t=>p`
    <animated-card
      .title=${t.title}
      .subtitle=${t.subtitle}
      .content=${t.content}
    >
    </animated-card>
  `},l={render:t=>p`
    <animated-card
      .title=${t.title}
      .subtitle=${t.subtitle}
      .content=${t.content}
    >
      <div style="margin-top: 1rem; padding: 0.5rem; background: #f3f4f6; border-radius: 4px;">
        <strong>Extra Content via Slot:</strong>
        <p>This content is injected via the default slot.</p>
        <button style="margin-top: 8px; padding: 4px 8px; cursor: pointer;">Action</button>
      </div>
    </animated-card>
  `,args:{title:"Slotted Content",subtitle:"Demonstrating slots",content:"The main content is property-based."}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => html\`
    <animated-card
      .title=\${args.title}
      .subtitle=\${args.subtitle}
      .content=\${args.content}
    >
    </animated-card>
  \`
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => html\`
    <animated-card
      .title=\${args.title}
      .subtitle=\${args.subtitle}
      .content=\${args.content}
    >
      <div style="margin-top: 1rem; padding: 0.5rem; background: #f3f4f6; border-radius: 4px;">
        <strong>Extra Content via Slot:</strong>
        <p>This content is injected via the default slot.</p>
        <button style="margin-top: 8px; padding: 4px 8px; cursor: pointer;">Action</button>
      </div>
    </animated-card>
  \`,
  args: {
    title: 'Slotted Content',
    subtitle: 'Demonstrating slots',
    content: 'The main content is property-based.'
  }
}`,...l.parameters?.docs?.source}}};const j=["Default","WithSlotContent"];export{c as Default,l as WithSlotContent,j as __namedExportsOrder,T as default};
