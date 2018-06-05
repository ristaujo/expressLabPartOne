"use strict";
function CartService($http) {
  // Declare the functions to make GET, POST, PUT, and DELETE requests from this service.
  const getAllItems = () => {
    return $http({
      method: "GET",
      url: "/portal/items"
    });
  };

  const addProduct = (newProduct) => {
    return $http({
      method: "POST",
      url: "/portal/items",
      data: newProduct
    });
  };

  const deleteProduct = (id) => {

    return $http({
      method: "DELETE",
      url: "/portal/items/" + id,
    });
  };

  const updateProduct = (product) => {
    return $http({
      method: "PUT",
      url: "/portal/items/" + product.id,
      data: product
    });
  };

  return {
    getAllItems,
    addProduct,
    deleteProduct,
    updateProduct
  };
}

angular
  .module("app")
  .factory("CartService", CartService);