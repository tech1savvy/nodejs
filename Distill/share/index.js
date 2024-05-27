const express = require('express');
require('./config');
const Product = require('./product');

const app = express();
app.use(express.json());  //middleware to parse req.body

/*Create a new product*/
app.post("/create", async (req, resp)=>{
let data = Product(req.body);
let result = await data.save();
console.log(result);
resp.send(result);
});

/*To get all products*/
app.get("/list", async(req, resp)=>{
    let data = await Product.find();
    resp.send(data);
});

/*To get an individual product*/
app.get("/list/:id", async(req, resp)=>{
    let data = await Product.findOne({ _id: req.params.id });
    resp.send(data);
});

/*To delete an individual product*/
app.delete("/delete/:_id", async(req, resp)=>{
    console.log(req.params)
    let data = await Product.deleteOne(req.params);
    resp.send(data);
})

/*To update an individual product*/
app.put("/update/:_id", async(req, resp)=>{
    console.log(req.params)
    let data = await Product.updateOne(
        req.params,
        {
            $set:req.body
        }
        );
    resp.send(data);
})
app.listen(5000);