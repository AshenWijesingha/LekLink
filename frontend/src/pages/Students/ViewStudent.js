import React, { useEffect, useState } from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Button from 'react-bootstrap/Button';
import {HashLoader} from 'react-spinners';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function ViewStudent() {

    const [loading,setLoading] = useState(true);
    const [student,setStudent] = useState([]);
    const [search,setSearch] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
      
    
      return () => {
        axios.get("http://localhost:8080/manageStudent/").then((res) =>{
            setStudent(res.data.studentData);
            setLoading(false)

        }).catch(err =>{
            alert(err)
        })
      }
    }, [student])

    const updateDetails = (e) =>{

        const data = {
            "_id" : e._id,
            "id" : e.studentID,
            "Name":e.Name,
            "Year" : e.Year,
            "email" : e.email,
            "Batch" : e.Batch,
            "Day" : e.Day,
            "Specialization" :e.Specialization,

        }

        navigate('/app/student/editStudent',{state : {props:data}})



    }

    const deleteDetails = (e) =>{
        if(window.confirm("Conform Delete Student ? ") == true){

        axios.delete(`http://localhost:8080/manageStudent/deleteStudent/${e._id}`).then((res) =>{
            console.log("deleted")
            }).catch(err =>{
            alert(err)
            })
    }
}
    
    const newStudent = ()=>{
        navigate('/app/student/addNew');
    }


  return (
    <>
    <div style={{display : 'flex'}}>
        <Sidebar/>
        {/* student table */}
        <div style={{width : 1000,margin:20}}>
            <h1 style={{fontSize :30,marginBottom:20}}>Students</h1>
        <Form>
            <Form.Group className="mb-3" controlId="accountNumber">
              <Form.Label>Search : </Form.Label>
              <Form.Control type="text" placeholder="Search ... " onChange={(e) =>{setSearch(e.target.value)}} required />
            </Form.Group>
          </Form>

          <div style={{flex : 1,display : 'flex',justifyContent : 'right'}}>
            <Button variant="primary" onClick={newStudent} style={{fontWeight : 'bold',backgroundColor:'blue'}}>+ Add New</Button>
        </div>




        { 
        loading ? (<div style={{display : 'flex',justifyContent : 'center',alignItems : 'center',height : '100%',marginTop : '10%'}}><HashLoader color="#3637da" /> </div>): <>
        <Table striped bordered hover style={{width : '100%',justifyContent : 'center',marginTop : 20}}>
        <thead>
            <tr>
            <th>Index</th>
            <th>Student ID</th>
            <th>Name</th>
            <th>Year</th>
            <th>Batch</th>
            <th>Email</th>
            <th>Day</th>
            <th>Specialization</th>
            <th>Options</th>
            </tr>
        </thead>
        <tbody>
            {
                student.filter((element)=>{
                    if(search === ""){
                        return element
                    }else if (element.Name.includes(search) || element.studentID.includes(search) ){
                        return element
                    }
                }).map((e,i) =>(
                    <tr key={i} style={{textAlign : 'center',fontWeight : '400'}}>
                    <td>{i+1}</td>
                    <td>{e.studentID}</td>
                    <td>{e.Name}</td>
                    <td>{e.Year}</td>
                    <td>{e.Batch}</td>
                    <td>{e.email}</td>
                    <td>{e.Day}</td>
                    <td>{e.Specialization}</td>
                    <td>
                    <Button variant="outline-primary"  style={{fontSize : 12,fontWeight : 'bold',marginRight:10}} onClick = {() => {updateDetails(e)}}>Update</Button>
                    <Button variant="outline-danger"  style={{fontSize : 12,fontWeight : 'bold'}} onClick = {() => {deleteDetails(e)}}>Delete</Button>
                    </td>
                </tr>
            ))}
    
        </tbody>
        </Table>

        </>
        }

        </div>
    </div>
    </>
  )
}

export default ViewStudent