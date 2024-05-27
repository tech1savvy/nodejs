


const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/ecomm1")

const productSchema = new mongoose.Schema({
		name:String,
		price:Number
	});

const saveInDB = async()=>{
	const Product = mongoose.model('products', productSchema)
	let data = new Product({name:"smartphone", price:20000})
	const result = await data.save();
	console.log(result);
}
saveInDB()
const insert=async()=>{
    const stud=mongoose.model('students',productSchema)
    let data=await stud.insertMany([
        {name:'iPhone16', age:780000},
        {name:'Samsung FLipz', age:710000},
        ])
    console.log(data)
}
insert()
const updateInDB = async()=>{
	const Product = mongoose.model('products', productSchema)
	let data = await Product.updateOne(
		{name:"smartphone"}, {$set:{price:700}})
		console.log(data);
}

const deleteInDB = async()=>{
	const Product = mongoose.model('products', productSchema)
	let data = await Product.deleteOne({name:"max 100"});
	console.log(data);
}

const findInDB = async()=>{
	const Product = mongoose.model('products', productSchema)
	let data = await Product.find();
	console.log(data);
}



saveInDB();
updateInDB();