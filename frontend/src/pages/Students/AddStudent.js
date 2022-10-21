/* eslint-disable react-hooks/rules-of-hooks */
import { React, useState } from "react";
import axios from "axios";
import Form from 'react-bootstrap/Form';
import Sidebar from "../../components/sidebar/Sidebar";

export default function addCustomer(){
    const [studentID, setStudentID] = useState("");
    const [email, setEmail] = useState("");
    const [Name, setName] = useState("");
    const [Year, setYear] = useState("");
    const [Batch, setBatch] = useState("");
    const [Day, setDay] = useState("")
    const [Specialization, setSpecialization] = useState("")


    const addSignup = async (e) => {

        e.preventDefault();

        const newStudent = {
            studentID,
            email,
            Name,
            Year,
            Batch,
            Day,
            Specialization
        }

        console.log(newStudent);

      await axios.post("http://localhost:8080/manageStudent/addStudent", newStudent).then(res =>{
          alert('Successfully Added To The Database !')
      }).catch(err =>{
        alert(err)
      })
      
  };




    return (
            <div style={{display : 'flex'}}>
                <Sidebar/>
                <div style={{width : 800,margin:20}}>
                <h1 style={{fontSize:30,marginBottom:20}}>Add New Student</h1>
                <form onSubmit={addSignup} className="d-flex justify-content-center flex-column">
                    <div className="form-group">
                        <label htmlFor="Name">Name</label>
                        <input onChange={(e) => setName(e.target.value)} value={Name} type="text" className="form-control" id="Name" placeholder="Name" required/>
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Student ID</label>
                        <input onChange={(e) => setStudentID(e.target.value)} value={studentID} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Student ID" required/>
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>

                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required/>
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <Form.Group className="mb-3" >
                    <Form.Label>Select Year</Form.Label>
                    <Form.Select value = {Year} onChange = {(e)=>{setYear(e.target.value)}} required >
                        <option>Select Year </option>
                        <option value = 'Year 1'>Year 1</option>
                        <option value = 'Year 2'>Year 2</option>
                        <option value = 'Year 3'>Year 3</option>
                        <option value = 'Year 4'>Year 4</option>
                    </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3" >
                    <Form.Label>Select Semester</Form.Label>
                    <Form.Select value = {Batch} onChange = {(e)=>{setBatch(e.target.value)}} required >
                        <option>Select Year </option>
                        <option value = 'Semester 1'>Semester 1</option>
                        <option value = 'Semester 2'>Semester 2</option>
                    </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3" >
                    <Form.Label>Select Weekend/ WeekDays</Form.Label>
                    <Form.Select value = {Batch} onChange = {(e)=>{setDay(e.target.value)}} required >
                        <option>Select Year </option>
                        <option value = 'WeekDays'>WeekDays</option>
                        <option value = 'Weekend'>Weekend</option>
                    </Form.Select>
                    </Form.Group>
                    <div className="form-group">
                        <label htmlFor="PhoneNumber">Specialization</label>
                        <input onChange={(e) => setSpecialization(e.target.value)} value={Specialization} type="text" className="form-control" id="Specialization" placeholder="Specialization" required/>
                    </div>
                    <div className="mt-4 d-flex justify-content-center  form-group">
                        <button type="submit" className="btn btn-primary" style={{backgroundColor : 'blue'}}>Add Student</button>
                    </div>                 
                </form>

                </div>
            </div>
            

    
)}