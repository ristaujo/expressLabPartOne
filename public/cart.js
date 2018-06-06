"use strict";

const cart = {
  template: `
  <h1>Grocery Time</h1>
  <section ng-repeat="item in $ctrl.items" class="main">
    <h2>{{item.product}}</h2>
    <p>Price: $ {{item.price}}</p>
    <p>Quantity: {{item.quantity}}</p>
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