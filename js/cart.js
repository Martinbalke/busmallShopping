/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
var tbodyELParent = document.getElementsByTagName('tbody');
var tbodyEL = tbodyELParent[0];
var table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
var cart;

var cartItems = JSON.parse(localStorage.getItem('cart')) || [];
function loadCart() {
  cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  tbodyEL.innerHTML = '';
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {
  tbodyEL.innerHTML = '';
  for(let i = 0; i < cart.items.length; i++){
    var trEl = document.createElement('tr');
    tbodyEL.appendChild(trEl);
    var tdElRmv = document.createElement('button');
    tdElRmv.textContent = 'X';
    tdElRmv.id = [i];
    trEl.appendChild(tdElRmv);
    var tdELquantity = document.createElement('td');
    tdELquantity.textContent = `${cart.items[i].quantity}`;
    trEl.appendChild(tdELquantity);
    var tdELItem = document.createElement('td');
    tdELItem.textContent = `${cart.items[i].product}`
    trEl.appendChild(tdELItem);


  }

}

function removeItemFromCart(event) {
  var remove = event.target.id;
  cartItems.splice(remove, 1);
  
  localStorage.setItem('cart', JSON.stringify(cart.items));
  showCart();

}

// This will initialize the page and draw the cart on screen
renderCart();