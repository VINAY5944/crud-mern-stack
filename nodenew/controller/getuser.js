const user = require("./userschema")




const getuser=async(req,res)=>{

   

    const getemp=await user.find()
res.json(getemp)
}

module.exports=getuser;