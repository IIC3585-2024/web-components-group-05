const template = document.createElement('template');
template.innerHTML = `
    <style>
        div {
            margin-top: 0.5rem;
            font-size: 1rem;
            color: 'red';
            word-wrap: break-word;
            width: 100%;
        }
    </style>
    <div>
        <slot></slot>
    </div>
`;

class TitleItemStandard extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        shadow.appendChild(template.content.cloneNode(true));
    }
}

customElements.define('title-item-standard', TitleItemStandard);