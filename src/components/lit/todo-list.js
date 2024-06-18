import { LitElement, html } from "lit-element";
import "./todo-item.js";


export class TodoItemListLit extends LitElement {
  static get properties() {
    return {
      items: { type: Array },
      title: { type: String },
      prompt: { type: String },
    };
  }

  constructor() {
    super();
    this.items = [];
    this.title = "Todo List";
    this.prompt = "Enter a new todo";
  }

  render() {
    return html`
      <h1>${this.title}</h1>
      <div>
        <input
          type="text"
          placeholder="${this.prompt}"
          @keydown="${this.handleKeyDown}"
        />
        <button @click="${this.addTodo}">Add</button>
      </div>
      <div id="todos">
        ${this.items.map(
          (todo) => html`
            <todo-item-lit
              .id="${todo.id}"
              .text="${todo.text}"
            ></todo-item-lit>
          `
        )}
      </div>
    `;
  }

  handleKeyDown(e) {
    if (e.key === "Enter") {
      this.addTodo();
    }
  }

  addTodo() {
    const todoInput = this.shadowRoot.querySelector("input");
    const todoText = todoInput.value;
    todoInput.value = "";

    const newTodo = { id: Date.now().toString(), text: todoText };
    this.items = [...this.items, newTodo];
  }
}

customElements.define("todo-list-lit", TodoItemListLit);
