"use strict";
const express = require("express");
const cartRouter = express.Router();

const items = [
  {
    product: "Bread",
    price: 2.00,
    quantity: 1,
    id: 0
  },
  {
    product: "Milk",
    price: 2.50,
    quantity: 1,
    id: 1
  },
  {
    product: "Ground Turkey",
    price: 3.50,
    quantity: 2,
    id: 2
  }
];
let idCounter = 3;

cartRouter.get("/items", (request, response) => {
  response.send(items);
});
cartRouter.post("/items", (request, response) => {
  items.push({
    product: request.body.product,
    price: request.body.price,
    quantity: request.body.quantity,
    id: idCounter++
  });
  response.send(items);
  console.log(request.body);
});
cartRouter.delete("/items/:id", (request, response) => {
  for (let item of items) {
    if(item.id == request.params.id) {
      items.splice(items.indexOf(item), 1);
    }
  }
  response.send(items);
  console.log(response.body);
  console.log(request.params.id);
});
cartRouter.put("/items/:id", (request, response) => {

  for (let item of items) {
    if(item.id == request.params.id) {
      items.splice(items.indexOf(item), 1, {
        product: request.body.product,
        price: request.body.price,
        quantity: request.body.quantity,
        id: item.id
      });
    }
  }
  response.send(items);
  console.log(response.body);
  console.log(request.params.id);
});

  

console.log(items);



module.exports = cartRouter;
