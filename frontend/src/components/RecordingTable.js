import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from "react-router-dom"
import './AllRecordings.css';

function RecordingTable() {

    const [recordings, setRecordings] = useState([]);

    useEffect(() => {
        function getRecordings() {
            axios.get("http://localhost:8070/Recording/").then((res) => {
                setRecordings(res.data);
            }).catch((err) => {
                alert(err.message);
            })
        }
        getRecordings();
    }, [recordings])


    const deleteRecording = (id) =>{
        // alert(id)
        var answer = window.confirm("Are you sure")

if(answer){
    axios.delete("http://localhost:8070/Recording/delete/"+id).then((res)=>{
            if(res.status===200){
                alert("Recording deleted")
                // getRecordings()
            }
        })
}    }

    return (
        
      <div className="container" style={{marginLeft:"0.4cm"}}>

        <a href="http://localhost:3000/addRECORDING"><button class="btn_addRec" type="button">Add Recordings</button> </a> <br/> 
        <br/><br/>
       
        <table class="table">
            <thead>
                <tr>
                    <th scope='col'>No.</th>
                    <th scope="col">Recording Name</th>
                    <th scope="col">Module Name</th>
                    <th scope="col">Module Code</th>
                    <th scope="col">Lecturer Name</th>
                    <th scope="col">Category</th>
                    <th scope="col">Date</th>
                    <th scope="col">Video</th>
                    <th scope="col">View More</th>
                    <th scope="col">Update</th>
                    <th scope="col">Delete</th>
                </tr>
            </thead>
            <tbody>
                {
                    recordings.map((Recording , index) => {
                        return (
                            <tr key={index}>
                                <th scope="row">{index+1}</th>
                                <td>{Recording.recordingName}</td>
                                <td>{Recording.moduleName}</td>
                                <td>{Recording.moduleCode}</td>
                                <td>{Recording.lecturerName}</td>
                                <td>{Recording.category}</td>
                                <td>{Recording.date}</td>
                                <td>{Recording.video}</td>
                                <td> <Link to={"/viewRECORDING/"+Recording._id}><button  className='btn_viewMore'>View More</button></Link> </td>
                                <td> <Link to={"/all-table/updateRECORDING/"+Recording._id}><button  className='btn btn-warning'>Update</button></Link> </td>
                                <td> <button onClick={()=>{deleteRecording(Recording._id)}} className='btn btn-danger'>Delete</button> </td>
                            </tr>
                        )
                    })
                }


            </tbody>
        </table>
        </div>
    )
}

export default RecordingTable;