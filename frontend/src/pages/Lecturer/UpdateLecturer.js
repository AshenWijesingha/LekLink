import React, { useEffect, useState } from 'react'
import Sidebar from '../../components/sidebar/Sidebar';
import axios from "axios";
import Form from 'react-bootstrap/Form';
import { useLocation, useNavigate } from 'react-router-dom';

function UpdateLecturer() {

  const [email, setEmail] = useState("");
  const [Name, setName] = useState("");
  const [Year, setYear] = useState("");

  const [Modulecode, setModulecode] = useState("");
  const [ModuleName, setModuleName] = useState("")
  const [Posission, setPosission] = useState("")
  const [ContactNo, setContactNo] = useState("")

  const[id,setId] = useState();


  
  const navigation = useNavigate();

  const location = useLocation();


  useEffect(() => {
    const elems = location.state.props;
    console.log(elems)
    setId(elems._id)
    setEmail(elems.Email);
    setName(elems.Name)
    setYear(elems.Year)
    setModulecode(elems.Modulecode);
    setModuleName(elems.ModuleName)
    setPosission(elems.Posission)
    setContactNo(elems.ContactNo)

}, [])

  
  const addSignup = async (e) => {

    e.preventDefault();

    const updateLecturer = {
        email,
        Name,
        Year,
        Modulecode,
        Posission,
        ModuleName,
        ContactNo,
        id

    }

    console.log(updateLecturer);

  await axios.put("http://localhost:8080/manageLecturer/updateLecturer", updateLecturer).then(res =>{
      alert('Successfully Updated !')
      navigation(-1);
      
  }).catch(err =>{
    alert(err)
  })
  
};


  return (
    <div style={{display : 'flex'}}>
    <Sidebar/>
    <div style={{width : 800,margin:20}}>
    <h1 style={{fontSize:30,marginBottom:20}}>Add New Lecturer</h1>
    <form onSubmit={addSignup} className="d-flex justify-content-center flex-column">
        
        <div className="form-group">
            <label htmlFor="Name">Name</label>
            <input onChange={(e) => setName(e.target.value)} value={Name} type="text" className="form-control" id="Name" placeholder="Name" required/>
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



        <div className="form-group">
            <label htmlFor="PhoneNumber">Module code</label>
            <input onChange={(e) => setModulecode(e.target.value)} value={Modulecode} type="text" className="form-control" id="moduleCode" placeholder="Module Code" required/>
        </div>
        <div className="form-group">
            <label htmlFor="PhoneNumber">Module Name</label>
            <input onChange={(e) => setModuleName(e.target.value)} value={ModuleName} type="text" className="form-control" id="ModuleName" placeholder="Module Name" required/>
        </div>

        <div className="form-group">
            <label htmlFor="PhoneNumber">position</label>
            <input onChange={(e) => setPosission(e.target.value)} value={Posission} type="text" className="form-control" id="position" placeholder="position" required/>
        </div>

        <div className="form-group">
            <label htmlFor="PhoneNumber">Contact No</label>
            <input onChange={(e) => setContactNo(e.target.value)} value={ContactNo} type="text" className="form-control" id="Contact No" placeholder="Contact No" required/>
        </div>

        <div className="mt-4 d-flex justify-content-center  form-group">
            <button type="submit" className="btn btn-primary" style={{backgroundColor : 'blue'}}>Update Lecturer</button>
        </div>                 
    </form>

    </div>
</div>
  )
}

export default UpdateLecturer