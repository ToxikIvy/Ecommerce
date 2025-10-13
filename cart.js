
document.addEventListener("DOMContentLoaded", () => {

  const addToCartButtons = document.querySelectorAll('.btn');
  const cartCount = document.getElementById('card-count');

  let cart = [];

  addToCartButtons.forEach(button => {
    button.addEventListener('click', event => {
      event.preventDefault();

      const productElement = event.target.closest('.product');

      const productName = productElement.querySelector('h3').textContent;
      const productPrice = productElement.querySelector('.price').textContent;

      cart.push({ name: productName, price: productPrice });

      cartCount.textContent = cart.length;

      console.log("🛒 Cart:", cart);

      
  });
});
