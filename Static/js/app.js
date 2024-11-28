// https://stackoverflow.com/a/43824723/1240036
function hasClass(el, className) {
  if (el.classList) return el.classList.contains(className);
  return !!el.className.match(new RegExp("(\\s|^)" + className + "(\\s|^"));
}

function addClass(el, className) {
  if (el.classList) return el.classList.add(className);
  else if (!hasClass(el, className)) el.className += " " + className;
}

function removeClass(el, className) {
  if (el.classList) el.classList.remove(className);
  else if (hasClass(el, className)) {
    var reg = new RegExp("(\\s|^)" + className + "(\\s|$)");
    el.className = el.className.replace(reg, "");
  }
}

function currency(amount) {
  return "Rp" + amount;
}

var product = [
  {
    id: 1,
    name: "Cappucino",
    price: 35000,
    active: true,
  },
  {
    id: 2,
    name: "Green Tea Latte",
    price: 40000,
    active: true,
  },
  {
    id: 3,
    name: "Fish and Chips",
    price: 50000,
    active: true,
  },
  {
    id: 4,
    name: "Tuna Sandwich",
    price: 45000,
    active: true,
  },
  {
    id: 5,
    name: "Mineral Water",
    price: 8000,
    active: true,
  },
  {
    id: 5,
    name: "Mineral Water",
    price: 8000,
    active: true,
  },
  {
    id: 6,
    name: "French Fries",
    price: 18000,
    active: true,
  },
];

function setTitle() {
  var $title = document.createElement("h1");
  $title.innerHTML = "Pesanan";
  container.appendChild($title);
}

function addTotal(product, total, isAdd) {
  if (isAdd) {
    total += product.price;
  } else {
    total -= product.price;
  }
  return total;
}

// Render List
function renderList(container, products) {
  var $orderList = document.createElement("ul");

  // Loop products, buat elemen tiap produk lalu append ke orderList
  product.forEach(function (product) {
    var $product = document.createElement("li");
    var $productPrice = document.createElement("span");

    $productPrice.innerHTML = currency(product.price);
    $product.innerHTML = product.name;
    $product.appendChild($productPrice);

    $orderList.appendChild($product);

    // Tambah event handler ketika product di klik
    $product.addEventListener("click", function (event) {
      // isAdd untuk menentukan apakah operasi berikutnya adalah operasi penambahan atau pengurangan
      var isAdd = !hasClass($product, "is-active");

      // Kita tambah atau buah class is-active sesuai operasi yang akan dilakukan
      if (isAdd) {
        addClass($product, "is-active");
      } else {
        removeClass($product, "is-active");
      }

      // Mendapatkan nilai total yang baru dari fungsi addTotal
      total = addTotal(product, total, isAdd);

      // Perbarui nilai total di DOM
      var $total = document.querySelector(".total span");
      $total.innerHTML = currency(total);
    });
  });

  container.appendChild($orderList);

  //
  //
  //
  //
  //
  //
  $totalContainer.innerHTML = "Total: ";

  var $total = document.createElement("span");
  $total.innerHTML = currency(total);
  $totalContainer.appendChild($total);

  container.appendChild($totalContainer);
}

// Render title, list, dan TotalContainer
renderTitle($app);
renderList($app, products);
renderTotalContainer($app, total);

// querySelectorAll untuk mendapat semua DOM Node yang sesuai dengan selector
// yang diberikan. Kemudia kita bisa menggunakan loop (forEach) untuk mendapat
// setiap DOM Node nya.
var $product = document.querySelector("li");
$product.forEach(function (product, index) {
  // Kita pilih 2 order teratas dengan men-trigger event click
  if (index < 2) {
    $product.dispatchEvent(new Event("click"));
  }
});
