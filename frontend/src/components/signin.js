import React,{useState} from "react";
import './signin.css';
import axios from "axios";
import {showErrMsg, showSuccessMsg} from './Notification'
import {isEmpty, isEmail, isLength, isMatch} from './validation'

const initialState = {
  name: '',
  firstname: '',
  idnumber: '',
  nic: '',
  email: '',
  password: '',
  cf_password: '',
  position: '',
  depaerment: '',
  err: '',
  success: ''
}

 function Signin() {

  const [user, setUser] = useState(initialState)

    const {name, firstname, idnumber, nic, email, position, department, password,cf_password, err, success} = user

    const handleChangeInput = e => {
        const {name, value} = e.target
        setUser({...user, [name]:value, err: '', success: ''})
    }


    const handleSubmit = async e => {
        e.preventDefault()
        if(isEmpty(email) || isEmpty(password) || isEmpty(cf_password))
                return setUser({...user, err: "Please fill in all fields.", success: ''})

        if(!isEmail(email))
            return setUser({...user, err: "Invalid emails.", success: ''})

        if(isLength(password))
            return setUser({...user, err: "Password must be at least 6 characters.", success: ''})
        
        if(!isMatch(password, cf_password))
            return setUser({...user, err: "Password did not match.", success: ''})

        try {
            const res = await axios.post('http://localhost:8070/user/register', {
                name, firstname, idnumber, nic, email, position, department, password,
            })

            setUser({...user, err: '', success: res.data.msg})
        } catch (err) {
            err.response.data.msg && 
            setUser({...user, err: err.response.data.msg, success: ''})
        }

  }


    return (

    <div className="signin">
      {err && showErrMsg(err)}
      {success && showSuccessMsg(success)}
   <form onSubmit={handleSubmit}>
      <div className="main">

        
       <div className='sub-main'>
         <div>
           
             <div className='container-image'>
               
  
            
             
  
          </div>
           <div className="box">
             <h1>Sign Up</h1><br/>
             
             <div> 
             <input type="text" className="signup-input" placeholder="Enter Name" id="firstname"
                    value={firstname} name="firstname" onChange={handleChangeInput} />
             </div>

             <div className='first-input'> 
             <input type="text" className="signup-input" placeholder="Enter ID Number" maxLength={10} minLength={10} id="idnumber"
                    value={idnumber} name="idnumber" onChange={handleChangeInput} />
             </div>

             <div className='second-input'> 
             <input type="text" className="signup-input" placeholder="Enter NIC" maxLength={10} minLength={10} id="nic"
                    value={nic} name="nic" onChange={handleChangeInput} />
             </div>
           
             <div className='third-input'>
             <input type="email" className="signup-input" placeholder="Enter email address" id="email"
                    value={email} name="email" onChange={handleChangeInput} />
             </div>

             

  
             <div className='fifth-input'>
             <input type="password" className="signup-input" placeholder="Enter password" id="password"
                    value={password} name="password" onChange={handleChangeInput} /> 
             </div>


             <div className='sixth-input'>
             <input type="password" className="signup-input" placeholder="Confirm password" id="cf_password"
                    value={cf_password} name="cf_password" onChange={handleChangeInput} />
             </div>

             
             <div className='seventh-input'>
                <select id="position" className='input-seven' value={position} name="position" onChange={handleChangeInput} >

                  <option selected disabled >Choose Position...</option>
                  <option>Assistant Lecturer</option>
                  <option>Senior Lecturer</option>
                  <option>Instructor</option>
                  <option>Tutor</option>
                </select>  
             </div>


             <div className='eighth-input'>
                <select id="department" className='input-seven' value={department} name="department" onChange={handleChangeInput} >

                  <option selected disabled >Choose Department...</option>
                  <option>Computing</option>
                  <option>Business</option>
                  <option>Engineering</option>
                  <option>Medical</option>
                  <option>Architecture</option>
                </select>  
             </div>

             
               <button className="btn4" >SignUp</button>
             
             
             
             <p className='link'>
                <a href='/log'>Login</a>
             </p>
           </div>
         </div>
  
       </div>
      </div>
    </form>
    </div>
    );
  }
 
  
export default Signin
