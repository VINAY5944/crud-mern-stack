const user = require("./userschema")




const updateuser=async(req,res)=>{
 
    const params=req.params.id
   const {name,email,password}=req.body
    const getemp=await user.findByIdAndUpdate(params,{name,email,password})
res.json(getemp)
}

module.exports=updateuser;