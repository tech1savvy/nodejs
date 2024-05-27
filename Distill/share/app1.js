



const express= require("express")
const app = express();
const Student1 = require("./connect1");

app.get("/", (req,res)=>{
    res.send("hello");
})


app.get("/list", async(req, resp)=>{
    let data =await Student1.find();
    resp.send(data);
});

app.listen(3000)






app.get("/list/:_id", async(req, resp)=>{
    let data = await Student1.findOne({ _id: req.params.id });
    resp.send(data);
});

app.listen(4000,()=>{
    console.log("Running")
})