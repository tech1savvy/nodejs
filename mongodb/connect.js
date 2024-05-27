const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/sandbox")
    .then(() => {
        console.log("Connection successful");
    })
    .catch((err) => {
        console.log(`No connection ${err}`);
    });

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    age: Number,
});

const User = mongoose.model('users', userSchema);

let data = new User({username:"a-kon", password:"akon1234", age:13});


// saving data
const savedb = async()=>{
	data.save().
    then(doc => {
        console.log(doc)
        console.log('save success')
    })
    .catch(err => {
        console.error(err)
    })
}

savedb();

// finding data 
const finddb = async() =>{
    User.find({"username":"a-kon"})
    .then(doc => {
        console.log(doc);
        console.log('find success')
    })
    .catch(err => {
        console.error(err);
    })
}

finddb();