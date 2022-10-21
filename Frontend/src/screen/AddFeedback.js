import React, { useState } from "react"
import { FaLock } from "react-icons/fa";
import { Fragment } from "react";
import { Card, Button, Row, Col, Form } from 'react-bootstrap';
import axios from "axios";
;

export default function AddFeedback() {
    const [id, setid] = useState(" ");
    const [name, setName] = useState(" ");
    const [feedback, setfeedback] = useState(" ");
     
  
  // Add new feedback as student feedback
    function sendData(e) {
  
      e.preventDefault();
  
      const newFeedback = {
        id,
        name,
        feedback,
        
      }
  
      axios.post("http://localhost:5000/feedback/add", newFeedback).then(() => {
        ("User added")
        setid('');
        setName('');
        setfeedback('');
       
        alert("Signup Success ..");
        window.location = `/ViewFeedback`;
  
      }).catch((err) => {
        alert("error");
      })
    }
    function refreshPage() {
      window.location.reload(false);
    }
    return (
      <div>
        <div >
        </div>
  
  
        <div style={{ paddingRight: '2vh', paddingTop: '5vh', paddingBottom: '5vh' }}>
          <Card style={{
            backgroundColor: '#FDEE87',
          }} >
            <Card.Body>
  
  
              <Form onSubmit={sendData}>
  
                <br />
                <div >

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    
                    <Form.Label >Student Id : </Form.Label>
                    <Form.Control type="text"  name='name'
                      onChange={(e) => setid(e.target.value)}
                      placeholder=" Enter id .." />
                  </Form.Group>
  
  
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    
                    <Form.Label >Name : </Form.Label>
                    <Form.Control type="text"  name='name'
                      onChange={(e) => setName(e.target.value)}
                      placeholder=" Enter Name .." />
                  </Form.Group>
  
                   
  
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label >Feedback: </Form.Label>
                    <Form.Control type="text"
                      onChange={(e) => setfeedback(e.target.value)}
  
                      placeholder=" Enter feedback.." />
                  </Form.Group>
  
                   
  
  
                  
                  
  
                    
                </div>
  
  
                <div style={{ paddingLeft: "40%" }}>
                  <Button variant="success" type="submit">~ ~ Add ~ ~</Button>{' '} {' '}<Button variant="danger" onClick={refreshPage}>- Clear -</Button>
  
                </div>
              </Form>
  
            </Card.Body>
          </Card>
        </div>
  
  
      </div>
    );
  }
  

