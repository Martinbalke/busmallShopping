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
function clearCart() {}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {
  tbodyEL.innerHTML = '';
  // TODO: Find the table body
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

  // TODO: Iterate over the items in the cart
  // TODO: Create a TR
  // TODO: Create a TD for the delete link, quantity,  and the item
  // TODO: Add the TR to the TBODY and each of the TD's to the TR

}

function removeItemFromCart(event) {
  var remove = event.target.id;
  cartItems.splice(remove, 1);
  
  localStorage.setItem('cart', JSON.stringify(cart.items));
  showCart();
  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table

}

// This will initialize the page and draw the cart on screen
renderCart();