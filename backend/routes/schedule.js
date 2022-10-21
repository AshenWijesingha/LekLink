const router = require('express').Router();

const Schedules = require('../models/schedule');

router.route("/").get(async(req,res)=>{
    await Schedules.find().then((Schedules) =>{
        res.status(200).send({status:"data received",TimeTable:Schedules})
    }).catch(err=>{
        res.status(400).send({status:err})
    })
})

router.route("/viewToday").get(async(req,res)=>{

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = yyyy+ '-' + mm + '-' + dd;
    await Schedules.find(
        {
            Date :{$gte: new Date(`${today}T00:00:00.000Z`), $lt: new Date(`${today}T12:00:00.000Z`)}
        }
    ).then((Schedules) =>{
        res.status(200).send({status:"data received",schedulesToday:Schedules})
    }).catch(err=>{
        res.status(400).send({status:err})
    })
})

router.route("/addSchedules").post(async(req,res) =>{
    const {Topics,Year,Semester,Module,Date,Time,MeetingType,MeetingLink} = req.body;


    const newSchedules = new Schedules({
        Topic:Topics,
        Semester,
        Year,
        Module,
        Date,
        Time,
        MeetingType,
        MeetingLink
    })

    console.log(newSchedules)

    await newSchedules.save().then(() =>{
        res.status(200).send({status:"data Added"})
    }).catch((err) =>{
        res.status(400).send({status:err})

    })
})
router.route("/updateSchedules").put(async(req,res) =>{
    const {Topic,Year,Semester,Module,Date,Time,MeetingType,MeetingLink,id} = req.body;


    const editSchedules = ({
        Topic,
        Semester,
        Year,
        Module,
        Date,
        Time,
        MeetingType,
        MeetingLink
    })

    await Schedules.findByIdAndUpdate(id,editSchedules).then(() =>{
        res.status(200).send({status:"data Updated"})
    }).catch((err) =>{
        res.status(400).send({status:err})

    })
})


router.route("/deleteSchedules/:id").delete(async (req,res) =>{
    await Schedules.findByIdAndDelete(req.params.id).then(()=>{
        res.status(200).send({status:"data Deleted"})
    }).catch((err) =>{
        res.status(400).send({status:err})

    })
})

module.exports = router;