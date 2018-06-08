"use strict";
const express = require("express");
const cartRouter = express.Router();

const pg = require("pg");
const pool = require("./pg-connection-pool");

cartRouter.get("/items", (request, response) => {
  pool.query("SELECT * FROM shoppingCart ORDER BY id").then((result) => {
    response.send(result.rows);
  });
});
cartRouter.post("/items", (request, response) => {
  pool.query("INSERT INTO shoppingCart(product, price, quantity) VALUES($1, $2, $3)", [request.body.product, request.body.price, request.body.quantity])
  .then(() => {
    pool.query("SELECT * FROM shoppingCart").then((result) => {
      response.send(result.rows);
    });
  });
});
cartRouter.delete("/items/:id", (request, response) => {
  pool.query("DELETE FROM shoppingCart WHERE id=$1", [request.params.id]).then(() => {
    pool.query("SELECT * FROM shoppingCart ORDER BY id").then((result) => {
      response.send(result.rows);
    });
  });
});
cartRouter.put("/items/:id", (request, response) => {
  pool.query("UPDATE shoppingCart SET product=$1, price=$2, quantity=$3 WHERE id=$4", [request.body.product, request.body.price, request.body.quantity, request.params.id]).then(() => {
    pool.query("SELECT * FROM shoppingCart ORDER BY id").then((result) => {
      response.send(result.rows);
    });
  });
}); 



module.exports = cartRouter;
