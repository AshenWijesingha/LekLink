import React, { useState } from "react"
import { FaLock } from "react-icons/fa";
import { Fragment } from "react";
import { Card, Button, Row, Col, Form } from 'react-bootstrap';
import axios from "axios";

export default function AddUser() {
    const space2 = <Fragment>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Fragment>
    const [name, setName] = useState(" ");
    const [email, setemail] = useState(" ");
    const [password, setpassword] = useState(" ");
    const [type, settype] = useState(" ");

    function sendData(e) {

        e.preventDefault();

        const newUser = {
            name,
            email,
            password, type
        }

        axios.post("http://localhost:5000/user/", newUser).then(() => {
            ("User added")
            setName('');
            setemail('');
            setpassword('');
            settype('');

            alert("User added");
            window.location.reload();

        }).catch((err) => {
            alert("error");
        })
    }

    return (
        <div style={{
            backgroundColor: '#010020',
            width: '100% ',
            height: '1000px'
        }}>
            <div style={{ paddingLeft: "10vh", color: 'white', paddingTop: '4vh' }}>
                <p >Doggie Care   {space2}{space2}{space2}{space2}{space2}{space2}{space2}{space2}{space2}{space2}{space2}<FaLock /></p>
            </div>

            <div style={{ paddingLeft: '7vh', paddingRight: '7vh', paddingTop: '3vh', paddingBottom: '3vh' }}>
                <Card style={{
                    backgroundColor: '#062464',
                }}>
                    <div style={{ paddingLeft: '8vh', paddingRight: '13vh', paddingTop: '4vh', paddingBottom: '4vh' }}>
                        <Card style={{
                            backgroundColor: '#010020',
                        }}>
                            <Card.Body>
                                <div style={{ paddingLeft: '4vh' }}>
                                    <h6 style={{ color: '#A4DE02' }}>Add User</h6>

                                </div>

                                <Form onSubmit={sendData}>

                                    <br />
                                    <div style={{ paddingLeft: '5vh', paddingRight: '5vh' }}>

                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label style={{ color: 'white' }}>Name: </Form.Label>
                                            <Form.Control type="text"
                                                onChange={(e) => setName(e.target.value)}

                                                placeholder=" Enter Name" style={{
                                                    backgroundColor: '#010020',
                                                    color: '#F62681'
                                                }} />
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label style={{ color: 'white' }}>Email: </Form.Label>
                                            <Form.Control type="text"
                                                onChange={(e) => setemail(e.target.value)}

                                                placeholder=" Enter Email" style={{
                                                    backgroundColor: '#010020',
                                                    color: '#F62681'
                                                }} />
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label style={{ color: 'white' }}>Password</Form.Label>
                                            <Form.Control type="password"
                                                onChange={(e) => setpassword(e.target.value)}
                                                placeholder="Enter password" style={{
                                                    backgroundColor: '#010020',
                                                    color: '#F62681'
                                                }} />
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label style={{ color: 'white' }}>Type</Form.Label>
                                            <Form.Select aria-label="Default select example"
                                                onChange={(e) => settype(e.target.value)}

                                                style={{

                                                    backgroundColor: '#010020',
                                                    color: '#F62681'

                                                }}>
                                                <option>Select Type</option>
                                                <option value="Manager">Manager</option>
                                                <option value="USer">USer</option>
                                                <option value="Admin">Admin</option>
                                            </Form.Select>

                                        </Form.Group>




                                    </div>

                                    <br />



                                    <div style={{ paddingLeft: "65vh" }}>
                                        <Button type="submit">ADD</Button>
                                    </div>
                                </Form>

                            </Card.Body>
                        </Card>
                    </div>
                </Card>
            </div>


        </div>
    );
}
