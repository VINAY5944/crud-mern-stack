
const bcrypt=require('bcrypt');
const user = require('./userschema');


const createuser=async(req,res)=>{
const {name,email,password}=req.body;
const salt=await bcrypt.genSalt(10);
const hashedpassword=await bcrypt.hash(password,salt)
const alreadyexist=await user.findOne({email}).exec();
console.log('alreadyexist');
if(alreadyexist){

res.json('user exist')
}


else{
const userdetail=await user.create({
name,email,password:hashedpassword


})
res.json(userdetail)
}
}

module.exports=createuser;






