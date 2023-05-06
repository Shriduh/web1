const products = [
  {
    name: "Product 1",
    price: 100,
    image: "https://via.placeholder.com/300x200"
  },
  {
    name: "Product 2",
    price: 200,
    image: "https://via.placeholder.com/300x200"
  },
  {
    name: "Product 3",
    price: 300,
    image: "https://via.placeholder.com/300x200"
  },
  {
    name: "Product 4",
    price: 400,
    image: "https://via.placeholder.com/300x200"
  },
  {
    name: "Product 5",
    price: 500,
    image: "https://via.placeholder.com/300x200"
  },
  {
    name: "Product 6",
    price: 600,
    image: "https://via.placeholder.com/300x200"
  }
];

const cart = [];

function renderProducts() {
  const productGrid = document.querySelector(".product-grid");
  productGrid.innerHTML = "";
  
  products.forEach(product => {
    const productElement = document.createElement("div");
    productElement.classList.add("product");
    
    const imageElement = document.createElement("img");
    imageElement.src = product.image;
    productElement.appendChild(imageElement);
    
    const nameElement = document.createElement("h3");
    nameElement.textContent = product.name;
    productElement.appendChild(nameElement);
    
    const priceElement = document.createElement("p");
    priceElement.textContent = `$${product.price}`;
    productElement.appendChild(priceElement);
    
    const addToCartElement = document.createElement("button");
    addToCartElement.classList.add("add-to-cart");
    addToCartElement.textContent = "Add to Cart";
    addToCartElement.addEventListener("click", () => {
      cart.push(product);
      renderCart();
    });
    productElement.appendChild(addToCartElement);
    
    productGrid.appendChild(productElement);
  });
}

function renderCart() {
  const cartItemsElement = document.querySelector(".cart-items");
  cartItemsElement.innerHTML = "";
  
  cart.forEach(item => {
    const cartItemElement = document.createElement("div");
    cartItemElement.classList.add("cart-item");
    
    const nameElement = document.createElement("div");
    nameElement.classList.add("cart-item-name");
    nameElement.textContent = item.name;
    cartItemElement.appendChild(nameElement);
    
    const priceElement = document.createElement("div");
    priceElement.classList.add("cart-item-price");
    priceElement.textContent = `$${item.price}`;
    cartItemElement.appendChild(priceElement);
    
    cartItemsElement.appendChild(cartItemElement);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderProducts();
  renderCart();
});
