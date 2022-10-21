import React,{useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './AllRecordings.css';

export default function AddRecording() {

    const Navigate = useNavigate()
    const [recordingName, setrecordingName] = useState("");
    const [moduleName, setmoduleName] = useState("");
    const [moduleCode, setmoduleCode] = useState("");
    const [lecturerName, setlecturerName] = useState("");
    const [category, setcategory] = useState("");
    const [date, setdate] = useState("");
    const [video, setvideo] = useState("");

    function sendData(e){
      e.preventDefault();
      
      const newRecording ={
     
        recordingName,
        moduleName,
        moduleCode,
        lecturerName,
        category,
        date,
        video

      }

      axios.post("http://localhost:8070/recording/addRECORDING",newRecording).then((res)=>{
        alert("Recording Added")
        console.log(res.data)
        Navigate('/allRECORDING-table')
        
      }).catch((err)=>{
        alert(err)
      })
    }

    return(

      <div className="container_addRec" style={{marginLeft:"0.5cm"}}><br/>
      <h2>Upload Lecture Recordings</h2>

      <br/>

      <form className="row g-3 needs-validation" onSubmit={sendData} >
              <div className="col-md-12">
                  <label for="validationCustom01" className="form-label">Recording Name</label>
                  <input type="text" className="form-control" id="validationCustom01" placeholder="Enter Recording Name" onChange={(e)=>{

                     setrecordingName(e.target.value);

                  } } required/>

                  
              </div>

              
              <div className="col-md-6">
                  <label for="validationCustom01" className="form-label">Module Name</label>
                  <input type="text" className="form-control" id="validationCustom01" placeholder="Enter Module Name" onChange={(e)=>{

                     setmoduleName(e.target.value);

                  } } required/>


              </div>



              <div className="col-md-6">
                  <label for="validationCustom01" className="form-label">Module Code</label>
                  <input type="text" className="form-control" id="validationCustom01" maxLength={6} minLength={6} placeholder="Enter Module Code" onChange={(e)=>{

                     setmoduleCode(e.target.value);

                  } } required/>


              </div>

              <div className="col-md-6">
                  <label for="validationCustom01" className="form-label">Lecturer Name</label>
                  <input type="text" className="form-control" id="validationCustom01" placeholder="Enter Lecturer Name" onChange={(e)=>{

                      setlecturerName(e.target.value);

                  } } required/>

              </div>

              <div className="col-md-6">
                  <label for="validationCustom01" className="form-label">Category</label>
                  <select className="form-select" id="validationCustom04" onChange={(e)=>{

                      setcategory(e.target.value);

                  } } required>
                  <option selected disabled >Choose...</option>
                  <option>Lecture</option>
                  <option>Lab</option>
                  <option>Tutorial</option>
                  </select>

              </div>

              <div className="col-md-12">
                  <label for="validationCustom01" className="form-label">Date</label>
                  <input type="date" className="form-control" id="validationCustom01" placeholder="Enter here..." onChange={(e)=>{

                      setdate(e.target.value);

                  } } required/>
                  
                  
              </div>

              <div className="col-md-12">
                  <label for="validationCustom01" className="form-label">Video</label>
                  <input type="text" className="form-control" id="validationCustom01" placeholder="Enter here..." onChange={(e)=>{

                      setvideo(e.target.value);

                  } } required/>
                  
                  
              </div>
              
              

              <div className="col-3">
                  <button className="btn btn-primary" type="submit" >
                  <a href="/allRECORDING-table" validate="true"style={{textDecoration:'none', color:'white'}}></a>
                    Submit</button>
              </div>
      </form>

  </div>
    )
}