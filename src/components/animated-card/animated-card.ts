import { LitElement, html, css, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import styles from './animated-card.scss?inline';

@customElement('animated-card')
export class AnimatedCard extends LitElement {
  static styles = css`${unsafeCSS(styles)}`;

  @property({ type: String }) title = '';
  @property({ type: String }) subtitle = '';
  @property({ type: String }) content = '';

  render() {
    return html`
      <div class="animated-card">
        <div class="animated-card__header">
          <h2 class="animated-card__title">${this.title}</h2>
          ${this.subtitle ? html`<h3 class="animated-card__subtitle">${this.subtitle}</h3>` : ''}
        </div>
        <div class="animated-card__body">
          <p class="animated-card__content">${this.content}</p>
          <slot></slot>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'animated-card': AnimatedCard;
  }
}
