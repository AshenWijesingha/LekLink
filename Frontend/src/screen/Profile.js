import React, { useState, useEffect } from "react";
import { Button, Row, Col, Card, Image } from 'react-bootstrap';
import Login from "./Login";
import axios from "axios";
import { useLocation } from 'react-router-dom'
import { Link } from "react-router-dom";


export default function Profile(props) {
    const [student, setstudent] = useState([]);

    const error = "ERROR IN DETAILS PLEASE CHECK EMAIL AND PASSWORD AND LOG AGAIN";
    const location = useLocation()
    const { Data, pass } = location.state


    console.log(Data)
    console.log(pass)
    useEffect(() => {

        //get funtion
        function getstudent() {
            axios.get("http://localhost:5000/user/").then((res) => {
                setstudent(res.data);
            }).catch((err) => {
                alert(err.message);
            })
        }
        getstudent();
    }, [])

     //delete funtion
     function onDelete(_id) {
        console.log(_id);
        axios.delete("http://localhost:5000/user/" + _id).then((res) => {
            alert('Deleted Successfully');
            window.location.reload();
        }).catch((err) => {
            alert(err.message);
        })
    }
    return (
        <div >
            <Row>
                <Col>
                    <div style={{ paddingLeft: '5vh', paddingRight: '5vh', paddingTop: '7vh', paddingBottom: '5vh' }}>

                        <Card style={{
                            backgroundColor: '#83F28F',
                        }} >
                            <div style={{ paddingLeft: '30%' }}>
                                <br /><br />
                                <h1>Student Profile</h1>
                                <br /> <br />
                            </div>
                            <div style={{ paddingLeft: '20%', paddingBottom: '5vh', paddingTop: '5vh' }}>
                            <Link
                                        style={{ textDecoration: 'none' }}
                                        to="/viewRecord"

                                        >
                                <button style={{
                                    backgroundColor: '#02A4D3',
                                    color: 'black',
                                    fontSize: '20px',
                                    padding: '10px 60px',
                                    borderRadius: '5px',
                                    margin: '10px 0px',
                                    width: '50vh',
                                    cursor: 'pointer'
                                }}>
                                     
                                View Lecture Recordings</button>{' '}<br /><br /><br />   </Link>
                                
                                        
                                <button style={{
                                    backgroundColor: '#02A4D3',
                                    color: 'black',
                                    fontSize: '20px',
                                    padding: '10px 60px',
                                    borderRadius: '5px',
                                    margin: '10px 0px',
                                    width: '50vh',
                                    cursor: 'pointer'
                                }}>
                                     
                                    View Weekly  Lecture Shedule
                                </button>{' '}<br /><br /><br />
                                <button style={{
                                    backgroundColor: '#02A4D3',
                                    color: 'black',
                                    fontSize: '20px',
                                    padding: '10px 60px',
                                    borderRadius: '5px',
                                    width: '50vh',
                                    margin: '10px 0px',
                                    cursor: 'pointer'
                                }}>
                                    Generate Report
                                </button>{' '}<br /><br /><br />
                            </div>
                        </Card>
                    </div>
                </Col>
                <Col>
                    <div style={{ paddingLeft: '5vh', paddingRight: '5vh', paddingTop: '3vh', paddingBottom: '5vh' }}>

                        <Card style={{
                            backgroundColor: '#FDEE87',
                        }}
                        >
                            <Card.Body>
                                <div style={{ paddingLeft: '35%' }}>
                                    <Image
                                        src=
                                        "https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/11_avatar-512.png"
                                        roundedCircle
                                        width='180vh'
                                    />
                                </div>
                                {student.filter(Student => {
                                    if (Student.email === "") {
                                        <div>
                                            <h1>ERROR</h1>
                                            <Button>LOGIN AGAIN</Button>
                                        </div>
                                    }
                                    else if (Student.email.includes(Data.remail)) {
                                        if (Student.password.includes(pass.rpassword)) {
                                            return Student
                                        }
                                    }
                                }).map((Student) => {

                                    return (
                                        <div>
                                            <div key={Student._id} style={{ paddingLeft: '20%', paddingTop: '2vh' }}>
                                                <h1></h1>

                                                <h5>Full Name :{Student.name} </h5 ><br />
                                                <h5>NIC : {Student.nic}</h5 ><br />
                                                <h5>Contact Number : {Student.contact}</h5 ><br />
                                                <h5>Email : {Student.email}</h5 ><br />
                                                <h5>Year : {Student.year}</h5 ><br />
                                                <h5>Semester : {Student.semester}</h5 ><br />
                                                <h5>Batch : {Student.batch}</h5 >
                                                
                                                {'  '}{'   '}{'    '} <Button variant="outline-success"  >Update</Button>{' '}
                                                <Button variant="outline-danger" onClick={() => onDelete(Student._id)}>Delete</Button>

                                            </div>
                                     
                                        </div>
                                    );
                                })}
                                <div style={{ paddingLeft: '85%' }}>
                                    <Link
                                        style={{ textDecoration: 'none' }}
                                        to="/signup"
                                    >
                                        <Button>Sign Up</Button>
                                    </Link>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                </Col>

            </Row>


        </div>
    );
}
