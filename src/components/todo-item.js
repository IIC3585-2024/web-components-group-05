export class TodoItem extends HTMLLIElement {
    constructor() {
      super();
    }

    connectedCallback() {
      this.render();
    }

    render() {
      this.textContent = this.getAttribute('text') || '';
      this.classList.add('todo-item');

      const button = document.createElement('button');
      button.textContent = '-';
      button.classList.add('todo-delete-button');

      button.addEventListener('click', () => this.deleteTodo());

      this.appendChild(button);
    }

    deleteTodo() {
      this.remove();
    }
}

customElements.define('todo-item', TodoItem, { extends: 'li' });

const style = document.createElement('style');
style.textContent = `
    .todo-item {
      font-size: 1.3rem;
      display: flex;
      align-items: center;
      margin: 0 0 0 2rem;
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
`;

document.head.appendChild(style);