document.addEventListener('DOMContentLoaded', () => {
    fetch('products.json')
      .then(response => response.json())
      .then(products => {
        const productList = document.querySelector('list-standard');
        productList.setAttribute('items', JSON.stringify(products));
      })
      .catch(error => console.error('Error fetching the products:', error));
  });