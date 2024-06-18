import { LitElement, html, css } from "lit-element";

export class PriceItem extends LitElement {
  static get properties() {
    return {
      price: { type: Number },
      discount: { type: Number },
    };
  }

  constructor() {
    super();
    this.price = 0;
    this.discount = 0;
  }

  render() {
    return html`
      <div class="priceCard">
        <h3 class="discountedPrice">
          $${(this.price - (this.discount / 100) * this.price).toFixed(2)}
        </h3>
        <h3 class="discount">${this.discount}%</h3>
      </div>
      <div>
        <p>Precio normal: <s>$${this.price}</s></p>
      </div>
    `;
  }
  static get styles() {
    return css`
      .priceCard {
        display: flex;
        color: #21A179;
        flex-direction: row;
        justify-content: space-between;
      }
      :host {
        display: flex;
        flex-direction: column;
      }
      .priceCard p {
        color: #000000;
        font-size: 0.75rem;
      }
      .discount {
        padding: 0 0.5rem;
        border-radius: 5px;
        background-color: #E4A700;
        color: #000;
      }
    `;
  }
}

customElements.define("price-item", PriceItem);
