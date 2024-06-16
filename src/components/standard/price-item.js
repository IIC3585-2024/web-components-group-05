const template = document.createElement("template");
template.innerHTML = `
    <style>
        .priceCard {
            display: flex;
            color: #00C3EC;
            flex-direction: row;
            justify-content: space-between;
        }
        :host {
            display: flex;
            flex-direction: column;
        }
        .priceCard p {
            color: #000000;
            font-size: 0.75rem
        }
        .discount {
            padding: 0 0.5rem;
            border-radius: 5px;
            background-color: #ff1d5e;
            color: #ffffff;
        }
    </style>
    <div class="priceCard">
        <h3 class="discountedPrice"></h3>
        <h3 class="discount"></h3>
    </div>
    <div>
        <p class="normalPrice"></p>
    </div>
`;

export class PriceItemStandard extends HTMLElement {
  static get observedAttributes() {
    return ["price", "discount"];
  }

  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    shadow.appendChild(template.content.cloneNode(true));
  }

  attributeChangedCallback() {
    const price = parseFloat(this.getAttribute("price")) || 0;
    const discount = parseFloat(this.getAttribute("discount")) || 0;
    const discountedPrice = price - (price * discount) / 100;

    this.shadowRoot.querySelector(".discount").textContent = `${discount}%`;
    console.log(price.toFixed(2), price);
    this.shadowRoot.querySelector(
        ".normalPrice"
      ).innerHTML = `Precio normal: <s>$${price.toFixed(2)}</s>`;
    this.shadowRoot.querySelector(
      ".discountedPrice"
    ).textContent = `$${discountedPrice.toFixed(2)}`;
  }
}

customElements.define("price-item-standard", PriceItemStandard);
