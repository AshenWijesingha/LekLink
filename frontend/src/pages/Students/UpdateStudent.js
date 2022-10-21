/* eslint-disable react-hooks/rules-of-hooks */
import { React, useEffect, useState } from "react";
import axios from "axios";
// import { toast, ToastContainer } from 'react-toastify';
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/Form';
import Sidebar from "../../components/sidebar/Sidebar";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

export default function updateStudent(){
    const [studentID, setStudentID] = useState("");
    const [email, setEmail] = useState("");
    const [Name, setName] = useState("");
    const [Year, setYear] = useState("");
    const [Batch, setBatch] = useState("");
    const [Day, setDay] = useState("")
    const [Specialization, setSpecialization] = useState("")
    const[id,setId] = useState();

    const navigation = useNavigate();

    const location = useLocation();

    useEffect(() => {
        const elems = location.state.props;
        setId(elems._id)
        console.log(elems)
        setStudentID(elems.id);
        setEmail(elems.email);
        setName(elems.Name)
        setYear(elems.Year)
        setBatch(elems.Batch)
        setDay(elems.Day)
        setSpecialization(elems.Specialization)

    }, [])
    


    const addSignup = async (e) => {

        e.preventDefault();

        const updateStudent = {
            studentID,
            email,
            Name,
            Year,
            Batch,
            Day,
            Specialization,
            id
        }

        console.log(updateStudent);

      await axios.put("http://localhost:8080/manageStudent/updateStudent", updateStudent).then(res =>{
          alert('Successfully Updated!')
          navigation(-1)
      }).catch(err =>{
        alert(err)
      })
      
  };

//   const formValidation = () =>{
  
//         let isValid = true;

//         if(!email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)){
//             toast.error("Please insert Email");
//             isValid = false;
//         }
        
//         return isValid;
//       }

    return (
            <div style={{display : 'flex'}}>
                <Sidebar/>
                <div style={{width : 800,margin:20}}>
                <h1 style={{fontSize:30,marginBottom:20}}>Update Student </h1>
                <form onSubmit={addSignup} className="d-flex justify-content-center flex-column">
                    
                    {/* <ToastContainer style={{ width: "450px", textAlign: 'center', fontSize: '17px', fontFamily: 'fantasy' }}
                        position="top-center"
                        theme='light'
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        limit={1}
                    /> */}
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
                        <button type="submit" className="btn btn-primary" style={{backgroundColor : 'blue'}}>Update Student</button>
                    </div>                 
                </form>

                </div>
            </div>
            

    
)}