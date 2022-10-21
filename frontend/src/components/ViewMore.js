// Edit Component for update data

// Import Modules
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
//import './test.css'


//import AddRecordings from "./AddRecordings";

// Editrecording Component
const Viewmore= (props) => {

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

    
	


// Load data from server and reinitialize recording form  
useEffect(() => {
	axios
	.get(
    `http://localhost:8070/recording/get/${id}`
    
    
	)
	.then((res) => {
		const {recordingName, moduleName, moduleCode, lecturerName, category, date, video} = res.data.recording;
		console.log(recordingName)
		console.log(moduleName)
		console.log(moduleCode)
		console.log(lecturerName)
        console.log(category)
        console.log(date)
        console.log(video)
		//setFormValues({...formValues,recordingName, moduleName, moduleCode, lecturerName, category, date, video });
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

	const newRecording = {

        recordingName,
        moduleName,
        moduleCode,
        lecturerName,
        category,
        date,
        video
	}
    Navigate('/')
	
   }
// Return recording form
return (
<div className="container_first">
  <hr/>
<div className="container_viewmore" style={{marginLeft:"8.5cm"}}>
    

<div className="row_viewmore">   

    <div className="col-md-3">
    <div className="video_viewmore">
        
        </div>
        <div className="text-center">
            
        </div>
    </div>
<div className="col-md-9 personal-info">
       


       

        <form className="form_viewmore" onSubmit={sendData} >
            <br/><br/>
               
                <h4 className="user-namee">Recording Name: {recordingName}</h4><br/>
                <h4 className="user-namee">Module Name: {moduleName}</h4><br/>
                <h4 className="user-namee">Module Code: {moduleCode}</h4><br/>
                <h4 className="user-namee">Lecturer Name: {lecturerName}</h4><br/>
                <h4 className="user-namee">Category: {category}</h4><br/>
                <h4 className="user-namee">Date: {date}</h4><br/>
                <h5 className="user-namee" style={{color:"blue"}}>{video}</h5>
             
   
                <div className="d-grid col-8 mx-10">
                
                
         
        </div>
        </form>

    </div>
    </div>
    <br/>
    <a href="http://localhost:3000/" >
    <button className="btn_feedback" type="submit">Feedback</button></a>

    <a href="http://localhost:3000/" >
    <button className="btn_back" type="submit">Back</button></a>

</div>
</div>

);
}

export default Viewmore;