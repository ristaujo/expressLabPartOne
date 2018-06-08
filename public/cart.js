"use strict";

const cart = {
  template: `
  <section class="card-container">
    <h1>Grocery Time</h1>
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