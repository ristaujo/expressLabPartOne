"use strict";

const cart = {
  template: `
  <h1>Grocery Time</h1>
  <section class="input-main">
    <input type="text" placeholder="Product">
    <input type="text" placeholder="Price">
    <input type="text" placeholder="Quantity">
    <button class="add">Add</button>
  </section>
  <section class="card-container">
    <section ng-repeat="item in $ctrl.items" class="main">
      <i class="material-icons delete">clear</i>
      <h2>{{item.product}}</h2>
      <p>Price: $ {{item.price}}</p>
      <p>Quantity: {{item.quantity}}</p>
    </section>
  </section>
  `,
  controller: ["CartService", function(CartService) {
    const vm = this;
    CartService.getAllItems().then((response) => {
      vm.items = response.data;
    });
  }]
};
angular
.module("app")
.component("cart", cart);