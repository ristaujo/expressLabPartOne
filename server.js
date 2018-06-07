"use strict";
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cart = require("./cart.routes");


app.use(bodyParser.json());
app.use("/portal", cart);
app.use(express.static(__dirname + "/public")); 


let port = 8080;
app.listen(port, () => console.log(`listening on port ${port}.`));
