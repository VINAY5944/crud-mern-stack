const express=require('express');
const updateuser = require('../controller/updateuser');
const getuser = require('../controller/getuser');
const getuniqueuser = require('../controller/getuniqueuser');
const createuser = require('../controller/createuser');
const deleteuniqueuser = require('../controller/deleteuniqueuser');
const { getstudent, getstudenttotal, crtstudent, deletestudent, updateuniquestudent } = require('../controller/crudstudent');
const login = require('../controller/loginuser');
const token = require('../controller/token');
const protect = require('../middlewares/tokenverification');












const middleware=[protect]

const router=express.Router();

router.route('/getuser').get(getuser)
router.route('/getuniqueuser/:id').get(getuniqueuser)
router.route('/createuser').post(createuser)
router.route('/updateuser/:id').put(updateuser)
router.route('/deleteuser/:id').delete(deleteuniqueuser)
router.route('/login').post(login)
router.route('/token').post(token)
router.route('/verification').get(middleware,token)


////students crud


router.route('/getstudent/:id').get(getstudent)
router.route('/createstudent').post(crtstudent)
router.route('/deletestudent/:id').delete(deletestudent)
router.route('/updatestudent/:id').put(updateuniquestudent)
router.route('/getstudent').get(getstudenttotal)



module.exports=router