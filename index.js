// Sample product data
const products = [
  {
    name: "Сковорода",
    category: "Сковороди",
    price: 500,
    image: "./img/Сковорода 40см.jpg",
  },

  {
    name: "Сковорода з підвіскою",
    category: "Сковороди",
    price: 500,
    image: "./img/Сковорода з підвіскою.jpg",
  },
  {
    name: "Кришка",
    category: "Сковороди",
    price: 500,
    image: "./img/Кришка.png",
  },
  {
    name: "Чохол",
    category: "Сковороди",
    price: 500,
    image: "./img/Чохол.jpg",
  },
  {
    name: "Пивний бокс",
    category: "Дерево",
    price: 870,
    image: "./img/пивний бокс.JPG",
  },
  {
    name: "Столик для сніданків",
    category: "Дерево",
    price: 930,
    image: "./img/Столик.jpg",
  },
  {
    name: "Наливатор",
    category: "Дерево",
    price: 800,
    image: "./img/Наливатор.JPG",
  },
  {
    name: "Ділдак",
    category: "home",
    price: 50,
    image: "./img/M3800024-Sex_toy,_X-ray.jpg",
  },
  {
    name: "Ділдак 2",
    category: "home",
    price: 1500,
    image: "./img/M3800024-Sex_toy,_X-ray.jpg",
  },
];

// Get the filter elements
const searchInput = document.getElementById("search");
const categorySelect = document.getElementById("category");
const applyFiltersButton = document.getElementById("applyFilters");

// Get the product list element
const productList = document.getElementById("productList");

// Apply filters when the Apply Filters button is clicked
applyFiltersButton.addEventListener("click", applyFilters);

// Display all products when the page loads
displayProducts(products);

categorySelect.addEventListener("click", applyFilters);

function applyFilters() {
  // Get the search query and category filter values
  const searchQuery = searchInput.value.toLowerCase();
  const categoryFilter = categorySelect.value;

  // Filter the products based on the search query and category filter
  const filteredProducts = products.filter((product) => {
    const name = product.name.toLowerCase();
    const category = product.category;
    return (
      name.includes(searchQuery) &&
      (categoryFilter === "all" || categoryFilter === category)
    );
  });
  searchInput.value = "";
  // Display the filtered products
  displayProducts(filteredProducts);

  // Add event listener to each product image to show modal
  document.querySelectorAll(".product img").forEach((img) => {
    img.addEventListener("click", function () {
      modal.style.display = "block";
      modalImg.src = this.src;
    });
  });
}

function displayProducts(products) {
  // Clear the product list first
  productList.innerHTML = "";

  // Loop through the products and create an HTML element for each one
  products.forEach((product) => {
    const productElement = document.createElement("div");
    productElement.className = "product";
    productElement.innerHTML = `<div><img src="${product.image}"></div> <h3>${product.name}</h3> <p>Категорія: ${product.category}</p> <p>ціна: $${product.price}</p> `;
    productList.appendChild(productElement);
  });
}

// Get the modal element
const modal = document.getElementById("modal");

// Add event listener to each product image to show modal
document.querySelectorAll(".product img").forEach((img) => {
  img.addEventListener("click", function () {
    modal.style.display = "block";
    modalImg.src = this.src;
  });
});

// Get the image and modal content elements
const modalImg = document.getElementById("modalImg");
const modalClose = document.getElementsByClassName("close")[0];

// Add event listener to close button to hide modal
modalClose.addEventListener("click", function () {
  closeModal();
});

// Add event listener to modal background to hide modal
modal.addEventListener("click", function (e) {
  if (e.target === modal) {
    closeModal();
  }
});

// Add event listener to document to close modal with escape key
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closeModal();
  }
});

// Function to close modal
function closeModal() {
  modal.style.display = "none";
}
