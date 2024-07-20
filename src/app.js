const fs = require("fs");
const express = require("express");
const app = express();

// Importing products from products.json file
const products = JSON.parse(fs.readFileSync(`${__dirname}/data/products.json`));

// Middlewares
app.use(express.json());


// Write GET endpoint for sending all the products to client here
// Endpoint - /api/v1/products

app.get("/api/v1/products",(req,res)=>{
    if(products && products.length){
        res.statusCode = 200;
        const payLoad = {
            status: "success", 
            message: "Product fetched successfully",
            data: { 
                products,
            },
        };
        res.json(payLoad);

    }else{
        res.statusCode = 404;
        const payLoad = { message:"Product not found"};
        res.json(payLoad);
    }
});

module.exports = app;
