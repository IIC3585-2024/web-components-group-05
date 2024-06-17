import { LitElement, html, css } from 'lit-element';
import './sell-item.js'

export class LitList extends LitElement {
    static get properties() {
        return {
            items: { type: Array },
        }
    }

    constructor() {
        super()
        this.price = 0
        this.discount = 0
        this.items = [];
    }

    render() {
        return html`
            ${this.items.map(item => html`
                <sell-item name="${item.name}" price="${item.price}" discount="${item.discount}" imageUrl="${item.imageUrl}"></sell-item>
            `)}
        `
    }
    static get styles() {
        return css`
            :host {
                display: flex;
                width: 100%;
                flex-direction: row;
                flex-wrap: wrap;
                padding: 2rem;
                grid-gap: 2rem;
            }
        `;
    }
}

customElements.define('list-lit', LitList);