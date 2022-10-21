// Edit Component for update data

// Import Modules
import React, { useState, useEffect } from "react";
import axios from "axios";
//import AddRecording from "./AddRecording";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

// Editevent Component
const UpdateRecording = (props) => {
	const {id} = useParams();
	const Navigate = useNavigate()
	   const [recordingName, setrecordingName] = useState("");
     const [moduleName, setmoduleName] = useState("");
     const [moduleCode, setmoduleCode] = useState("");
     const [lecturerName, setlecturerName] = useState("");
     const [category, setcategory] = useState("");
     const [date, setdate] = useState("");
     const [video, setvideo] = useState("");
    const [formValues, setFormValues] = useState({
  recordingName:"",
  moduleName:"",
  moduleCode:"",  
  lecturerName:"",
  category:"",
  date:"",
  video:""
});
	
//onSubmit handler
const onSubmit = (recordingObject) => {
	axios
	.put(
		`http://localhost:8070/recording/updateRECORDING/${id}`,
		recordingObject
	)
	.then((res) => {
		if (res.status === 200) {
		alert("recording successfully updated");
		props.history.push("/AddRecording");
		} else Promise.reject();
	})
	.catch((err) => alert("Something went wrong"));
};

// Load data from server and reinitialize recording form
useEffect(() => {
	axios
	.get(
    `http://localhost:8070/recording/get/${id}`
		
	)
	.then((res) => {
		const {recordingName,moduleName, moduleCode,  lecturerName, category, date, video } = res.data.recording;
		console.log(recordingName)
		console.log(moduleName)
		console.log(moduleCode)
		console.log(lecturerName)
    console.log(category)
		console.log(date)
    console.log(video)
		//setFormValues({...formValues,recordingName, moduleName, moduleCode,   lecturerName, category,  date, video  });
	setrecordingName(recordingName)
	setmoduleName(moduleName)
	setmoduleCode(moduleCode)
	setlecturerName(lecturerName)
  setcategory(category)
	setdate(date)
  setvideo(video)
	})
	.catch((err) => console.log(err));
}, []);
function sendData(e){
	e.preventDefault();

	const newrecording = {

	  recordingName,
	  moduleName,
	  moduleCode,  
	  lecturerName,
    category,
	  date,
    video
	}
   
	axios.put(`http://localhost:8070/recording/updateRECORDING/${id}`, newrecording).then((res) =>{
	  alert("Recording Updated" )
	 console.log(res.data)
	 Navigate('/allRECORDING-table')

	}).catch((err)=>{
	  alert(err)
	})

   }

// Return recording form
return (
<div className="container_updateRec" style={{marginLeft:"0.5cm"}}><br/>
      <h2>Update Lecture Recordings</h2>

      <br/>

      <form className="row g-3 needs-validation" onSubmit={sendData} >
              <div className="col-md-12">
              <label for="recordingName" className="form-label">Recording Name</label>
          <input value={recordingName}type="text" className="form-control" id="recordingName" placeholder=" Recording Name" 

            onChange={(e)=>{
                     setrecordingName(e.target.value);

                  } } required/>

                  
              </div>

              
              <div className="col-md-6">
              <label for="validationCustom04" className="form-label">Module Name</label>
          <input value={moduleName}type="text" className="form-control" id="moduleName" placeholder=" Module Name" 

            onChange={(e)=>{
                     setmoduleName(e.target.value);

                  } } required/>

                  
              </div>

              <div className="col-md-6">
              <label for="validationCustom04" className="form-label">Module Code</label>              
          <input value={moduleCode}type="text" className="form-control" id="moduleCode" placeholder=" Module Code" 

            onChange={(e)=>{
                     setmoduleCode(e.target.value);

                  } } required/>

                  
              </div>

              <div className="col-md-6">
              <label for="amount" className="form-label">Lecturer Name</label>
          <input value={lecturerName}type="text"  className="form-control" id="lecturerName" placeholder="Enter Lecturer Name"  
          
          onChange={(e)=>{
                      setlecturerName(e.target.value);

                  } } required/>

              </div>

              <div className="col-md-6">
              <label for="category" className="form-label">Category</label>
                <select className="form-select" value={category} id="validationCustom04" onChange={(e)=>{

                      setcategory(e.target.value);

                  } } required>
                  <option selected disabled >Choose...</option>
                  <option>Lecture</option>
                  <option>Lab</option>
                  <option>Tutorial</option>
                </select>

              </div>

              <div className="col-md-12">
              <label for="date" className="form-label">Date</label>
          <input value={date}type="date"  className="form-control" id="date" placeholder="Enter Date" 
          
          onChange={(e)=>{
                      setdate(e.target.value);

                  } } required/>
                  

              </div>

              <div className="col-md-12">
                  <label for="validationCustom01" className="form-label">Video</label>
                  <input value={video} type="text" className="form-control" id="validationCustom01" placeholder="Enter here..." onChange={(e)=>{

                      setvideo(e.target.value);

                  } } required/>
                  
                  
              </div>

              
              

              <div className="col-3">
                  <button className="btn btn-primary" type="submit" >
                  <a href="/" validate="true"style={{textDecoration:'none', color:'white'}}></a>
                    Update</button>
              </div>
      </form>

  </div>
);
};

// Export Editrecording Component
export default UpdateRecording;
