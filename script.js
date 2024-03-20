function hideAllContent() {
  var contentElements = document.querySelectorAll('.content');
  contentElements.forEach(function (element) {
    element.style.display = 'none';
  });
}

function showContent(contentId) {
  hideAllContent();
  var selectedContent = document.getElementById(contentId);
  if (selectedContent) {
    selectedContent.style.display = 'block';

    if (contentId === 'productos') {
      paginaActual = 1;
      mostrarProductos();
    }
  }
}

window.onload = function () {
  hideAllContent();
  showContent('inicio');
};

var productosPorPagina = 10;
var paginaActual = 1;

function mostrarProductos() {
  var inicio = (paginaActual - 1) * productosPorPagina;
  var fin = inicio + productosPorPagina;

  var productos = Array.from(document.querySelectorAll('.product'));

  productos.forEach(function (producto) {
    producto.style.display = 'none';
  });

  var productosAMostrar = productos.slice(inicio, fin);
  productosAMostrar.forEach(function (producto) {
    producto.style.display = 'block';
  });
}

function mostrarPaginaAnterior() {
  if (paginaActual > 1) {
    paginaActual--;
    mostrarProductos();
  }
}

function mostrarPaginaSiguiente() {
  var cantidadTotalPaginas = Math.ceil(document.querySelectorAll('.product').length / productosPorPagina);
  if (paginaActual < cantidadTotalPaginas) {
    paginaActual++;
    mostrarProductos();
  }
}

var btnAnterior = document.querySelector('.navigation-buttons button:first-child');
var btnSiguiente = document.querySelector('.navigation-buttons button:last-child');

btnAnterior.addEventListener('click', mostrarPaginaAnterior);
btnSiguiente.addEventListener('click', mostrarPaginaSiguiente);

var originalProducts;

function getMatchingProducts(searchTerm) {
  return originalProducts.filter(function (product) {
    return product.textContent.toLowerCase().includes(searchTerm);
  });
}

function displaySearchResults(products) {
  originalProducts.forEach(function (product) {
    product.style.display = 'none';
  });

  products.forEach(function (product) {
    product.style.display = 'block';
  });
}

document.addEventListener("DOMContentLoaded", function () {
  var searchInput = document.getElementById('searchInput');
  var searchButton = document.getElementById('searchButton');
  var productContainer = document.getElementById('productContainer');

  originalProducts = Array.from(document.querySelectorAll('.product'));

  searchInput.addEventListener('input', function () {
    var searchTerm = searchInput.value.trim().toLowerCase();

    var matchingProducts = getMatchingProducts(searchTerm);

    displaySearchResults(matchingProducts);
  });

  searchButton.addEventListener('click', search);
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    search();
  }
});

function resetSearch() {
  displaySearchResults(originalProducts);
}
