import React, { useState } from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Container from 'react-bootstrap/esm/Container'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import axios from 'axios'
import {useNavigate } from 'react-router-dom';

function CreateSchedule() {

    const [Module,setModule] = useState();
    const [Time,setTime] = useState();
    const [Date,setDate] = useState();
    const [Topics,setTopic] = useState();
    const [MeetingLink,setLink] = useState("this is a sample link");
    const [Semester,setSemester] = useState();
    const [Year,setYear] = useState();
    const [MeetingType,setMeetingType] = useState();


    const addSignup = async (e) => {

        e.preventDefault();

        const newMeeting = {
            Module,
            Time,
            Date,
            Topics,
            MeetingLink,
            Semester,
            Year,
            MeetingType,

        }

        console.log(newMeeting);

      await axios.post("http://localhost:8080/manageSchedule/addSchedules", newMeeting).then(res =>{
          alert('Successfully Added To The Database !')
          
      }).catch(err =>{
        alert(err)
      })
      
  };


    const Back = ()=>{

    }
  return (
    <div style={{display:'flex'}}>
        <Sidebar/>
        <div style={{width : 1000}}>

        <Container  style={{marginTop : '1%',display : 'block',width : '100%',justifyContent : 'center'}}>
        <div style={{flex : 1,display : 'flex',justifyContent : 'right'}}>
            <Button variant="primary" onClick={Back} style={{backgroundColor : 'blue'}} >View Schedule</Button>
        </div>
      <h1 style={{fontSize:30,marginBottom:20}}>Create Schedule</h1>
      <Row>
        <Col>
          <Form onSubmit={addSignup}>

            <Form.Group className="mb-3">
              <Form.Label>Topic</Form.Label>
              <Form.Control type="text" onChange={(e) =>{setTopic(e.target.value)}} required />
            </Form.Group>

           <Form.Group className="mb-3" controlId="name">
              <Form.Label>Module</Form.Label>
              <Form.Control type = 'text' value = {Module} rows={3} placeholder="Module" onChange={(e) =>{setModule(e.target.value)}} required/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="description">
              <Form.Label>Meeting Type</Form.Label>
              <Form.Control as="textarea" value = {MeetingType} rows={3} placeholder="Type" onChange={(e) =>{setMeetingType(e.target.value)}} required/>
              <Form.Text className="text-muted" >
                Enter a bill description *Note : If the bill Category is other Please enter a brief description on the Bill
              </Form.Text>
            </Form.Group>

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
            <Form.Select value = {Semester} onChange = {(e)=>{setSemester(e.target.value)}} required >
                <option>Select Year </option>
                <option value = 'Semester 1'>Semester 1</option>
                <option value = 'Semester 2'>Semester 2</option>
            </Form.Select>
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="accountNumber">
              <Form.Label>Time</Form.Label>
              <Form.Control type="time" placeholder="Time" value = {Time} onChange={(e) =>{setTime(e.target.value)}} required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="billDate">
              <Form.Label>Date:</Form.Label>
              <Form.Control type="date" value = {Date} onChange={(e) =>{setDate(e.target.value)}} required />
            </Form.Group>



            <Button variant="primary"  style={{backgroundColor : 'blue'}}>
              Genarate Link
            </Button>

            <Form.Group className="mb-3">
              <Form.Label>Genarated Link</Form.Label>
              <Form.Control type="text" value = {MeetingLink}  onChange={(e) =>{setLink(e)}} readOnly/>
            </Form.Group>

            <Button variant="primary"  type = 'submit' style={{backgroundColor : 'blue'}}>
              Save
            </Button>

          </Form>
        </Col>
      </Row>
    </Container>



        </div>
    </div>
  )
}

export default CreateSchedule