// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here
    const price = product.querySelector('.price span').innertext;
    const quantity = product.querySelector('.quantity input').value;
    const subtotalPrice = price * quantity;
  //console.log(subtotalPrice);
    const subtotal = product.querySelector(".subtotal span");
    subtotal.innerHTML = subtotalPrice;
  }
function calculateAll() {
  const allProducts = document.querySelectorAll(".product");
  for (let i = 0; i < allProducts.length; i++) {
    updateSubtotal(allProducts[i]);
  }
}

  // ITERATION 2
function

  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
