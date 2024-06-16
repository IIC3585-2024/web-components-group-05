import "./title-item.js";
import "./price-item.js";

const template = document.createElement("template");
template.innerHTML = `
    <style>
        .card {
            display: flex;
            flex-direction: column;
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
    </style>
    <div class="card">
        <img alt="Product Image">
        <title-item-standard></title-item-standard>
        <price-item-standard></price-item-standard>
    </div>
`;

export class SellItemStandard extends HTMLElement {
  static get observedAttributes() {
    return ["name", "price", "discount", "image-url"];
  }

  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    shadow.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    this.shadowRoot.querySelector("title-item-standard").textContent =
      this.getAttribute("name");
    this.shadowRoot
      .querySelector("price-item-standard")
      .setAttribute("price", this.getAttribute("price"));
    this.shadowRoot
      .querySelector("price-item-standard")
      .setAttribute("discount", this.getAttribute("discount"));
    this.shadowRoot
      .querySelector("img")
      .setAttribute("src", this.getAttribute("image-url"));
  }
}

customElements.define("sell-item-standard", SellItemStandard);
