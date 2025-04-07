// Example of adding an event listener for a button in shop page
document.addEventListener('DOMContentLoaded', function() {
  const addToCartButtons = document.querySelectorAll('.product-card button');

  addToCartButtons.forEach(button => {
    button.addEventListener('click', function() {
      alert("Product added to cart!");
    });
  });
});
