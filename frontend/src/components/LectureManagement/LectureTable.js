import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from "react-router-dom"
import './AllEvents.css';


function LectureTable() {

    const [lectures, setLectures] = useState([]);

    useEffect(() => {
        function getLectures() {
            axios.get("http://localhost:8070/Lecture/").then((res) => {
                setLectures(res.data);
            }).catch((err) => {
                alert(err.message);
            })
        }
        getLectures();
    }, [lectures])


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
        
      <div className="container">

        

        <a href="http://localhost:3000/addLECTURE"><button class="abc" type="button">Create Lecture Link</button> </a> 
      
          <a href="http://localhost:3000/createl"><button class="abc" type="button">Generate Link</button> </a>  

         
         
        <br/><br/>
        


        
       
        <table class="table">
            <thead>
                <tr>
                    <th scope='col'>No.</th>
                    <th scope="col">Lecture Name</th>
                    <th scope="col">Year</th>
                    <th scope="col">Semester</th>
                    <th scope="col">Module</th>
                    <th scope="col">Module Name</th>
                    <th scope="col">Date</th>
                    <th scope="col">Time</th>
                    <th scope="col">Meeting Type</th>
                    <th scope="col">Meeting Link</th>
                    <th scope="col">Update</th>
                    <th scope="col">View</th>
                    <th scope="col">Delete</th>
                  
                </tr>
            </thead>
            <tbody>
                {
                    lectures.map((Lecture , index) => {
                        return (
                            <tr key={index}>
                                <th scope="row">{index+1}</th>
                                <td>{Lecture.lName}</td>
                                <td>{Lecture.year}</td>
                                <td>{Lecture.semester}</td>
                                <td>{Lecture.module}</td>
                                <td>{Lecture.moduleN}</td>
                                <td>{Lecture.date}</td>
                                <td>{Lecture.time}</td>
                                <td>{Lecture.mType}</td>
                                <td>{Lecture.mLink}</td>
                                <td> <Link to={"/all-table/updateLECTURE/"+Lecture._id}><button  className='btn btn-warning'>Update</button></Link> </td>
                                <td> <Link to={"/all-table/viewLECTURE/"+Lecture._id}><button  className='btn btn-success'>View</button></Link> </td>
                                <td> <button onClick={()=>{deleteLecture(Lecture._id)}} className='btn btn-danger'>Delete</button> </td>
                            </tr>
                        )
                    })
                }

           
<a href="/reportEvent" >
            <button className="gen_btn" type="submit" >
            Generate pdf
            </button></a>


            </tbody>
        </table>
        </div>
    )
}

export default LectureTable;