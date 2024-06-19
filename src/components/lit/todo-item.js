import { LitElement, html, css } from "lit-element";

export class TodoItemLit extends LitElement {
  static get properties() {
    return {
      text: { type: String },
      id: { type: String },
    };
  }

  constructor() {
    super();
    this.text = "";
    this.id = "";
  }

  render() {
    return html`
      <div class="todo-item-lit">
        <span>${this.text}</span>
        <button class="todo-lit-delete-button" @click=${this.deleteTodo}>
          -
        </button>
      </div>
    `;
  }

  deleteTodo() {
    this.remove();
  }

  static get styles() {
    return css`
      .todo-item-lit {
        font-size: 1.3rem;
        display: flex;
        align-items: center;
        margin: 0 0 0 2rem;
        color: white;
        justify-content: space-between;
      }

      .todo-lit-delete-button {
        background-color: rgba(0, 0, 0, 0);
        font-size: 1.5rem;
        border: solid 2px white;
        border-radius: 10rem;
        padding: 0.1rem 0.7rem;
        color: white;
        margin: 0.5rem 0 0.5rem 10rem;
        cursor: pointer;
      }
    `;
  }
}

customElements.define("todo-item-lit", TodoItemLit);
