import './profileUpdate.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {isLength, isMatch} from './validation'
import {showSuccessMsg, showErrMsg} from './Notification'
import {fetchUser} from '../redux/action/authAction'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Profile(){

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
<div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">

	
		
			



<img src="https://bootdey.com/img/Content/avatar/avatar7.png" className="ava5" alt="avatar" border-radius="100" />

<h6>Change Profile Photo</h6>      

<input type="file" className="form-control" onChange={(e)=>{ setUserData({...userData , image: e.target.value})}}/>


				<br/>
				<h3 className="user-name" style={{color:"#0B2EF1"}}>{userData?.firstname}</h3>
				<h4 className="user-name" style={{color:"#0B2EF1"}}>{userData?.idnumber}</h4>
			
				<a href = "/allRECORDING-table"> <button type="button" id="submit" name="submit" className="btn-btns" >Manage Lecture Recordings</button> </a>
				<a href = "#"> <button type="button" id="submit" name="submit" className="btn-btns" >Manage Lecture Links</button> </a>
				<a href = "/reportRecording"> <button type="button" id="submit" name="submit" className="btn-btns" >Generate Reports</button> </a>


</div>
<div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
<div className="card h-101">
	
		<div className="row gutters">
			<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
				<h1 className="mb-2 text-primary">Profile</h1><br/>
			</div>
			<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<div className="form-group">
					<h4>Full Name :</h4>
					<h4 className="user-name" style={{color:"#0B2EF1"}}>{userData?.firstname}</h4><br/>
					
				</div>
			</div>

			<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<div className="form-group">
					<h4>ID Number :</h4>
					<h4 className="user-name" style={{color:"#0B2EF1"}}>{userData?.idnumber}</h4><br/>
				</div>
			</div>

			<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<div className="form-group">
					<h4>NIC :</h4>
					<h4 className="user-name" style={{color:"#0B2EF1"}}>{userData?.nic}</h4><br/>
				</div>
			</div>

			<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<div className="form-group">
					<h4>Email :</h4>
					<h4 className="user-name" style={{color:"#0B2EF1"}}>{userData?.email}</h4><br/>
				</div>
			</div>
			
		    

			<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
			  <div className="form-group">
                  <h4>Position :</h4>
                  <h4 className="user-name" style={{color:"#0B2EF1"}}>{userData?.position}</h4><br/>
                  
			  </div>  
            </div>

			<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
			  <div className="form-group">
                  <h4>Department :</h4>
                  <h4 className="user-name" style={{color:"#0B2EF1"}}>{userData?.department}</h4><br/>
                  
			  </div>  
            </div>
            </div>
			
		</div>
		<div className="row gutters">
			<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
				<div className="text-right">
					<button type="button" id="submit" name="submit" className="btn btn-secondary" onClick={() => deleteUser()}>Delete</button>
					<a href='/UpdateProfile'><button type="button" id="submit" name="submit" className="btn btn-success" onClick={() => updateUser()}>Update</button></a>
				</div>
			</div>
		</div>
	</div>
</div>
</div>

    
    )
  }

  export default Profile