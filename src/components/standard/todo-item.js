const template = document.createElement("template");
template.innerHTML = `
    <style>
      .todo-item {
        font-size: 1.3rem;
        display: flex;
        align-items: center;
        margin: 0 0 0 2rem;
        color: white;
        justify-content: space-between;
      }

      .todo-item button {
        background-color: rgba(0, 0, 0, 0);
        font-size: 1.5rem;
        border: solid 2px white;
        border-radius: 10rem;
        padding: 0.1rem 0.7rem;
        color: white;
        margin: 0.5rem 0 0.5rem 10rem;
        cursor: pointer;
      }
    </style>
    <div class="todo-item">
      <span class="todo-text"></span>
      <button class="todo-delete-button">-</button>
    </div>
`;

export class TodoItem extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    shadow.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const text = this.getAttribute('text') || '';
    this.shadowRoot.querySelector('.todo-text').textContent = text;

    const button = this.shadowRoot.querySelector('.todo-delete-button');
    button.addEventListener('click', () => this.deleteTodo());
  }

  deleteTodo() {
    this.remove();
  }
}

customElements.define('todo-item', TodoItem);
