document.addEventListener('DOMContentLoaded', () => {
    fetch('todo.json')
      .then(response => response.json())
      .then(items => {
        const itemList = document.querySelector('todo-list-standard');
        const litItemList = document.querySelector('todo-list-lit');
        itemList.setAttribute('items', JSON.stringify(items));
        litItemList.items = items;
      })
      .catch(error => console.error('Error fetching the items:', error));
  });