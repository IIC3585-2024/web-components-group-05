import "./sell-item.js";

const template = document.createElement("template");
template.innerHTML = `
    <style>
        :host {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
            padding: 2rem;
            grid-gap: 2rem;
        }
    </style>
`;

export class ListStandard extends HTMLElement {
  static get observedAttributes() {
    return ["items"];
  }

  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    shadow.appendChild(template.content.cloneNode(true));
  }

  attributeChangedCallback() {
    const items = JSON.parse(this.getAttribute("items")) || [];

    items.forEach((item) => {
      const listItem = document.createElement("sell-item-standard");
      listItem.setAttribute("name", item.name);
      listItem.setAttribute("price", item.price);
      listItem.setAttribute("discount", item.discount);
      listItem.setAttribute("image-url", item.imageUrl);
      listItem.setAttribute("rating", item.rating);
      this.shadowRoot.appendChild(listItem);
    });
  }
}

customElements.define("list-standard", ListStandard);
