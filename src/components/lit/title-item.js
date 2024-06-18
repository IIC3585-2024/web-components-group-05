import { LitElement, html, css } from "lit-element";

export class TitleItem extends LitElement {
  constructor() {
    super();
  }

  render() {
    return html`
      <div class="titleCard">
        <slot></slot>
      </div>
    `;
  }

  static get styles() {
    return css`
      div {
        margin-top: 0.5rem;
        font-size: 1rem;
        color: "red";
        word-wrap: break-word;
        width: 100%;
      }
    `;
  }
}

customElements.define("title-item", TitleItem);
