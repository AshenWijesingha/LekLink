import React, { useState } from "react"
import { Card, Button, Form, Image } from 'react-bootstrap';
import { Link } from "react-router-dom";

export default function Login(props) {
    const backUrl = "hello"

    // validate username and password 
    const [remail, setremail] = useState(props?.value ?? '');
    const [rpassword, setrpassword] = useState(props?.value ?? '');



    return (
        <div >



            <div style={{ paddingRight: '2vh', paddingTop: '0vh', paddingBottom: '5vh' }}>
                <Card style={{
                    backgroundColor: '#FDEE87',
                      
                }}
                ><br/>
                    <Card.Body>
                        <div style={{ paddingLeft: '30%' }}>
                            <Image
                                src=
                                "https://cdn.pixabay.com/photo/2021/01/04/10/41/icon-5887126_960_720.png"
                                roundedCircle
                                width='180vh'
                            />
                        </div>
<br/><br/>
                        <Form >

                            <div style={{ paddingLeft: '5vh' }}>

                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label >Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email"
                                        value={remail} onInput={e => setremail(e.target.value)}
                                    />
                                    <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>
                                <br/>

                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label >Password</Form.Label>
                                    <Form.Control type="password" placeholder="Enter password"
                                        value={rpassword} onInput={e => setrpassword(e.target.value)}
                                    />
                                </Form.Group>



                            </div>

                            <br />
                            <br/><br/>



                            <div style={{ paddingLeft: "65vh" }}>

                                <Link
                                    style={{ textDecoration: 'none' }}
                                    to="/profile" state={{ Data: {remail}, pass:{rpassword} }}
                                >
                                    <Button type="submit">Login</Button>{' '}

                                </Link>
                                <Link
                                    style={{ textDecoration: 'none' }}
                                    to="/signup"
                                >
                                    {' '}<Button type="submit">Sign Up</Button>

                                </Link>
                            </div>
                        </Form>

                    </Card.Body>
                </Card>
            </div>



        </div>
    );
}
