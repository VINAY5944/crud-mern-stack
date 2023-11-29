

const bcrypt=require('bcrypt');
const user = require('./userschema');
const jwt=require('jsonwebtoken')
const login=async(req,res)=>{

    const {email,password}=req.body;
    const userdata=await user.findOne({email});

    if(userdata  && (await bcrypt.compare(password,userdata.password))){


      

      res.json({

        Id:userdata._id,
        name:userdata.name,
        email:userdata.email,
        password:userdata.password,
        token:tokengenerate(userdata._id)
        });

    }

    else{

        res.json('failed')
    }
}


const tokengenerate=(id)=>{
    return jwt.sign({id},process.env.JWT_SECRET,{
    
    expiresIn:'1d'
    
    })
    
    
    
    }
module.exports=login