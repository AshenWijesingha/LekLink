// Edit Component for update data

// Import Modules
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import './test.css'


//import AddEvents from "./AddEvents";

// Editevent Component
const Viewmore= (props) => {

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

    
	


// Load data from server and reinitialize event form  
useEffect(() => {
	axios
	.get(
    `http://localhost:8070/lecture/get/${id}`
    
    
	)
	.then((res) => {
        const {lName, year, semester, module, moduleN, date, time, mType, mLink } = res.data.lecture;
		console.log(lName)
		console.log(year)
		console.log(semester)
		console.log(module)
        console.log(moduleN)
        console.log(date)
		console.log(time)
        console.log(mType)
        console.log(mLink)
     
		//setFormValues({...formValues,eventName, eventType, location, amount, description, image });
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

	const newlecture = {

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
    Navigate('/addLECTURE')
	
   }
// Return event form
return (
<div className="container">
    <h1 className="">Lecture Details</h1>
    <hr/>
<div className="row">   

   
<div className="col-md-9 personal-info">
       


       

        <form className="p-3 mb-2 bg-secondary text-white" onSubmit={sendData} >
            <br/><br/>
               
                <h6 className="p-3 mb-2 bg-secondary text-white"> {lName}</h6>
                <h6 className="p-3 mb-2 bg-dark text-white">Year: {year}</h6>
                <h6 className="p-3 mb-2 bg-dark text-white">Semester: {semester}</h6>
                <h6 className="p-3 mb-2 bg-dark text-white">Module: {module}</h6>
                <h6 className="p-3 mb-2 bg-dark text-white">Module name: {moduleN}</h6>
                <h6 className="p-3 mb-2 bg-dark text-white">Date: {date}</h6>
                <h6 className="p-3 mb-2 bg-dark text-white">Time: {time}</h6>
                <h6 className="p-3 mb-2 bg-dark text-white">Meeting Type: {mType}</h6>
                <h6 className="p-3 mb-2 bg-primary text-white"> {mLink}</h6>
               
                <a href="http://localhost:3000/allLECTURE-table"><button class="btn btn-success" type="button">Back</button> </a> <br/> 
                
   
        </form>

       

    </div>
    </div>

</div>

);
}

export default Viewmore;