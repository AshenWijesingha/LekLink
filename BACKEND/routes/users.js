
const userCtrl = require('../controllers/userCtrl')
const auth = require('../middleware/auth')
const router = require("express").Router();

let User = require("../models/user");

router.route("/add").post((req,res)=>{
   
    const firstname = req.body.firstname;
    const idnumber = req.body.idnumber;
    const nic = req.body.nic;
    const email = req.body.email;
    const position = req.body.position;
    const department = req.body.department;
    const password = req.body.password;


   
     const newUser = new User({
        
        
        firstname,
        idnumber,
        nic,
        email,
        position,
        department,
        password,

    })

    newUser.save().then(()=>{
        res.json("user added")
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/").get((req,res)=>{
    User.find().then((users)=>{
       res.json(users)
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/update/:id").put(async(req,res)=>{
    let userId = req.params.id;
    const {firstname,idnumber,nic,email,position,department,userType} = req.body;

    const updateUser = {
        firstname,
        
        idnumber,
        nic,
        email,
        position,
        department,
        userType,
        
    }

    const update = await User.findByIdAndUpdate(userId,updateUser).then(()=>{
        res.status(200).send({status: "user updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error with updating data", error:err.message});
    })

    
})

router.route("/delet/:id").delete(async(req,res)=>{
    let userId = req.params.id;

    await User.findByIdAndDelete(userId).then(()=>{
        res.status(200).send({status: "user deleted"});
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error with deleting data", error:err.message});
    })
})

router.route("/get/:id").get(async(req,res)=>{
    let userId = req.params.id;
    const user = await User.findById(userId).then((user)=>{
        res.status(200).send({status: "user fetched",user})
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error with get user", error:err.message});
    })
})


router.post('/refresh_token', userCtrl.getAccessToken)

router.post('/register', userCtrl.register)

router.post('/login', userCtrl.login)

router.get('/infor', auth, userCtrl.getUserInfor)

router.put('/update', auth, userCtrl.updateUser)

router.delete('/delete/:id', auth,  userCtrl.deleteUser)








module.exports = router;