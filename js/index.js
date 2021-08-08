const data = [
  {
    img: "./images/new-product.jpg",
    name: "Bột mỳ baker choice số 13",
    priceFrom: 200000,
    priceTo: 409000,
    sold: "Đã bán 26,3K",
  },
  {
    img: "./images/new-product.jpg",
    name: "Mỳ ăn liền ô ma chi",
    priceFrom: 5000,
    priceTo: 9900,
    sold: "Đã bán 10,5K",
  },
];

let productFavourite;
if (localStorage.getItem("productFavourite") !== null) {
  productFavourite = localStorage.getItem("productFavourite"); // productFavourite đang là dữ liệu json
  productFavourite = JSON.parse(productFavourite); //chuyển productFavourite từ json về dạng bình thường
} else {
  productFavourite = [];
}

let productsHTML = "";
let idAllProducts = document.getElementById("allProducts");

for (product of data) {
  productsHTML += `
  <div class="product">
  <img class="product__img" src=${product.img} alt />
  <div class="product__title">${product.name}</div>
  <div class="product__price">
    <p class="product__price-vnd">đ</p>
    <p class="product__price-number">${product.priceFrom}</p>
    <p class="product__price--">-</p>
    <p class="product__price-vnd">đ</p>
    <p class="product__price-number">${product.priceTo}</p>
  </div>
  <div class="product__footer">
    <i class="product__footer-left far fa-heart" onclick="getName('${product.name}')"></i>
    <div class="product__footer-right">
      <div class="product__footer-right-rate">
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
      </div>
      <div class="product__footer-right-sold">${product.sold}</div>
    </div>
  </div>
</div>
  `;
}

// console.log(productsHTML);

idAllProducts.innerHTML = productsHTML;

function getName(name) {
  productFavourite.push(name);
  localStorage.setItem("productFavourite", JSON.stringify(productFavourite));

  readProductFavourite();
}

function readProductFavourite() {
  let productFavouriteHTML = "";
  // Hàm đọc sản phẩm
  for (let i = 0; i < productFavourite.length; i++) {
    productFavouriteHTML += `
      <p onclick="removeProductFavourite(${i})">${productFavourite[i]}</p>
    `;
  }

  document.getElementById("container__favourite-show").innerHTML =
    productFavouriteHTML;
}

function removeProductFavourite(i) {
  console.log("index nhận được là: ", i);
  productFavourite.splice(i, 1);
  localStorage.setItem("productFavourite", JSON.stringify(productFavourite));
  readProductFavourite();
}

readProductFavourite();
