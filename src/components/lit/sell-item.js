import { LitElement, css, html } from "lit";
import "./title-item.js";
import "./price-item.js";

export class SellItem extends LitElement {
  static get properties() {
    return {
      name: { type: String },
      price: { type: Number },
      discount: { type: Number },
      imageUrl: { type: String },
      rating: { type: Number },
    };
  }

  constructor() {
    super();
    this.name = "Product Name";
    this.price = 1000;
    this.discount = 0;
    this.imageUrl = "https://via.placeholder.com/150";
    this.rating = 0;
  }

  render() {
    return html`
      <div class="card">
        <img src=${this.imageUrl} alt="Product Image" />
        <title-item>${this.name}</title-item>
        <price-item price=${this.price} discount=${this.discount}></price-item>
        <span>⭐️ ${this.rating}</span>
      </div>
    `;
  }

  static get styles() {
    return css`
      .card {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
        background-color: #f4f4f4;
        border-radius: 10px;
        padding: 0.5rem;
      }
      :host {
        height: 100%;
      }
      img {
        height: 50%;
      }
    `;
  }
}

customElements.define("sell-item", SellItem);
