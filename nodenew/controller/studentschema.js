const mongoose=require('mongoose')

const usersch=mongoose.Schema({

name:{type:String},
branch:{type:String},
rollno:{type:Number},

}
);
const student=mongoose.model('use',usersch)
module.exports=student;