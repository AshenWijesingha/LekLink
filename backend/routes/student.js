const router = require('express').Router();

const Student = require('../models/student');

router.route("/").get(async(req,res)=>{
    await Student.find().then((Student) =>{
        res.status(200).send({status:"data received",studentData:Student})
    }).catch(err=>{
        res.status(400).send({status:err})
    })
})

router.route("/addStudent").post(async(req,res) =>{
    const {studentID,email,Name,Year,Batch,Day,Specialization} = req.body;

    const newStudent = new Student({
        studentID,
        email,
        Name,
        Year,
        Batch,
        Day,
        Specialization
    })

    await newStudent.save().then(() =>{
        res.status(200).send({status:"data Added"})
    }).catch((err) =>{
        res.status(400).send({status:err})

    })
})
router.route("/updateStudent").put(async(req,res) =>{
    const {studentID,email,Name,Year,Batch,Day,id,Specialization} = req.body;


    const editStudent = ({
        studentID,
        email,
        Name,
        Year,
        Batch,
        Day,
        Specialization
    })

    await Student.findByIdAndUpdate(id,editStudent).then(() =>{
        res.status(200).send({status:"data Updated"})
    }).catch((err) =>{
        res.status(400).send({status:err})

    })
})


router.route("/deleteStudent/:id").delete(async (req,res) =>{
    await Student.findByIdAndDelete(req.params.id).then(()=>{
        res.status(200).send({status:"data Deleted"})
    }).catch((err) =>{
        res.status(400).send({status:err})

    })
})

module.exports = router;