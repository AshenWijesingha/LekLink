import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from "react-router-dom"
//import './AllEvents.css';

function NoticeTable() {

    const [notices, setNotices] = useState([]);

    useEffect(() => {
        function getNotices() {
            axios.get("http://localhost:8070/Notice/").then((res) => {
                setNotices(res.data);
            }).catch((err) => {
                alert(err.message);
            })
        }
        getNotices();
    }, [notices])


    const deleteNotice = (id) =>{
        // alert(id)
        var answer = window.confirm("Are you sure")

if(answer){
    axios.delete("http://localhost:8070/Notice/delete/"+id).then((res)=>{
            if(res.status===200){
                alert("Booking Rejected")
                // getBookingsEVENT()
            }
        })
}    }

    return (
        <div>
        <center><h3>NOTICES</h3></center> <br/>

        <a href="http://localhost:3000/addNOTICE"><button class="abc" type="button">Add notice</button> </a> 
        <table class="table">
            <thead>
                <tr>
                    <th scope='col'>No</th>
                    <th scope="col">Lecture Name</th>
                    <th scope="col">Module Name</th>
                    <th scope="col">Module No</th>
                    <th scope="col">Date</th>
                    <th scope="col">Message</th>
                    <th scope="col">Update</th>
                    <th scope="col">Delete</th>
                </tr>
            </thead>
            <tbody>
                {
                    notices.map((Notice , index) => {
                        return (
                            <tr key={index}>
                                <th scope="row">{index+1}</th>
                                <td>{Notice.lName}</td>
                                <td>{Notice.mName}</td>
                                <td>{Notice.mNo}</td>
                                <td>{Notice.date}</td>
                                <td>{Notice.message}</td>
                                <td> <Link to={"/all-table/updateNOTICE/"+Notice._id}><button  className='btn btn-warning'>Update</button></Link> </td>
                             
                                <td> <button onClick={()=>{deleteNotice(Notice._id)}} className='btn btn-danger'>Delete</button> </td>
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

export default NoticeTable;