"use strict";

const cart = {
  // TODO: Create a template to display all the students from this class
  template: `
  <section ng-repeat="item in $ctrl.items">
    <p>Product: {{item.product}}</p>
    <p>Price: $ {{item.price}}</p>
    <p>Quantity: {{item.quantity}}</p>



  `,
  controller: ["CartService", function(CartService) {
    const vm = this;
    // TODO: Call the StudentService to retrieve the list of the students
    CartService.getAllItems().then((response) => {
      vm.items = response.data;
    });
  }]
};
angular
.module("app")
.component("cart", cart);