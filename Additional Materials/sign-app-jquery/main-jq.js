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
var nameDisplay = $('#name');
var nameInput = $('[name="name"]');
var fontInput = $('[name="font-select"]');
var specialCharsInput = $('[name="specialChars"]');
var shippingInput = $('[name="shipping"]');
var submitButton = $( '#calculate' );
// Cache all DOM Display Elements here


// Business logic
var costPerLetter = 5;
var tax = .06;

nameInput.on('input', function(e) {
  // if the user has entered a value in the nameInput, then display it
  // if not, then display 'Your Name Here'
  if (e.target.value) {
    nameDisplay.html( e.target.value );
    // OLD: nameDisplay.innerHTML = e.target.value;

  } else {
    nameDisplay.html( 'Your Name Here' );
    // OLD: nameDisplay.innerHTML = 'Your Name Here';
  }
});

// Listening to the fontInput drop down for a change.
// when it changes, change the font family style of the name display
fontInput.on('change', function(e) {
  nameDisplay.css( 'font-family', e.target.value );
  // OLD: nameDisplay.style.fontFamily = e.target.value;
});


submitButton.on( 'click', function calculateCosts(e) {
  e.preventDefault();
  // do all your business logic here

  // NEW:
  var letter_cost = nameInput.val().length * costPerLetter;
  $( '#lettersCostDisplay' ).html( letter_cost );


// OLD:
//  var letter_cost = nameInput.value.length * costPerLetter;
//  document.getElementById( 'lettersCostDisplay' ).innerHTML = letter_cost;

});

