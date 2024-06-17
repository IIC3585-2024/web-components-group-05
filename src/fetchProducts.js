document.addEventListener('DOMContentLoaded', () => {
    fetch('products.json')
      .then(response => response.json())
      .then(products => {
        const productList = document.querySelector('list-standard');
        const litList = document.querySelector('list-lit');
        productList.setAttribute('items', JSON.stringify(products));
        litList.setAttribute('items', JSON.stringify(products));
      })
      .catch(error => console.error('Error fetching the products:', error));
  });