// Edit Component for update data

// Import Modules
import React, { useState, useEffect } from "react";
import axios from "axios";
//import AddEvent from "./AddEvent";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";



// Editevent Component
const UpdateLecture = (props) => {
	const {id} = useParams();
	const Navigate = useNavigate()
	const [lName, setlName] = useState("");
     const [year, setyear] = useState("");
     const [semester, setsemester] = useState("");
     const [module, setmodule] = useState("");
     const [moduleN, setmoduleN] = useState("");
     const [date, setdate] = useState("");
     const [time, settime] = useState("");
     const [mType, setmType] = useState("");
     const [mLink, setmLink] = useState("");
    const [formValues, setFormValues] = useState({
  lName:"",
  year:"",
  semester:"",  
  module:"",
  moduleN:"",
  date:"",
  time:"",
  mType:"",
  mLink:""
});
	
//onSubmit handler
const onSubmit = (lectureObject) => {
	axios
	.put(
		`http://localhost:8070/lecture/updateLECTURE/${id}`,
		lectureObject
	)
	.then((res) => {
		if (res.status === 200) {
		alert("lecture successfully updated");
		props.history.push("/AddLecture");
		} else Promise.reject();
	})
	.catch((err) => alert("Something went wrong"));
};

// Load data from server and reinitialize event form
useEffect(() => {
	axios
	.get(
    `http://localhost:8070/lecture/get/${id}`
		
	)
	.then((res) => {
		const {lName, year, semester, module, moduleN, date,  time, mType, mLink } = res.data.lecture;
		console.log(lName)
		console.log(year)
    console.log(semester)
		console.log(module)
    console.log(moduleN)
		console.log(date)
    console.log(time)
		console.log(mType)
    console.log(mLink)
		
	setlName(lName)
	setyear(year)
	setsemester(semester)
	setmodule(module)
  setmoduleN(moduleN)
  setdate(date)
	settime(time)
  setmType(mType)
  setmLink(mLink)
	})
	.catch((err) => console.log(err));
}, []);
function sendData(e){
	e.preventDefault();

	const newLecture = {

	      lName,
        year,
        semester,
        module,
        moduleN,
        date,
        time,
        mType,
        mLink
	}
   
	axios.put(`http://localhost:8070/lecture/updateLECTURE/${id}`, newLecture).then((res) =>{
	  alert("Lecture Updated" )
	 console.log(res.data)
	 Navigate('/allLECTURE-table')

	}).catch((err)=>{
	  alert(err)
	})

   }

// Return lecture form
return (

    
<div className=""><br/>
      <h2 className="p-3 mb-2 bg-secondary text-white">Update Lecture</h2>

      <br/>
      <br></br>
      

      <form className="l-include" onSubmit={sendData} >
              <div className="col-md-12">
                <br></br>
                <br></br>
              <label for="lName" className="form-label">Lecture Name</label>
          <input value={lName}type="text" className="form-control" maxLength={20} minLength={8} id="lName" placeholder=" Lecture Name" 

            onChange={(e)=>{
                     setlName(e.target.value);

                  } } required/>

                  
              </div>
              

              
              <div className="col-md-3">
              <label for="year" className="form-label">Year</label>
                  <select className="form-select" value={year} id="year" onChange={(e)=>{
                     setyear(e.target.value);

                  } } required>
                  <option selected disabled >Choose...</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  </select>
                  
              </div>


              <div className="col-md-3">
              <label for="semester" className="form-label">Semester</label>
                  <select className="form-select" value={semester} id="semester" onChange={(e)=>{

                       setsemester(e.target.value);

                  } } required>
                  <option selected disabled >Choose...</option>
                  <option>1</option>
                  <option>2</option>
          
                  </select>
                  
              </div>

              <div className="col-md-3">
              <label for="module" className="form-label">Module</label>
          <input value={module}type="text"  className="form-control" maxLength={6} minLength={6} id="module" placeholder="Enter module no"  
          
          onChange={(e)=>{
                      setmodule(e.target.value);

                  } } required/>

              </div>

              <div className="col-md-3">
              <label for="moduleN" className="form-label">Module Name</label>
          <input value={moduleN}type="text"  className="form-control" maxLength={20} minLength={2} id="moduleN" placeholder="Enter module name"  
          
          onChange={(e)=>{
                      setmoduleN(e.target.value);

                  } } required/>

              </div>

              <div className="col-md-3">
                  <label for="date" className="form-label">Date</label>
                  <input value={date}type="date" className="form-control" id="date" placeholder="date" onChange={(e)=>{

                     setdate(e.target.value);

                  } } required/>
              </div>

              <div className="col-md-3">
                  <label for="time" className="form-label">Time</label>
                  <input value={time}type="time" className="form-control" id="time" placeholder="Time" onChange={(e)=>{

                     settime(e.target.value);

                  } } required/>
              </div>

                 
              <div className="col-md-3">
              <label for="mType" className="form-label">Meeting Type</label>
                  <select className="form-select" value={mType} id="mType" onChange={(e)=>{
                     setmType(e.target.value);

                  } } required>
                  <option selected disabled >Choose...</option>
                  <option>Zoom</option>
                  <option>Teams</option>
                  
                  </select>
                  
              </div>

              <div className="col-md-3">
                  <label for="mLink" className="form-label">Meeting Link</label>
                  <input value={mLink}type="text" className="form-control" id="mLink" placeholder="Select Image" onChange={(e)=>{

                     setmLink(e.target.value);

                  } } required/>
              </div>

              
              
              <div className="col-12">
                  <button className="button2" type="submit" >
                  <a href="/" validate="true"style={{textDecoration:'none', color:'white'}}></a>
                    Update</button>
              </div>
              
           
      </form>

  </div>
);
};

// Export Editlecture Component
export default UpdateLecture;
