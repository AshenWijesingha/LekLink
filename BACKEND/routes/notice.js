const router = require("express").Router();
let Notice = require("../models/notice");

router.route("/addNOTICE").post((req,res)=>{

    const lName = req.body.lName;
    const mName = req.body.mName;
    const mNo = req.body.mNo;
    const date = req.body.date;
    const message = req.body.message;
  
    const newNotice = new Notice({
      lName,
      mName,
      mNo,
      date,
      message
    })

    newNotice.save().then(()=>{
        res.json("Notice Added") 
    }).catch((err)=>{
        console.log(err);
    })

})

router.route("/").get((req,res)=>{
    Notice.find().then((notices)=>{
        res.json(notices)
    }).catch((err)=>{
        console.log(err)
    })
})
router.route("/updateNOTICE/:id").put(async (req,res)=>{
    let userID = req.params.id;
    const {lName,mName,mNo,date,message}= req.body;

    const updateNotice = {

      lName,
      mName,
      mNo,
      date,
      message
    }
    const update = await Notice.findByIdAndUpdate(userID, updateNotice)
    .then(()=>{
        res.status(200).send({status:"notice updated"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with updating data" , error: err.message});
         
    })
        
})

router.route("/delete/:id").delete(async (req, res)=>{
    let userID = req.params.id;

    await Notice.findByIdAndDelete(userID)
    .then(() => {
        res.status(200).send({status: "notice deleted"});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status:"Error with delete user", error: err.message});
    })
})

router.route("/get/:id").get(async (req, res)=>{
    let userID = req.params.id;

    const user = await Notice.findById(userID)
    .then((notice) => {
        res.status(200).send({status: "Notice fetched",notice});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status:"Error with fetche booking", error: err.message});
    })
})

module.exports = router;
