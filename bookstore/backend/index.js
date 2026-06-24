const express = require('express');
const { default: mongoose } = require('mongoose');
const book_route = require('./route/book_route.js')
const app = express();
const port = 3000;
const cors = require('cors');

app.use(cors());
app.use(express.json());

try{
    
  mongoose.connect("mongodb://localhost:27017/bookstore");
  console.log("connected to mongodb");
}catch(error){
  console.log("error occurred");
}
app.use("/api",book_route);




 app.listen(port,()=>{
    console.log(`example app listening ${port}`)
 })