// ---------------------------
// Validate form
// ---------------------------
// How much would it cost for your name to be converted to a sign
// Each letter and special characters cost 5 dollars, you should be
// taxed on the product and not shipping, shipping comes in 3 flavors,
// and you get a small choice of different fonts ( no extra charge ).
//
// Take everything you have learned form the past examples to execute the app.


// Caching all DOM Input Elements necessary
var $nameInput = $('[name="name"]');
var $fontInput = $('[name="font-select"]');
var $specialCharsInput = $('[name="specialChars"]');
var $shippingInput = $('[name="shipping"]');

// Cache all DOM Display Elements here
var $nameDisplay = $('#name');
var $letterCostDisplay = $("#lettersCostDisplay");
var $specialCharsCostDisplay = $("#specialCharsCostDisplay");
var $taxCostDisplay = $("#taxCostDisplay");
var $shippingCostDisplay = $("#shippingCostDisplay");
var $subTotalDisplay = $("#subTotalDisplay");
var $grandTotalDisplay = $("#grandTotalDisplay");

// Business logic
var costPerLetter = 5;
var tax = .06;

$nameInput.on('input', function(e) {
  // if the user has entered a value in the nameInput, then display it
  // if not, then display 'Your Name Here'
  if (e.target.value) {
    $nameDisplay.html(e.target.value);
  } else {
    $nameDisplay.html('Your Name Here');
  }
});

// Listening to the fontInput drop down for a change.
// when it changes, change the font family style of the name display
$fontInput.on('change', function(e) {
  $nameDisplay.css("font-family", e.target.value);
});


function calculateCosts(e) {
  e.preventDefault();
  // do all your business logic here
  // get length of name
  var signName = $nameInput.val();
  console.log("Name is", signName);
  var nameLength = signName.length;
  console.log("Name length is", nameLength);
  // calculate cost of name (multiply by cost per letter)
  var nameCost = nameLength * costPerLetter;
  console.log("Cost of name is", nameCost);
  // get # of special characters
  var specialChars = $specialCharsInput.val();
  specialChars = parseInt(specialChars);
  console.log("Special chars is", specialChars)
  // calculate cost of special chars (multiply by cost per letter)
  var specialCharsCost = specialChars * costPerLetter;
  console.log("special Char cost: ", specialCharsCost);
  // calculate subtotal
  var subTotal = nameCost + specialCharsCost;
  console.log("Subtotal is", subTotal);
  // calculate tax
  var taxCost = subTotal * tax;
  console.log("tax cost: ", taxCost);
  // calculate shipping
  var shippingCost = $shippingInput.val();
  shippingCost = Number(shippingCost);
  console.log("Shipping cost: ", shippingCost);
  // total
  var total = subTotal + taxCost + shippingCost;
  console.log("Total:", total);

  $letterCostDisplay.text(formatCost(nameCost, 0));
  $specialCharsCostDisplay.text(formatCost(specialCharsCost, 0));
  $taxCostDisplay.text(formatCost(taxCost));
  $shippingCostDisplay.text(formatCost(shippingCost));
  $subTotalDisplay.text(formatCost(subTotal));
  $grandTotalDisplay.text(formatCost(total));
}

function formatCost( cost, digits = 2 ) {
  return "$" + cost.toFixed(digits);
}

$("#calculate").on("click", calculateCosts);