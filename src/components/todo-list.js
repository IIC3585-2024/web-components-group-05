import './todo-item.js';

export class TodoList extends HTMLUListElement {
    constructor() {
        super();
        this.todos = [];
        this.title = 'Todo List';
        this.prompt = 'Add a new todo';
    }

    static get observedAttributes() {
        return ['item1', 'item2', 'item3', 'title', 'prompt'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (["item1", "item2", "item3"].includes(name) && newValue) {
            this.todos.push({ text: newValue });
        }
        if (name === 'title' && newValue) {
            this.title = newValue;
        }
        if (name === 'prompt' && newValue) {
            this.prompt = newValue;
        }
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = '';
        const title = document.createElement('h1');
        title.textContent = this.title;
        this.appendChild(title);
        this.renderTodo();
        this.renderInput();
    }

    renderTodo() {
        this.todos.forEach((todo) => {
            const li = document.createElement('li', { is: 'todo-item' });
            li.setAttribute('text', todo.text);
            this.appendChild(li);
        });
    }

    renderInput() {
        const input = document.createElement('input');
        input.style.marginTop = '1.5rem';
        input.setAttribute('placeholder', this.prompt);
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.todos.push({ text: e.target.value });
                this.render();
            }
        });
        this.appendChild(input);
    }
}

customElements.define('todo-list', TodoList, { extends: 'ul' });
