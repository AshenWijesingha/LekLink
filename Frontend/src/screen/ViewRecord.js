import React, { useState, useEffect } from "react";
import { Button, Row, Col, Card, Image } from 'react-bootstrap';
import Login from "./Login";
import axios from "axios";
import { useLocation } from 'react-router-dom'
import { Link } from "react-router-dom";

function  ViewRecord(){






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
                        <h1>Lecture Recordings</h1>
                        <br /> <br />
                    </div>
                    <div style={{ paddingLeft: '5%', paddingBottom: '5vh', paddingTop: '5vh' }}>
                    <Link
                                        style={{ textDecoration: 'none' }}
                                        to="/DownloadLec"

                                        >
                        <button style={{
                            backgroundColor: '#02A4D3',
                            color: 'black',
                            fontSize: '20px',
                            padding: '10px 60px',
                            borderRadius: '5px',
                            margin: '10px 0px',
                            width: '60vh',
                            height:'15vh',
                            cursor: 'pointer'
                        }}>
                             
                        CSSE Lecture Recordings</button>{' '}<br /><br /><br /> </Link>
                         
                     
                        <button style={{
                            backgroundColor: '#02A4D3',
                            color: 'black',
                            fontSize: '20px',
                            padding: '10px 60px',
                            borderRadius: '5px',
                            margin: '10px 0px',
                            width: '60vh',
                            height:'15vh',
                            cursor: 'pointer'
                        }}>
                             
                        UEE Lecture Recordings</button>{' '}<br /><br /><br /> 

                        <button style={{
                            backgroundColor: '#02A4D3',
                            color: 'black',
                            fontSize: '20px',
                            padding: '10px 60px',
                            borderRadius: '5px',
                            margin: '10px 0px',
                            width: '60vh',
                            height:'15vh',
                            cursor: 'pointer'
                        }}>
                             
                        SPM Lecture Recordings</button>{' '}<br /><br /><br /> 
                        

                        <button style={{
                            backgroundColor: '#02A4D3',
                            color: 'black',
                            fontSize: '20px',
                            padding: '10px 60px',
                            borderRadius: '5px',
                            margin: '10px 0px',
                            width: '60vh',
                            height:'15vh',
                            cursor: 'pointer'
                        }}>
                             
                        DS Lecture Recordings</button>{' '}<br /><br /><br /> 
                        
                         
                        </div>
                         
                
                 
                        
                                </Card>
                    </div>
                                </Col>   
                                <Col>
                    <div style={{ paddingLeft: '5vh', paddingRight: '5vh', paddingTop: '7vh', paddingBottom: '80vh' }}>

                        <Card style={{
                            backgroundColor: '#FDEE87',
                        }}
                        >
                            <Card.Body>
                                <div style={{ paddingLeft: '10%' }}>
                                 
                        <br /><br />
                        <h1>Lecture Recordings</h1>
                        <br /> <br />
                                    
                                
                                    <Link
                                        style={{ textDecoration: 'none' }}
                                        to="/signup"
                                    >
                                    
                                    <button style={{
                            backgroundColor: '#02A4D3',
                            color: 'black',
                            fontSize: '20px',
                            padding: '10px 60px',
                            borderRadius: '5px',
                            margin: '10px 0px',
                            width: '60vh',
                            height:'15vh',
                            cursor: 'pointer'
                        }}>
                             
                        MAD Lecture Recordings</button>{' '}<br /><br /><br /> 
                        

                                       
                                    </Link>


   
                                    <button style={{
                            backgroundColor: '#02A4D3',
                            color: 'black',
                            fontSize: '20px',
                            padding: '10px 60px',
                            borderRadius: '5px',
                            margin: '10px 0px',
                            width: '60vh',
                            height:'15vh',
                            cursor: 'pointer'
                        }}>
                             
                        DSA Lecture Recordings</button>{' '}<br /><br /><br /> 
                        
   
                        <button style={{
                            backgroundColor: '#02A4D3',
                            color: 'black',
                            fontSize: '20px',
                            padding: '10px 60px',
                            borderRadius: '5px',
                            margin: '10px 0px',
                            width: '60vh',
                            height:'15vh',
                            cursor: 'pointer'
                        }}>
                             
                        PS Lecture Recordings</button>{' '}<br /><br /><br /> 
                        
   
                        <button style={{
                            backgroundColor: '#02A4D3',
                            color: 'black',
                            fontSize: '20px',
                            padding: '10px 60px',
                            borderRadius: '5px',
                            margin: '10px 0px',
                            width: '60vh',
                            height:'15vh',
                            cursor: 'pointer'
                        }}>
                             
                        ITP Lecture Recordings</button>{' '}<br /><br /><br /> 
                        
   
                         


                        
                        
                            
                                </div>

                                
                            </Card.Body>
                        </Card>

                        </div>
                </Col>

            </Row>

        </div>


        
    );

                    

                    }




export default ViewRecord;