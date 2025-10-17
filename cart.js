
document.addEventListener("DOMContentLoaded", () => {

  const addToCartButtons = document.querySelectorAll('.btn.add-to-cart');
  const cartCount = document.getElementById('cart-count');
  const cartItemsContainer = document.getElementById('cart-items');
  const clearCartButton = document.getElementById('clear-cart');

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

      if (cartCount) {
        cartCount.textContent = cart.length;
        cartCount.classList.add('added');
        setTimeout(() => cartCount.classList.remove('added'), 300);
      }
        
  });
});

if (cartItemsContainer) {
  displayCartItems();
}

  console.log("Hello");

if (clearCartButton) {
  clearCartButton.addEventListener('click', () => {
    localStorage.removeItem('cart');
    cart = [];
    if (cartCount) cartCount.textContent = 0;

    if (cartItemsContainer) {
      cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
    }
  });
}

function displayCartItems() {
  cart = JSON.parse(localStorage.getItem('cart')) || [];

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
    return;
  }

  cartItemsContainer.innerHTML = cart.map((item, index) => `
      <div class="cart-item">
        <h3>${item.name}</h3>
        <p>${item.price}</p>
        <button class="remove-item" data-index="${index}">Remove</button>
      </div>
    `).join('');

    document.querySelectorAll('.remove-item').forEach(button => {
      button.addEventListener('click', (e) => {
        const index = e.target.dataset.index;
        removeFromCart(index);
      });
    });
  }

  function removeFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    if (cartCount) cartCount.textContent = cart.length;
    displayCartItems();
  }
});
