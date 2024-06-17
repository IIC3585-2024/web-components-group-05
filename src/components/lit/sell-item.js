import { LitElement, css, html } from 'lit';
import './title-item.js';
import './price-item.js';

export class SellItem extends LitElement {
    static get properties() {
        return {
            name: { type: String },
            price: { type: Number },
            discount: { type: Number },
            imageUrl: { type: String }
        }
    }

    constructor() {
        super()
        this.name = 'Product Name'
        this.price = 1000
        this.discount = 0
        this.imageUrl = 'https://via.placeholder.com/150'
    }

    render() {
        return html`
            <div class="card">
                <img src=${this.imageUrl} alt="Product Image">
                <title-item>${this.name}</title-item>
                <price-item price=${this.price} discount=${this.discount}></price-item>
            </div>
        `
    }

    static get styles() {
        return css`
            .card {
                display: flex;
                flex-direction: column;
                height: 100%;
                width: 100%;
                background-color: #f4f4f4;
                border-radius: 10px;
                padding: 0.5rem;
                flex-grow: 1;
            }
            :host {
                display: block;
                margin: 0.5rem;
                width: 10%;
            }
            img {
                height: 50%;
                width: 100%;
            }
        `;
    }
}

customElements.define('sell-item', SellItem)