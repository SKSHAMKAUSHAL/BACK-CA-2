require('dotenv').config();
const express = require ('express');

const Port=process.env.PORT||8080;

const app =express();

app.use(express.json())

const {user}=require('./model/user')


app.get('/',(req,res)=>{
    res.send("HEY THIS IS MY CA 2 OF BACKEND");
})


// app.post('/',(req,res)=>{
    
//     res.send("HEY THIS IS MY CA 2 OF BACKEND");
// })

app.listen(Port,(req,res)=>{
    console.log(`this server is running at http://localhost:${Port}`);
})