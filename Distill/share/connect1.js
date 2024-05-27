
const mongoose=require('mongoose')
mongoose.connect("mongodb://127.0.0.1:27017/studentdb")
.then(()=>{
    console.log("connection successfull")
})
.catch((err)=>{
    console.log(`No connection ${err}`)
})

const stds=mongoose.Schema({
    name:String,
    age:Number
})
const savedb = async()=>{
	const stud = mongoose.model('students', stds)
	let data = new stud({name:"Arwin", age:29})
	const result = await data.save();
	console.log(result);
}

const insert=async()=>{
    const stud=mongoose.model('students',stds)
    let data=await stud.insertMany([
        {name:'Manoj', age:78},
        {name:'Anuj', age:45},
        ])
    console.log(data)
}
const update=async()=>{
    const stud=mongoose.model('students',stds)
    let data=await stud.updateMany(
        {'name':'Arwin'},{$set:{'age':78}})
    console.log(data)
}
const find=async()=>{
    const stud=mongoose.model('students',stds)
    let data=await stud.find()
    console.log(data)
}



const marks=mongoose.model('students',stds)
let data1=new marks({'marks':20})
data1.save().then(
    (msg)=>{
        console.log(msg)
    }
)
.catch(
    (err)=>{
        console.log(err)
    }
)
module.exports=mongoose.model('products',productSchema)


//savedb()
//insert()
//update()
//find()