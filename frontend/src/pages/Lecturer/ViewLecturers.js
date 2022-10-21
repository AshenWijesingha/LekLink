import React, { useEffect, useState } from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Button from 'react-bootstrap/Button';
import {HashLoader} from 'react-spinners';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function ViewLecturers() {

    const [loading,setLoading] = useState(true);
    const [Lecturer,setLecturer] = useState([]);
    const [search,setSearch] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
      
    
      return () => {
        axios.get("http://localhost:8080/manageLecturer/").then((res) =>{
            setLecturer(res.data.data);
            setLoading(false)

        }).catch(err =>{
            alert(err)
        })
      }
    }, [Lecturer])

    const updateDetails = (e) =>{

        const data = {
            "_id" : e._id,
            "Modulecode" : e.Modulecode,
            "Name":e.Name,
            "ModuleName" : e.ModuleName,
            "Year" : e.Year,
            "Posission" : e.Posission,
            "ContactNo" : e.ContactNo,
            "Email" :e.email,
        }

        navigate('/app/Lecturer/editLecturer',{state : {props:data}})



    }

    const deleteDetails = (e) =>{
        if(window.confirm("Conform Delete Lecturer ? ") === true){

        axios.delete(`http://localhost:8080/manageLecturer/deleteLecturer/${e._id}`).then((res) =>{
            console.log("deleted")
            }).catch(err =>{
            alert(err)
            })
    }
}
    
    const NewLecturer = ()=>{
        navigate('/app/Lecturer/AddLecturer');
    }


  return (
    <>
    <div style={{display : 'flex'}}>
        <Sidebar/>
        {/* student table */}
        <div style={{width : 1200,margin:20}}>
        <h1 style={{fontSize :30,marginBottom:20}}>Lecturers</h1>

        <Form>
            <Form.Group className="mb-3" controlId="accountNumber">
              <Form.Label>Search : </Form.Label>
              <Form.Control type="text" placeholder="Search By Name or Module Name " onChange={(e) =>{setSearch(e.target.value)}} required />
            </Form.Group>
          </Form>

          <div style={{flex : 1,display : 'flex',justifyContent : 'right'}}>
            <Button variant="primary" onClick={NewLecturer} style={{fontWeight : 'bold',backgroundColor:'blue'}}>+ Add New</Button>
        </div>




        { 
        loading ? (<div style={{display : 'flex',justifyContent : 'center',alignItems : 'center',height : '100%',marginTop : '10%'}}><HashLoader color="#3637da" /> </div>): <>
        <Table striped bordered hover style={{width : '100%',justifyContent : 'center',marginTop : 20}}>
        <thead>
            <tr>
            <th>Index</th>
            <th>Name</th>
            <th>Modulecode</th>
            <th>ModuleName</th>
            <th>Year</th>
            <th>Posission</th>
            <th>ContactNo</th>
            <th>Email</th>
            <th>Options</th>
            </tr>
        </thead>
        <tbody>
            {
                Lecturer.filter((element)=>{
                    if(search === ""){
                        return element
                    }else if (element.Name.includes(search) || element.ModuleName.includes(search) ){
                        return element
                    }
                }).map((e,i) =>(
                    <tr key={i} style={{textAlign : 'center',fontWeight : '400'}}>
                    <td>{i+1}</td>
                    <td>{e.Name}</td>
                    <td>{e.Modulecode}</td>
                    <td>{e.ModuleName}</td>
                    <td>{e.Year}</td>
                    <td>{e.Posission}</td>
                    <td>{e.ContactNo}</td>
                    <td>{e.email}</td>
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

export default ViewLecturers