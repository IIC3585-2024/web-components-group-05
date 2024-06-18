import "./todo-item.js";

const template = document.createElement("template");
template.innerHTML = `
    <h1></h1>
    <div>
      <input type="text">
      <button>Add</button>
    </div>
    <div id="todos"></div>
`;

export class TodoListStandard extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    shadow.appendChild(template.content.cloneNode(true));
  }

  static get observedAttributes() {
    return ["items", "title", "prompt"];
  }
  
  connectedCallback() {
    this.shadowRoot.querySelector("button").addEventListener("click", () => this.addTodo());
    this.shadowRoot.querySelector("input").addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        this.addTodo();
      }
    });
  }
  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "title") {
      this.shadowRoot.querySelector("h1").textContent = newValue || "Todo List";
    }

    if (name === "prompt") {
      this.shadowRoot.querySelector("input").placeholder = newValue || "Enter a new todo";
    }

    if (name === "items") {
      this.renderTodos();
    }
  }

  addTodo() {
    const todoInput = this.shadowRoot.querySelector("input");
    const todoText = todoInput.value;
    todoInput.value = "";

    const todos = JSON.parse(this.getAttribute("items")) || [];
    const newTodo = { id: Date.now().toString(), text: todoText };
    todos.push(newTodo);
    this.setAttribute("items", JSON.stringify(todos));
    this.renderTodos();
  }

  deleteTodo(id) {
    const todos = JSON.parse(this.getAttribute("items")) || [];
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    this.setAttribute("items", JSON.stringify(filteredTodos));
    this.renderTodos();
  }


  renderTodos() {
    const todos = JSON.parse(this.getAttribute("items")) || [];
    const todoContainer = this.shadowRoot.querySelector("#todos");
    todoContainer.innerHTML = "";

    todos.forEach((todo) => {
      const todoItem = document.createElement("todo-item-standard");
      todoItem.setAttribute("id", todo.id);
      todoItem.setAttribute("text", todo.text);
      todoItem.addEventListener("delete-todo", () => this.deleteTodo(todo.id));
      todoContainer.appendChild(todoItem);
    });
  }
}

customElements.define("todo-list-standard", TodoListStandard);
