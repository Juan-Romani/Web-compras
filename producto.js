function handleProductClick() {
  var productNumber = this.querySelector('h2').textContent.match(/\d+/)[0];
  var redirectURL = 'producto.html?product=' + productNumber;
  window.location.href = redirectURL;
}

function showSelectedProduct() {
  var urlParams = new URLSearchParams(window.location.search);
  var productNumber = urlParams.get('product');

  if (productNumber) {
    var selectedProduct = document.getElementById('producto' + productNumber);
    var allProducts = document.querySelectorAll('.product');

    allProducts.forEach(function (product) {
      product.style.display = 'none';
    });

    if (selectedProduct) {
      selectedProduct.style.display = 'block';
    }
  }
}

document.addEventListener("DOMContentLoaded", function () {
  var products = document.querySelectorAll('.product');

  products.forEach(function (product) {
    product.addEventListener('click', handleProductClick);
  });

  showSelectedProduct();
});
