import { LitElement, html, css } from 'lit-element';

export class PriceItem extends LitElement {
    static get properties() {
        return {
            price: { type: Number },
            discount: { type: Number },
        }
    }

    constructor() {
        super()
        this.price = 0
        this.discount = 0
    }

    render() {
        console.log(this.price)
        return html`
            <div class="priceCard">
                <h3>$${(this.price - this.discount/100 * this.price).toFixed(2)}</h3>
                <h3 class="discount">${this.discount}%</h3>
            </div>
            <div class="priceCard">
                <p>Normal: $${this.price}</p>
            </div>
        `
    }
    static get styles() {
        return css`
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
            .priceCard h3 {
                margin: 0.5rem;
            }
            .priceCard p {
                margin: 0 0.5rem;
                color: #000000;
                font-size: 0.75rem
            }
            .discount {
                padding: 0 0.5rem;
                border-radius: 5px;
                background-color: #ff1d5e;
                color: #ffffff;
            }
        `;
    }
}

customElements.define('price-item', PriceItem);