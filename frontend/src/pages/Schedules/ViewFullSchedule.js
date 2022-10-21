import React, { useEffect, useState } from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import {HashLoader} from 'react-spinners';
import Table from 'react-bootstrap/Table';
import axios from 'axios'
import Button from 'react-bootstrap/Button';
function ViewFullSchedule() {
    const[schedule,setSchedule] = useState([]);


    useEffect(() => {
        axios.get("http://localhost:8080/manageSchedule/").then((res) =>{
            setSchedule(res.data.TimeTable)
            // console.log(schedule)
        })

    }, [schedule])

    const updateDetails =()=>{
        
    }
    const deleteDetails =()=>{

    }


  return (
    <div style={{display:'flex'}}>
        <Sidebar/>
        <div style={{width:1000}}>
        <Table striped bordered hover style={{width : '100%',justifyContent : 'center',marginTop : 20}}>
        <thead>
            <tr>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thirsday</th>
            <th>Friday</th>
            <th>Saturday</th>
            <th>Sunday</th>
            </tr>
        </thead>
        <tbody>
            {
                schedule.map((e,i) =>(
                    <tr key={i} style={{textAlign : 'center',fontWeight : '400'}}>
                    <td>{i+1}</td>
                    <td>{e.studentID}</td>
                    <td>{e.Name}</td>
                    <td>{e.Year}</td>
                    <td>{e.Batch}</td>
                    <td>{e.email}</td>
                    <td>{e.Day}</td>
                   
                </tr>
            ))}
    
        </tbody>
        </Table>

        </div>

    </div>
  )
}

export default ViewFullSchedule