import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from "react-router-dom"
import './AllEvents.css';

function CreateLink() {

    const [events, setEvents] = useState([]);

    useEffect(() => {
        function getEvents() {
            axios.get("http://localhost:8070/Lecture/").then((res) => {
                setEvents(res.data);
            }).catch((err) => {
                alert(err.message);
            })
        }
        getEvents();
    }, [events])


    const deleteLecture = (id) =>{
        // alert(id)
        var answer = window.confirm("Are you sure")

if(answer){
    axios.delete("http://localhost:8070/Lecture/delete/"+id).then((res)=>{
            if(res.status===200){
                alert("Lecture deleted")
                // getEvents()
            }
        })
}    }

    return (
        <div className="container bg-success p-3 mb-2 bg-dark text-white"><br/>
        <h2>Create Link</h2>
        <br/>

           <form className="row g-3 needs-validation"  >
               
              <div className="col-6">
              <label for="validationCustom01" className="form-label">Login Zoom</label>
              <br></br>
              <a href="https://zoom.us/meeting/schedule"><button class="abc" type="button">Zoom</button> </a> <br></br>
              <br></br> 
              </div>
             
            

              <div className="col-6">

             <label for="validationCustom01" className="form-label">login Teams</label>
             <br></br>
             <a href="https://www.microsoft.com/en-ww/microsoft-teams/log-in"><button class="abc" type="button">Teams</button> </a> 
             </div>
             
             <a href="http://localhost:3000/addLECTURE"><button class="btn btn-success" type="button">Create New Lecture Link</button> </a> <br/> 

            
             
             
     
              
      </form>

  </div>
           

      
    )
}

export default CreateLink;