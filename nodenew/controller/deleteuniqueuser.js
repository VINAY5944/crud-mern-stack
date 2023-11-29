const user = require("./userschema")




const deleteuniqueuser=async(req,res)=>{

    const deleteid=req.params.id

    const getemp=await user.findByIdAndDelete(deleteid)
res.json('deleted')
}

module.exports=deleteuniqueuser;