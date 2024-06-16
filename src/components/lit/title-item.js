import { LitElement, html, css } from 'lit-element';

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
            .titleCard {
                padding: 1rem 0.5rem;
                font-size: 1rem;
                color: #777;
                border-top: 1px solid #ccc;
                word-wrap: break-word;
                width: 100%;
            }
            :host {
                display: flex;
            }
        `;
    }
}

customElements.define('title-item', TitleItem);