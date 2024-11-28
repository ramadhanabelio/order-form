{
  if (quantity < 10) return 0;

  if (quantity < 20) return 0.1;

  if (quantity < 30) return 0.2;

  if (quantity < 40) return 0.3;

  if (quantity >= 40) return 0.4;
} // end function calcDiscount(quantity)

function calcOrder() {
  if (validateFirstName() && validateLastName() && validatePhone() && validateQuantity() && calcDiscount(quantity)) {
    const TAXRATE = 0.085;
    var userName = document.getElementById("username").value;
    var userName2 = document.getElementById("username2").value;
    var quantity = document.getElementById("quantity").value;
    var cost = document.getElementById("cost").value;
    var extendedCost = quantity * cost;
    var taxAmount = extendedCost * TAXRATE;
    var discountAmount = calcDiscount(quantity) * extendedCost;
    var orderCost = extendedCost - discountAmount + taxAmount;
    document.getElementById("costExtended").value = "$" + orderCost.toFixed(2);

    document.getElementById("output").innerHTML += "<p>Hello " + userName + userName2 + " - Your order of " + quantity + " widgets, totals $" + orderCost.toFixed(2) + ", including tax" + "and a" + discountAmount + "% discount.</p>";
  } else {
    document.getElementById("costExtended").value = "";
    alert("Please correct your input");
  }
} // end function calcOrder
