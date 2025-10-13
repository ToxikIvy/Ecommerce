const cart = [];
const buttons = document.querySelectorAll('.add-to-cart');
const cartCount = document.getElementbyId('card-count');

buttons.forEach(button => {
  button.addEventListener('click', event => {
    event.preventDefault();

    const product = event.target.closest('.product');
    const productName = product.querySelector('h3').textContent;

    cart.push(productName);

    cartCount.textContent = cart.length;

    console.log('Cart:', cart);

  });
});
