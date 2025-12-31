import { LitElement, html, css, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import styles from './button.scss?inline';

/**
 * AppButton Component
 * 
 * A modern, interactive button component with primary and secondary variants.
 * 
 * @element app-button
 * 
 * @slot - The button content (label).
 */
@customElement('app-button')
export class AppButton extends LitElement {
  static styles = css`${unsafeCSS(styles)}`;

  /**
   * The visual variant of the button.
   */
  @property({ type: String }) variant: 'primary' | 'secondary' = 'primary';

  /**
   * The size of the button.
   */
  @property({ type: String }) size: 'small' | 'medium' | 'large' = 'medium';

  /**
   * Whether the button is disabled.
   */
  @property({ type: Boolean }) disabled = false;

  render() {
    return html`
      <button 
        class="app-button app-button--${this.variant} app-button--${this.size}"
        ?disabled=${this.disabled}
        @click=${this._handleClick}
      >
        <slot></slot>
      </button>
    `;
  }

  private _handleClick(e: Event) {
    if (this.disabled) {
      e.preventDefault();
      e.stopPropagation();
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'app-button': AppButton;
  }
}
