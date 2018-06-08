"use strict";

const cart = {
  template: `
  <h1>Grocery Time</h1>
  <form class="input-main" ng-submit="$ctrl.addProduct($ctrl.newProduct);">
    <input type="text" placeholder="Product" class="add-input" ng-model="$ctrl.newProduct.product">
    <input type="text" placeholder="Price" ng-model="$ctrl.newProduct.price" class="add-input">
    <input type="text" placeholder="Quantity" ng-model="$ctrl.newProduct.quantity" class="add-input">
    <button class="add">Add</button>
  </form>
  <section class="card-container">
    <section ng-repeat="item in $ctrl.items" class="main">
      <i class="material-icons delete" ng-click="$ctrl.deleteProduct(item.id);">clear</i>
      <p>Product:</p><input ng-blur="$ctrl.updateProduct(item);" ng-model="item.product" class="bot-input">
      <p>Price:</p><input ng-blur="$ctrl.updateProduct(item);" ng-model="item.price" class="bot-input">
      <p>Quantity:</p><input ng-blur="$ctrl.updateProduct(item);" ng-model="item.quantity" class="bot-input">
    </section>
  </section>
  `,
  controller: ["CartService", function(CartService) {
    const vm = this;
    CartService.getAllItems().then((response) => {
      vm.items = response.data;
    });

    vm.addProduct = (newProduct) => {
      CartService.addProduct(newProduct).then((response) => {
        vm.items = response.data;
      });
    };
    vm.deleteProduct = (id) => {
      CartService.deleteProduct(id).then((response) => {
        vm.items = response.data;
      });
    };
    
    vm.updateProduct = (item) => {
      CartService.updateProduct(item).then((response) => {
        vm.items = response.data;
      });
    };
  }]
};
angular
.module("app")
.component("cart", cart);