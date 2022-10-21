import React,{useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function AddLecture() {
    

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
  

    function sendData(e){
      e.preventDefault();
      
      const newLecture ={
     
        lName,
        year,
        semester,
        module,
        moduleN,
        date,
        time,
        mType,
        mLink,
       
      }

      axios.post("http://localhost:8070/lecture/addLECTURE",newLecture).then((res)=>{
        alert("Lecture Added")
        console.log(res.data)
        Navigate('/allLECTURE-table')
        
      }).catch((err)=>{
        alert(err)
      })
    }
    
    const formValidation = () =>{
  
        let isValid = true;

        if(lName.trim().length === 0){
            toast.error("Please insert name");
            isValid = false;
        }
        else if(year.trim().length === 0){
            toast.error("Please insert year");
            isValid = false;
        }
    
        else if(semester.trim().length === 0){
            toast.error("Please insert semester");
            isValid = false;
        }
        
        else if(date.trim().length === 0){
            toast.error("Please insert date");
            isValid = false;
        }
        else if(time.trim().length === 0){
            toast.error("Please insert time");
            isValid = false;
        }



  
        return isValid;
      }

      
    return(

        


        
      <div className=""><br/>
      <h2 className="p-3 mb-2 bg-secondary text-white">Create Lecture Link</h2>
      
      
     
      <br/>

      <form className="l-include" onSubmit={sendData} >

        
      <ToastContainer style={{ width: "1000px", textAlign: 'center', fontSize: '25px', fontFamily: 'fantasy' }}
                    position="center"
                    theme='light'
                    autoClose={7000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    limit={1}
                />

                <br></br>
                <br></br>
              <div className="col-md-6">
                  <label for="validationCustom01" className="form-label">Lecture Name</label>
                  <input type="text" className="form-control" maxLength={20} minLength={8} id="validationCustom01" placeholder="Enter Lecture Name" onChange={(e)=>{

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
                  <input type="text" className="form-control"minLength={6} maxLength={6} id="module" placeholder="Enter module no" onChange={(e)=>{

                      setmodule(e.target.value);

                  } } required/>

              </div>

              <div className="col-md-3">
                  <label for="validationCustom01" className="form-label">Module Name</label>
                  <input type="text" className="form-control"maxLength={20} minLength={2} id="moduleN" placeholder="Enter module name" onChange={(e)=>{


                      setmoduleN(e.target.value);

                  } } required/>

              </div>
                
              <div className="col-md-3">
                  <label for="validationCustom01" className="form-label">Date</label>
                  <input type="Date" className="form-control" id="validationCustom01" placeholder="Enter date" onChange={(e)=>{

                      setdate(e.target.value);

                  } } required/>

              </div>
              <div className="col-md-3">
                  <label for="validationCustom01" className="form-label">Time</label>
                  <input type="time" className="form-control" id="time" placeholder="Enter time" onChange={(e)=>{

                      settime(e.target.value);

                  } } required/>
                 
              </div>
              
              <div className="col-md-3">
                  <label for="validationCustom01" className="form-label">Meeting Type</label>
                  <select className="form-select" id="mType" onChange={(e)=>{

                       setmType(e.target.value);

                  } } required>
                  <option selected disabled >Meeting Type</option>
                  <option>Zoom</option>
                  <option>Teams</option>
                  </select>
                  </div>
                  
              
             
             
              <div className="col-md-12">
                  <label for="validationCustom01" className="form-label">Meeting Link</label>
                  <input type="text" className="form-control" id="mLink" placeholder="Enter meeting link" onChange={(e)=>{

                     setmLink(e.target.value);

                  } } required/>

                  
              </div>
              
              

              <div className="col-3">
                  <button className="button" type="submit" >
                  <a href="http://localhost:3000/allLECTURE-table" validate="true"style={{textDecoration:'none', color:'white'}}></a>
                    Submit</button>
              </div>
              
             
     
              
      </form>

  </div>
    )
}