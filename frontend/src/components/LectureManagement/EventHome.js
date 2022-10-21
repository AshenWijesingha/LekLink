import React,{useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function LectureHome() {
    

    const Navigate = useNavigate()
    const [lName, setlName] = useState("");
    const [year, setyear] = useState("");
    const [semester, setsemester] = useState("");
    const [module, setmodule] = useState("");
    const [moduleN, setmoduleN] = useState("");
    const [time, settime] = useState("");
    const [mType, setmType] = useState("");
    const [mLink, setmLink] = useState("");
    const [mId, setmId] = useState("");
    const [passcode, setpasscode] = useState("");

    function sendData(e){
      e.preventDefault();
      
      const newLecture ={
     
        lName,
        year,
        semester,
        module,
        moduleN,
        time,
        mType,
        mLink,
        mId,
        passcode
      }

      axios.post("http://localhost:8070/lecture/lectureHome",newEvent).then((res)=>{
        alert("Event Added")
        console.log(res.data)
        Navigate('/allLECTURE-table')
        
      }).catch((err)=>{
        alert(err)
      })
    }

    return(

      <div className="container bg-success p-2 text-dark bg-opacity-50"><br/>
      <h2>Create New Lecture Link</h2>

      <br/>

      <form className="row g-3 needs-validation" onSubmit={sendData} >
              <div className="col-md-6">
                  <label for="validationCustom01" className="form-label">Lecture Name</label>
                  <input type="text" className="form-control" id="validationCustom01" placeholder="Enter Lecture Name" onChange={(e)=>{

                     setlName(e.target.value);

                  } } required/>

                  
              </div>

              
              <div className="col-md-3">
                  <label for="validationCustom04" className="form-label">Year</label>
                  <select className="form-select" id="validationCustom04" onChange={(e)=>{

                     setyear(e.target.value);

                  } } required>
                  <option selected disabled >Year</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                 
                  </select>
                  
              </div>


              <div className="col-md-3">
                  <label for="validationCustom04" className="form-label">Semester</label>
                  <select className="form-select" id="validationCustom04" onChange={(e)=>{

                       setsemester(e.target.value);

                  } } required>
                  <option selected disabled >Semester</option>
                  <option>1</option>
                  <option>2</option>
                  </select>
                  
              </div>

              <div className="col-md-3">
                  <label for="validationCustom01" className="form-label">Module</label>
                  <input type="text" className="form-control" id="validationCustom01" placeholder="Enter module no" onChange={(e)=>{

                      setmodule(e.target.value);

                  } } required/>

              </div>

              <div className="col-md-3">
                  <label for="validationCustom01" className="form-label">Module Name</label>
                  <input type="text" className="form-control" id="validationCustom01" placeholder="Enter meeting link" onChange={(e)=>{


                      setmoduleN(e.target.value);

                  } } required/>

              </div>

              <div className="col-md-3">
                  <label for="validationCustom01" className="form-label">Time</label>
                  <input type="text" className="form-control" id="validationCustom01" placeholder="Enter meeting link" onChange={(e)=>{

                      settime(e.target.value);

                  } } required/>
                 
              </div>
              
              <div className="col-md-3">
                  <label for="validationCustom01" className="form-label">Meeting Type</label>
                  <select className="form-select" id="validationCustom04" onChange={(e)=>{

                       setmType(e.target.value);

                  } } required>
                  <option selected disabled >Meeting Type</option>
                  <option>Zoom</option>
                  <option>Teams</option>
                  </select>
                  </div>
                  
             
              <div className="col-md-12">
                  <label for="validationCustom01" className="form-label">Meeting Link</label>
                  <input type="text" className="form-control" id="validationCustom01" placeholder="Enter meeting link" onChange={(e)=>{

                     setmLink(e.target.value);

                  } } required/>

                  
              </div>
              
              <div className="col-md-6">
                  <label for="validationCustom01" className="form-label">Meeting ID</label>
                  <input type="number" className="form-control" id="validationCustom01" placeholder="Enter meeting ID" onChange={(e)=>{

                      setmId(e.target.value);

                  } } required/>

              </div>

              <div className="col-md-6">
                  <label for="validationCustom01" className="form-label">Passcode</label>
                  <input type="number" className="form-control" id="validationCustom01" placeholder="Enter passcode" onChange={(e)=>{

                      setpasscode(e.target.value);

                  } } required/>

              </div>

              <div className="col-3">
                  <button className="s_btn" type="submit" >
                  <a href="/allEVENT-table" validate="true"style={{textDecoration:'none', color:'white'}}></a>
                    Submit</button>
              </div>
              
      </form>

  </div>
    )
}