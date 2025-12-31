import { LitElement, html, css, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import styles from './animated-card.scss?inline';

/**
 * AnimatedCard Component
 *
 * A reusable card component that displays a title, subtitle, and content.
 * It features hover effects defined in the associated SCSS.
 *
 * @element animated-card
 *
 * @slot - Optional slot for additional content (e.g., buttons, extra text) at the bottom of the card body.
 */
@customElement('animated-card')
export class AnimatedCard extends LitElement {
  static styles = css`${unsafeCSS(styles)}`;

  /**
   * The primary heading of the card.
   */
  @property({ type: String }) title = '';

  /**
   * A secondary heading or category label.
   */
  @property({ type: String }) subtitle = '';

  /**
   * The main text content of the card.
   */
  @property({ type: String }) content = '';

  /**
   * Renders the card structure.
   */
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
