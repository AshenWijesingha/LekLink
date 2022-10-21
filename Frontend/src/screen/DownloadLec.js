import React, { useState, useEffect } from "react";
import { Button, Row, Col, Card, Image } from 'react-bootstrap';
import Login from "./Login";
import axios from "axios";
import { useLocation } from 'react-router-dom'
import { Link } from "react-router-dom";


// download lecture
function  DownloadLec(){

    return (



        <div >
            <Row>



            <Col>
                    <div style={{ paddingLeft: '5vh', paddingRight: '5vh', paddingTop: '3vh', paddingBottom: '5vh' }}>

                        <Card style={{
                            backgroundColor: '#FDEE87',
                            width:'40rem'
                        }}
                        >
                            <Card.Body>
                            <Image
                                        src=
                                        "https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/11_avatar-512.png"
                                        roundedCircle
                                        width='180vh'
                                    />

 <div>
                        
                        <h4>Lecture : UML for Case Study Design</h4>
                        <br /> <br />

                        <h4>Recorded By: Miss.Amali Jayawardana</h4>
                        <br /> <br />
  
                        <h4>Date and Time : 06/09/2022</h4>
                        <br /> <br />
  
                        <Button>View</Button>{' '}
                        <Button>Download</Button>{' '}

                        <Link
                                    style={{ textDecoration: 'none' }}
                                    to="/ViewFeedback"
                                >
                                    {' '}
                        <Button>Add Feedback</Button>{' '}
                        </Link>

                        <Link
                                    style={{ textDecoration: 'none' }}
                                    to="/ViewRecord"
                                >
                                    {' '}
                        <Button>Back</Button>{' '}
                        </Link>
                    </div>
                                </Card.Body>
                        </Card>
                        </div>
                </Col>


                <Col>
                    <div style={{ paddingLeft: '5vh', paddingRight: '5vh', paddingTop: '3vh', paddingBottom: '80vh' }}>

                        <Card style={{
                            backgroundColor: '#FDEE87',
                            width:'40rem'
                        }}
                        >
                            <Card.Body>
                            <Image
                                        src=
                                        "https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/11_avatar-512.png"
                                        roundedCircle
                                        width='180vh'
                                    />

 <div>
                        
                        <h4>Lecture : UML for Case Study Design</h4>
                        <br /> <br />

                        <h4>Recorded By: Miss.Amali Jayawardana</h4>
                        <br /> <br />
  
                        <h4>Date and Time : 06/09/2022</h4>
                        <br /> <br />
  
                        <Button>View</Button>{' '}
                        <Button>Download</Button>{' '}
                        <Button>Add Feedback</Button>{' '}

                        <Link
                                    style={{ textDecoration: 'none' }}
                                    to="/ViewRecord"
                                >
                                    {' '}
                        <Button>Back</Button>{' '}
                        </Link>
                    </div>
                        

                                
</Card.Body>
</Card>

</div>
</Col>
            </Row>
            

            
            </div>

)
}
    export default DownloadLec;