document.addEventListener('DOMContentLoaded', () => {
    fetch('todo.json')
      .then(response => response.json())
      .then(items => {
        const itemList = document.querySelector('todo-list-standard');
        itemList.setAttribute('items', JSON.stringify(items));
      })
      .catch(error => console.error('Error fetching the items:', error));
  });