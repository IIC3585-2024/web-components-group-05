import { LitElement, html, css } from "lit-element";
import "./sell-item.js";

export class LitList extends LitElement {
  static get properties() {
    return {
      items: { type: Array },
    };
  }

  constructor() {
    super();
    this.price = 0;
    this.discount = 0;
    this.items = [];
  }

  render() {
    return html`
      ${this.items.map(
        (item) => html`
          <sell-item
            name="${item.name}"
            price="${item.price}"
            discount="${item.discount}"
            imageUrl="${item.imageUrl}"
            rating="${item.rating}"
          ></sell-item>
        `
      )}
    `;
  }
  static get styles() {
    return css`
      :host {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        padding: 2rem;
        grid-gap: 2rem;
      }
    `;
  }
}

customElements.define("list-lit", LitList);
