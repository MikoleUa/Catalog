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
    category: "Ділдо",
    price: 50,
    image: "./img/M3800024-Sex_toy,_X-ray.jpg",
  },
  {
    name: "Ділдак 2",
    category: "Ділдо",
    price: 1500,
    image: "./img/M3800024-Sex_toy,_X-ray.jpg",
  },
];

const searchInput = document.getElementById("search");
const categorySelect = document.getElementById("category");
const applyFiltersButton = document.getElementById("applyFilters");
const navBTN = document.querySelector(".navBTN");

const productList = document.getElementById("productList");

applyFiltersButton.addEventListener("click", applyFilters);

displayProducts(products);

categorySelect.addEventListener("change", applyFilters);
navBTN.addEventListener("click", onnavBTN);

function onnavBTN(e) {
  const selectedBtn = e.target.name;

  const filteredProducts = products.filter((product) => {
    const category = product.category;
    return selectedBtn === "all" || selectedBtn === category;
  });
  searchInput.value = "";

  displayProducts(filteredProducts);
}
function applyFilters() {
  const searchQuery = searchInput.value.toLowerCase();
  const categoryFilter = categorySelect.value;

  const filteredProducts = products.filter((product) => {
    const name = product.name.toLowerCase();
    const category = product.category;
    return (
      name.includes(searchQuery) &&
      (categoryFilter === "all" || categoryFilter === category)
    );
  });
  searchInput.value = "";

  displayProducts(filteredProducts);

  document.querySelectorAll(".product img").forEach((img) => {
    img.addEventListener("click", function () {
      modal.style.display = "flex";
      modalImg.src = this.src;
    });
  });
}

function displayProducts(products) {
  productList.innerHTML = "";

  products.forEach((product) => {
    const productElement = document.createElement("div");
    productElement.className = "product";
    productElement.innerHTML = `<div><img src="${product.image}"></div> <h3>${product.name}</h3> <p>Категорія: ${product.category}</p> <p>ціна: $${product.price}</p> `;
    productList.appendChild(productElement);
  });
}

const modal = document.getElementById("modal");

document.querySelectorAll(".product img").forEach((img) => {
  img.addEventListener("click", function () {
    modal.style.display = "flex";
    modalImg.src = this.src;
  });
});

const modalImg = document.getElementById("modalImg");
const modalClose = document.getElementsByClassName("close")[0];

modalClose.addEventListener("click", function () {
  closeModal();
});

modal.addEventListener("click", function (e) {
  if (e.target === modal) {
    closeModal();
  }
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closeModal();
  }
});

function closeModal() {
  modal.style.display = "none";
}
