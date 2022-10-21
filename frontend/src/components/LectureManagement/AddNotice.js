import React,{useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Notice() {

    const Navigate = useNavigate()
    const [lName, setlName] = useState("");
    const [mName, setmName] = useState("");
    const [mNo, setmNo] = useState("");
    const [date, setdate] = useState("");
    const [message, setmessage] = useState("");
   
  

    function sendData(e){
      e.preventDefault();
      
      const newNotice ={
     
        lName,
        mName,
        mNo,
        date,
        message

      }

      axios.post("http://localhost:8070/notice/addNOTICE",newNotice).then((res)=>{
        alert("Booking Added")
        console.log(res.data)
        Navigate('/allNOTICE-table')
        
      }).catch((err)=>{
        alert(err)
      })
    }

    return(

      <div className=""><br/>
      <h2 className="p-3 mb-2 bg-secondary text-white">Add Notice</h2>

      <br/>
      <br></br>

      <form className="l-include" onSubmit={sendData} >
        <br></br>
        <br></br>
              <div className="col-md-6">
                  <label for="validationCustom01" className="form-label">Lecture Name</label>
                  <input type="text" className="form-control"maxLength={20} minLength={8} id="validationCustom01" placeholder="Enter leccture name" onChange={(e)=>{

                     setlName(e.target.value);

                  } } required/>

                  
              </div>

              <div className="col-md-6">
                  <label for="validationCustom01" className="form-label">Module Name</label>
                  <input type="text" className="form-control" maxLength={20} minLength={2} id="validationCustom01" placeholder="Enter module name" onChange={(e)=>{

                     setmName(e.target.value);

                  } } required/>

                  
              </div>
              
              <div className="col-md-6">
                  <label for="validationCustom01" className="form-label">Module No</label>
                  <input type="text" className="form-control"maxLength={6} minLength={6} id="validationCustom01" placeholder="Enter module no" onChange={(e)=>{

                     setmNo(e.target.value);

                  } } required/>

                  
              </div>

               <div className="col-md-6">
                  <label for="validationCustom01" className="form-label">Date</label>
                  <input type="text" className="form-control" id="validationCustom01" placeholder="Enter date" onChange={(e)=>{

                      setdate(e.target.value);

                  } } required/>

              </div>
           
              <div className="col-md-12">
                  <label for="validationCustom01" className="form-label">Message</label>
                  <textarea className="form-control"maxLength={1000} minLength={1} id="validationCustom01" rows="4" cols="100" placeholder="Enter here..." onChange={(e)=>{

                      setmessage(e.target.value);

                  } } required>
                  </textarea>
                  
              </div>

<br></br>
<br></br>
              <div className="col-3">
                  <button className="btn btn-primary" type="submit" >
                  <a href="http://localhost:3000/allNOTICE-table" validate="true"style={{textDecoration:'none', color:'white'}}></a>
                    Submit</button>
              </div>
      </form>

  </div>
    )
}