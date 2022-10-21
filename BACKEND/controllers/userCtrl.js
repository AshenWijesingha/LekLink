const Users = require('../models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const fetch = require('node-fetch')


const userCtrl = {
    
    register: async (req, res) => {
        try {
            const { firstname,idnumber,nic,email,position,department, password} = req.body
            
            if( !email || !password)
                return res.status(400).json({msg: "Please fill in all fields."})

            

            const user = await Users.findOne({email})
            if(user) return res.status(400).json({msg: "This email already exists."})

            if(password.length < 6)
                return res.status(400).json({msg: "Password must be at least 6 characters."})

            const passwordHash = await bcrypt.hash(password, 12)

            const newUser =await Users.create({
                firstname,idnumber,nic,email,position,department, password: passwordHash, isUpdate: false
            })

            
              
            console.log(newUser)
            
           

            res.json({msg: "Register Success! "})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
   
    login: async (req, res) => {
        try {
            const {email, password} = req.body
            const user = await Users.findOne({email})
            if(!user) return res.status(400).json({msg: "This email does not exist."})

            const isMatch = await bcrypt.compare(password, user.password)
            if(!isMatch) return res.status(400).json({msg: "Password is incorrect."})


            const refresh_token = createRefreshToken({id: user._id})
            const access_token = createAccessToken({id: user._id})
            res.cookie('refreshtoken', refresh_token, {
                httpOnly: true,
                path: '/user/refresh_token',
                maxAge: 7*24*60*60*1000 // 7 days
            })

            if(user.userType=="Admin")return res.status(200).json({
                Success : true,
                message : "Admin login success!",
                document : access_token ,
                messageDetails : "no error"
            })

            res.status(200).json({
                success : true,
                message : "Login success!",
                document : access_token ,
                messageDetails : "no error"
            });
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    }, 

    getUserInfor: async (req, res) => {
        try {
            const user = await Users.findById(req.user.id).select('-password')

            res.json(user)
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    
    updateUser: async (req, res) => {
        console.log("asas" , req.body);
        const user = await Users.findById(req.body.user._id);
        console.log("user" , user);
        if (user) {
            user.firstname = req.body.user.firstname,
            user.idnumber = req.body.user.idnumber,
            user.nic = req.body.user.nic,
            user.email = req.body.user.email,
            user.position = req.body.user.position,
            user.department = req.body.user.department,
            user.image=req.body.user.image,
            user.userType=req.body.userType,
            user.isUpdate = true

            

            const updatedUser = await user.save();
            res.send(updatedUser);
        } else {
            res.status(404).send({ message: 'User not found' });
        }
    },

    deleteUser: async (req, res) => {
        try {
            await Users.findByIdAndDelete(req.params.id)

            res.json({msg: "Deleted Success!"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },

    getAccessToken: (req, res) => {
        try {
            const rf_token = req.cookies.refreshtoken
            if(!rf_token) return res.status(400).json({msg: "Please login now!"})

            jwt.verify(rf_token, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
                if(err) return res.status(400).json({msg: "Please login now!"})

                const access_token = createAccessToken({id: user.id})
                res.json({access_token})
            })
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },

    
}

const createActivationToken = (payload) => {
    return jwt.sign(payload, process.env.ACTIVATION_TOKEN_SECRET, {expiresIn: '5m'})
}

const createAccessToken = (payload) => {
    return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '15m'})
}

const createRefreshToken = (payload) => {
    return jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, {expiresIn: '7d'})
}

module.exports = userCtrl;