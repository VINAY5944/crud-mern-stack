const student = require("./studentschema")




const crtstudent=async(req,res)=>{

    const{name,branch,rollno}=req.body
    const studentdetails=await student.create({
name,branch,rollno
    })
    res.json(studentdetails);
    }
    



    const deletestudent=async(req,res)=>{

 const parm=req.params.id;
 const delt= await student.findByIdAndRemove(parm);

 

 res.json("erg")
    }
    


    const getstudent=async(req,res)=>{

        const parm=req.params.id;
        const singlestudent= await student.findById(parm);
        console.log('found');
        res.json(singlestudent)
           }





           const getstudenttotal=async(req,res)=>{

         
            const totalstudent= await student.find();
            console.log('found');
            res.json(totalstudent)
               }



           const updateuniquestudent=async(req,res)=>{
            const parm=req.params.id
            const {name,branch,rollno}=req.body;
              const update=await user.findByIdAndUpdate(parm,{name,branch,rollno})
              
              res.json(update)
          }     




          module.exports={crtstudent,deletestudent,updateuniquestudent,getstudent,getstudenttotal}
