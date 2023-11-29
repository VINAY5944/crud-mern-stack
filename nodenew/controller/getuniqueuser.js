const user = require("./userschema")




const getuniqueuser=async(req,res)=>{

    const params=req.params.id

    const getemp=await user.findById(params)
res.json(getemp)
}

module.exports=getuniqueuser;