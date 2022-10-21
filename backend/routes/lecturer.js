const router = require('express').Router();

const Lecturer = require('../models/lecturer');

router.route("/").get(async(req,res)=>{
    await Lecturer.find().then((Lecturer) =>{
        res.status(200).send({status:"data received",data:Lecturer})
    }).catch(err=>{
        res.status(400).send({status:err})
    })
})

router.route("/addLecturer").post(async(req,res) =>{
    const {email,Name,Year,ContactNo,ModuleName,Modulecode,Posission} = req.body;

    const newLecturer = new Lecturer({
        email,
        Name,
        Year,
        ContactNo,
        ModuleName,
        Modulecode,
        Posission,
    })

    await newLecturer.save().then(() =>{
        res.status(200).send({status:"data Added"})
    }).catch((err) =>{
        res.status(400).send({status:err})

    })
})
router.route("/updateLecturer").put(async(req,res) =>{
    const {email,Name,Year,ContactNo,ModuleName,Modulecode,Posission,id} = req.body;


    const editLecturer = ({
        email,
        Name,
        Year,
        ContactNo,
        ModuleName,
        Modulecode,
        Posission,
    })

    console.log(editLecturer);

    await Lecturer.findByIdAndUpdate(id,editLecturer).then(() =>{
        res.status(200).send({status:"data Updated"})
    }).catch((err) =>{
        res.status(400).send({status:err})

    })
})


router.route("/deleteLecturer/:id").delete(async (req,res) =>{
    await Lecturer.findByIdAndDelete(req.params.id).then(()=>{
        res.status(200).send({status:"data Deleted"})
    }).catch((err) =>{
        res.status(400).send({status:err})

    })
})

module.exports = router;