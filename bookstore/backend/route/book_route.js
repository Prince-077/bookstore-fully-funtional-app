const express = require ('express');
const bookModel = require('../model/book_model.js');
const userModel = require('../model/user.model.js');
const router = express.Router();
const bcryptjs = require('bcryptjs');

router.get("/", async(req,res)=>{
    try{
    const book =  await bookModel.find();
    res.status(200).json(book);
    }
    catch(e){
        console.log(e);
    }
})

router.post('/signup',async (req,res)=>{
    const {fullname,email,password} = req.body;
    const backuser =await userModel.findOne({email});
    if(backuser){
        res.status(400).json({message:"user already exist"});
    }
    else{
        const hashpassword =  await bcryptjs.hash(password,10);
        const user =  await new userModel({
        fullname:fullname,
        email:email,
        password: hashpassword
    })
    await user.save();
    res.status(200).json({message:"user created sucessfully"});

}
})

router.post('/login', async (req,res)=>{
    try{
        const {email,password} = req.body;
        const user =  await userModel.findOne({email});
        if(!user){
            res.status(400).json({message:"user not found"});
        }
        const match =  await bcryptjs.compare(password, user.password);
        match
             ? res.status(200).json({message:"user sucessfully logdin", user})
              
             : res.status(400).json({message:"password not exists"}) 
    }
        catch(err){console.log("occured:",err)}
    
        
    })


module.exports = router;