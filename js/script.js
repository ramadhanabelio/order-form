const menuItems = [
  { name: "Nasi Goreng", price: 10000 },
  { name: "Nasi Goreng Kampung", price: 10000 },
  { name: "Nasi Goreng Petai", price: 13000 },
  { name: "Nasi Goreng Ikan Asin", price: 13000 },
  { name: "Nasi Goreng Ayam", price: 15000 },
  { name: "Nasi Goreng Ampela", price: 15000 },
  { name: "Nasi Goreng Sosis", price: 15000 },
  { name: "Nasi Goreng Bakso", price: 15000 },
  { name: "Nasi Goreng Cumi", price: 18000 },
  { name: "Nasi Goreng Udang", price: 18000 },
];

const menuList = document.getElementById("menuList");
const totalPriceEl = document.getElementById("totalPrice");
let totalPrice = 0;

const orders = {};

function formatCurrency(amount) {
  return amount.toLocaleString("id-ID");
}

menuItems.forEach((item) => {
  const button = document.createElement("button");
  button.className = "btn btn-light menu-button col-12 text-start";
  button.innerHTML = `
    <span>${item.name}</span>
    <span class="fw-bold">Rp ${formatCurrency(item.price)}</span>
  `;
  button.dataset.price = item.price;
  button.dataset.name = item.name;
  menuList.appendChild(button);

  button.addEventListener("click", function () {
    const quantity = parseInt(prompt(`Berapa porsi ${item.name}?`, "1") || "0", 10);
    if (quantity <= 0 || isNaN(quantity)) return;

    const itemPrice = parseInt(this.dataset.price);
    const itemName = this.dataset.name;

    if (!orders[itemName]) {
      orders[itemName] = { price: itemPrice, quantity: 0 };
      this.classList.remove("btn-light");
      this.classList.add("btn-success");
    }
    orders[itemName].quantity += quantity;

    const totalItemPrice = orders[itemName].price * orders[itemName].quantity;
    this.innerHTML = `
      <span>${itemName} x ${orders[itemName].quantity}</span>
      <span class="fw-bold">Rp ${formatCurrency(totalItemPrice)}</span>
    `;

    totalPrice += itemPrice * quantity;
    totalPriceEl.textContent = `Rp ${formatCurrency(totalPrice)}`;
  });
});
