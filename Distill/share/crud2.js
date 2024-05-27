const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/ecomm1")

const productSchema = new mongoose.Schema({
        modelnum:Number,
		name:String,
		price:Number
	});

const Product = mongoose.model('products', productSchema)

let data = new Product({modelnum:4, name:"Computer", price:38000})
data.save().then(doc => {
	   console.log(doc)
	 })
	 .catch(err => {
	   console.error(err)
	 })


Product.find({})
  .then(doc => {
    console.log(doc)
  })
  .catch(err => {
    console.error(err)
  })


Product.find({modelnum:1})
  .then(doc => {
    console.log(doc)
  })
  .catch(err => {
    console.error(err)
  })


Product.findOneAndUpdate(
    {
      modelnum: 4
    }, 
    {
      price: 25000   
    },
    {
      new: true,                       
    })
  .then(doc => {
    console.log(doc)
  })
  .catch(err => {
    console.error(err)
  })


// Product.findOneAndDelete({
//     modelnum: 2
//   })
//   .then(response => {
//     console.log(response)
//   })
//   .catch(err => {
//     console.error(err)
//   })