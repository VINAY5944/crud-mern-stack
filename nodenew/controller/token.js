
const jwt=require('jsonwebtoken');
const user = require('./userschema');
const bcrypt=require('bcrypt')

const token= async(req,res)=>{

const {name,email,password}=req.body;


const salt=await bcrypt.genSalt(10);
const hashedpassword=await bcrypt.hash(password,salt)
const userdata=await user.findOne({email});


if (userdata){

res.json('already exist')

}

else{

const userdetail=await user.create({

name,email,password:hashedpassword

})

res.json({

Id:userdetail._id,
name:userdetail.name,
email:userdetail.email,
password:userdetail.password,
token:tokengenerate(userdetail._id)
})

}}


const tokengenerate=(id)=>{
return jwt.sign({id},process.env.JWT_SECRET,{

expiresIn:'1d'

})



}

module.exports=token
