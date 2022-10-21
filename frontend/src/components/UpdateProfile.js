//import './profileUpdate.css';
import './Update.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {isLength, isMatch} from './validation'
import {showSuccessMsg, showErrMsg} from './Notification'
import {fetchUser} from '../redux/action/authAction'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function UpdateProfile(){

	const[userData , setUserData] = useState(null);
	let navigate = useNavigate()
	useEffect(()=> {
		const token = sessionStorage.getItem('token')
		async function getUser() {
			const userdata =await fetchUser(token);
			setUserData(userdata.data)
		}
		getUser();
	}, [])


	const updateUser = async () => {
		const res = await axios.put('http://localhost:8070/user/update' ,{user: userData}, {
			headers: {Authorization: sessionStorage.getItem('token')}
		})
		if(res?.status == 200){
			toast.success('User Updated Successfully', {
				position: "top-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				});
				setTimeout(() => {
					navigate('/profile')
				}, 3000);
		}else{
			toast.error('User Update Failed', {
				position: "top-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				});
		}
		
	}

	const deleteUser = async () => {
		const res = await axios.delete(`http://localhost:8070/user/delete/${userData._id}` , {
			headers: {Authorization: sessionStorage.getItem('token')}
		})
		if(res?.data.msg == "Deleted Success!"){
			toast.error('User Deleted', {
				position: "top-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				});
			setTimeout(() => {
				navigate('/login')
			}, 3000);
		}else{
			toast.error('User Delete Failed', {
				position: "top-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				});
		}
	}

	
 return (
      <div className="container5">
		  <ToastContainer />
<div className="row gutters">

	
		
			




<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12" style={{color:"#E1DEE0 "}}>
<div className="card">
	
		<div className="row gutters" style={{color:"#000000"}}>
			<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
				<h2 className="mb-2 text-primary">Update Profile</h2><br/>
			</div>
			<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<div className="form-group">
					<label for="fullName">Full Name</label>
					<input type="text" className="form-control" id="fullName" placeholder="Enter full name"  value={userData?.firstname} onChange={(e)=>{ setUserData({...userData , firstname: e.target.value})}}  />
				</div>
			</div>

			<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<div className="form-group">
					<label for="idnumber">ID Number</label>
					<input type="text" className="form-control" maxLength={10} minLength={10} id="idnumber" placeholder="Enter ID Number"  value={userData?.idnumber} onChange={(e)=>{ setUserData({...userData , idnumber: e.target.value})}}  />
				</div>
			</div>

			<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<div className="form-group">
					<label for="nic">NIC</label>
					<input type="text" className="form-control" minLength={10} maxLength={10} id="nic" placeholder="Enter NIC"  value={userData?.nic} onChange={(e)=>{ setUserData({...userData , nic: e.target.value})}}  />
				</div>
			</div>

			<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<div className="form-group">
					<label for="eMail">Email</label>
					<input type="email" className="form-control" id="eMail" placeholder="Enter email ID" value={userData?.email} onChange={(e)=>{ setUserData({...userData , email: e.target.value})}} />
				</div>
			</div>
			
		    

			<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
			  <div className="form-group">
                  <label for="position">Position</label>
                  <select className="form-control" id="position" style={{backgroundColor:"#E1DEE0"}} value={userData?.position} onChange={(e)=>{

                    setUserData({...userData , position: e.target.value})   

                  } } required>
                  <option selected disabled >Choose Position...</option>
                  <option>Assistant Lecturer</option>
                  <option>Senior Lecturer</option>
                  <option>Instructor</option>
                  <option>Tutor</option>
                  </select>
			  </div>  
            </div>

			<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
			  <div className="form-group">
                  <label for="department">Department</label>
                  <select className="form-control" id="department" style={{backgroundColor:"#E1DEE0"}} value={userData?.department} onChange={(e)=>{

                    setUserData({...userData , department: e.target.value})   

                  } } required>
                  <option selected disabled >Choose department...</option>
                  <option>Computing</option>
                  <option>Business</option>
                  <option>Engineering</option>
				  <option>Medical</option>
                  <option>Architecture</option>
                  </select>
			  </div>  
            </div>
		</div>
			
		</div>
		<div className="row gutters">
			<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
				<div className="text-right">
					
					<button type="button" id="submit" name="submit" className="btn btn-success" onClick={() => updateUser()}>Update</button>
				</div>
			</div>
		</div>
	</div>
</div>
</div>

    
    )
  }

  export default UpdateProfile
