
document.addEventListener("DOMContentLoaded", () => {

  const addToCartButtons = document.querySelectorAll('.btn.add-to-cart');
  const cartCount = document.getElementById('cart-count');

  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  if (cartCount) cartCount.textContent = cart.length;

  addToCartButtons.forEach(button => {
    button.addEventListener('click', event => {
      event.preventDefault();

      const productCard = event.target.closest('.product');
      if (!productCard) return;

      const productName = productCard.querySelector('h3').textContent;
      const productPrice = productCard.querySelector('.price').textContent;

      cart.push({ name: productName, price: productPrice });

      localStorage.setItem('cart', JSON.stringify(cart));

      if (cartCount) cartCount.textContent = cart.length;

      cartCount.classList.add('added');
      setTimeout(() => cartCount.classList.remove('added'), 300);
    });   
  });
});
