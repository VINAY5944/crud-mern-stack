const express=require('express');
const connection = require('./config/conf');
const router = require('./routes/user');
const dotenv=require('dotenv')
const cors=require('cors')






connection()
const app=express()
app.use(express.json());
app.use(cors())
////cors should be before router
app.use("/",router)


dotenv.config()
const port=process.env.port||5000
app.listen(port,console.log(`server is running on port ${port}`));
