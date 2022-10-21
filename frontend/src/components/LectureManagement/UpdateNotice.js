// Edit Component for update data

// Import Modules
import React, { useState, useEffect } from "react";
import axios from "axios";
//import AddEvent from "./AddEvent";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";



// Editevent Component
const UpdateNotice = (props) => {
	const {id} = useParams();
	const Navigate = useNavigate()
	const [lName, setlName] = useState("");
     const [mName, setmName] = useState("");
     const [mNo, setmNo] = useState("");
     const [date, setdate] = useState("");
     const [message, setmessage] = useState("");
    const [formValues, setFormValues] = useState({
  lName:"",
  mName:"",
  mNo:"",  
  date:"",
  message:""
});
	
//onSubmit handler
const onSubmit = (noticeObject) => {
	axios
	.put(
		`http://localhost:8070/notice/updateNOTICE/${id}`,
		noticeObject
	)
	.then((res) => {
		if (res.status === 200) {
		alert("notice successfully updated");
		props.history.push("/AddNotice");
		} else Promise.reject();
	})
	.catch((err) => alert("Something went wrong"));
};

// Load data from server and reinitialize event form
useEffect(() => {
	axios
	.get(
    `http://localhost:8070/notice/get/${id}`
		
	)
	.then((res) => {
		const {lName, mName, mNo, date, message } = res.data.notice;
		console.log(lName)
		console.log(mName)
    console.log(mNo)
		console.log(date)
    console.log(message)
		
		
	setlName(lName)
	setmName(mName)
	setmNo(mNo)
	setdate(date)
  setmessage(message)
  
	})
	.catch((err) => console.log(err));
}, []);
function sendData(e){
	e.preventDefault();

	const newNotice = {

	      lName,
        mName,
        mNo,
        date,
        message
	}
   
	axios.put(`http://localhost:8070/notice/updateNOTICE/${id}`, newNotice).then((res) =>{
	  alert("Notice Updated" )
	 console.log(res.data)
	 Navigate('/allNOTICE-table')

	}).catch((err)=>{
	  alert(err)
	})

   }

// Return lecture form
return (

    
<div className=""><br/>
      <h2 className="p-3 mb-2 bg-secondary text-white">Update Notice</h2>

      <br/>
      <br></br>
      

      <form className="l-include" onSubmit={sendData} >
              <div className="col-md-12">
                <br></br>
                <br></br>
              <label for="lName" className="form-label">Lecture Name</label>
          <input value={lName}type="text" className="form-control"maxLength={20} minLength={8} id="lName" placeholder=" Lecture Name" 

            onChange={(e)=>{
                     setlName(e.target.value);

                  } } required/>

                  
              </div>
              

             



              <div className="col-md-3">
              <label for="mName" className="form-label">Module Name</label>
          <input value={mName}type="text"  className="form-control" maxLength={20} minLength={2}  id="mName" placeholder="Enter amount"  
          
          onChange={(e)=>{
                      setmName(e.target.value);

                  } } required/>

              </div>

              <div className="col-md-3">
              <label for="mNo" className="form-label">Module No</label>
          <input value={mNo}type="text"  className="form-control" maxLength={20} minLength={6} id="mNo" placeholder="Enter module name"  
          
          onChange={(e)=>{
                      setmNo(e.target.value);

                  } } required/>

              </div>

              <div className="col-md-3">
                  <label for="date" className="form-label">Date</label>
                  <input value={date}type="date" className="form-control" id="date" placeholder="date" onChange={(e)=>{

                     setdate(e.target.value);

                  } } required/>
              </div>

              

            
              <div className="col-md-8">
                  <label for="validationCustom01" className="form-label">Message</label>
                  <textarea className="form-control"  maxLength={1000} minLength={5} id="validationCustom01" rows="4" cols="100" placeholder="Enter here..." onChange={(e)=>{

                      setmessage(e.target.value);

                  } } required>
                  </textarea>
                  
              </div>

              
              
              <div className="col-12">
                  <button className="button2" type="submit" >
                  <a href="/N" validate="true"style={{textDecoration:'none', color:'white'}}></a>
                    Update</button>
              </div>
              
           
      </form>

  </div>
);
};

// Export Editlecture Component
export default UpdateNotice;
