const router = require("express").Router();
let Student = require("../models/Student");

router.route("/").post((req,res)=>{
    const name = req.body.name;
    const email=req.body.email;
    const password = req.body.password;
    const cpassword = req.body.cpassword;
    const contact = req.body.contact;
    const year = req.body.year;
    const semester = req.body.semester;
    const batch = req.body.batch;
    const nic = req.body.nic;

    
    const newUser =new Student({
        name,
        email,
        cpassword,
        password,
        contact,
        year,
        semester,
        batch,
        nic
    })
    newUser.save().then(()=>{
        res.status(201).send(newUser)
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/").get((req,res)=>{
    Student.find().then((user)=>{
        res.json(user)
    }).catch((err)=>{
        console.log(err)
    })
})


router.route("/:id").put(async (req,res) => {
    let userId = req.params.id;
    const name = req.body.name;
    const email=req.body.email;
    const password = req.body.password;
    const cpassword = req.body.cpassword;
    const contact = req.body.contact;
    const year = req.body.year;
    const semester = req.body.semester;
    const batch = req.body.batch;
    const nic = req.body.nic;
  

    const updateUSer = {
        name,
        email,
        password,
        contact,
        year,
        semester,
        batch,
        cpassword,
        nic
    }
    const update = await  Student.findByIdAndUpdate(userId, updateUSer)
    .then(() => {
        res.status(200).send({status: "User updated"})
    }).catch((err) =>{
        console.log(err);
        res.status(500).send({status: "Error with updating data", error: err.messege});
    })
})

router.route("/:id").delete(async (req,res) => {
    let userId = req.params.id;

    await Student.findByIdAndDelete(userId)
    .then(() =>{
        res.status(200).send({status: "User deleted"});
    }).catch((errr) => {
        console.log(err.messege);
        res.status(500).send({status: "Error with delete Appointment", error: err.messege});
    })
})

router.route("/:id").get(async (req, res) => {
    let userId = req.params.id;
    const user = await Student.findById(userId)
    .then((users) => {
        res.status(200).send({status: "user fetched", users})
    }).catch(() => {
        console.log(err.messege);
        res.status(500).send({status: "Error with get user",error: err.messege});
    })
})

module.exports = router;

