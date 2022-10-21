const router = require("express").Router();
let Feedback = require("../models/Feedback");

router.route("/add").post((req,res)=>{
    const id = req.body.id;
    const name = req.body.name;
    const feedback=req.body.feedback;
    
    
    const newFeedback =new Feedback({
        id,
        name,
        feedback,
        
    })
    newFeedback.save().then(()=>{
        res.status(201).send(newFeedback)
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/get").get((req,res)=>{
    Feedback.find().then((feedback)=>{
        res.json(feedback)
    }).catch((err)=>{
        console.log(err)
    })
})


router.route("/update/:id").put(async (req,res) => {
    let userId = req.params.id;
    const id = req.body.id;
    const name = req.body.name;
    const feedback=req.body.feedback;
    
  

    const updateFeedback = {
        id,
        name,
        feedback,
         
    }
    const update = await  Feedback.findByIdAndUpdate(userId, updateFeedback)
    .then(() => {
        res.status(200).send({status: "User updated"})
    }).catch((err) =>{
        console.log(err);
        res.status(500).send({status: "Error with updating data", error: err.messege});
    })
})

router.route("/delete/:id").delete(async (req,res) => {
    let userId = req.params.id;

    await Feedback.findByIdAndDelete(userId)
    .then(() =>{
        res.status(200).send({status: "User deleted"});
    }).catch((errr) => {
        console.log(err.messege);
        res.status(500).send({status: "Error with delete Appointment", error: err.messege});
    })
})

router.route("/get/:id").get(async (req, res) => {
    let userId = req.params.id;
    const user = await Feedback.findById(userId)
    .then((users) => {
        res.status(200).send({status: "user fetched", users})
    }).catch(() => {
        console.log(err.messege);
        res.status(500).send({status: "Error with get user",error: err.messege});
    })
})

module.exports = router;

