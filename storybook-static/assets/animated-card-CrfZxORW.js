import{r as l,i as m,e as x,b as c}from"./iframe-DiUZRr3J.js";import{n as d,t as h}from"./property-C7ReiNJ2.js";const _=".animated-card{display:flex;flex-direction:column;padding:24px;border-radius:16px;background-color:#fff;box-shadow:0 4px 6px -1px #0000001a,0 2px 4px -1px #0000000f;transition:all .3s cubic-bezier(.4,0,.2,1);cursor:pointer;border:1px solid rgba(0,0,0,.05);font-family:Inter,system-ui,sans-serif;max-width:400px}.animated-card:hover{transform:translateY(-8px);box-shadow:0 20px 25px -5px #0000001a,0 10px 10px -5px #0000000a}.animated-card__header{margin-bottom:12px}.animated-card__title{font-size:1.5rem;font-weight:700;color:#1a1a1a;margin:0 0 4px;line-height:1.2}.animated-card__subtitle{font-size:.875rem;font-weight:500;color:#6b7280;margin:0;text-transform:uppercase;letter-spacing:.05em}.animated-card__content{font-size:1rem;color:#4b5563;line-height:1.6;margin:0}";var f=Object.defineProperty,b=Object.getOwnPropertyDescriptor,i=(p,a,s,r)=>{for(var t=r>1?void 0:r?b(a,s):a,n=p.length-1,o;n>=0;n--)(o=p[n])&&(t=(r?o(a,s,t):o(t))||t);return r&&t&&f(a,s,t),t};let e=class extends x{constructor(){super(...arguments),this.title="",this.subtitle="",this.content=""}render(){return c`
      <div class="animated-card">
        <div class="animated-card__header">
          <h2 class="animated-card__title">${this.title}</h2>
          ${this.subtitle?c`<h3 class="animated-card__subtitle">${this.subtitle}</h3>`:""}
        </div>
        <div class="animated-card__body">
          <p class="animated-card__content">${this.content}</p>
          <slot></slot>
        </div>
      </div>
    `}};e.styles=m`${l(_)}`;i([d({type:String})],e.prototype,"title",2);i([d({type:String})],e.prototype,"subtitle",2);i([d({type:String})],e.prototype,"content",2);e=i([h("animated-card")],e);
