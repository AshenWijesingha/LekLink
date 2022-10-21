import React, { useState, useEffect } from "react";
import { Row, Col, Card } from 'react-bootstrap';
import AddStudent from "./AddStudent";


export default function Signup(props) {
   

    return (
        <div >
            <Row>
                <Col>
                    <div style={{ paddingLeft: '5vh', paddingRight: '5vh', paddingTop: '5vh', paddingBottom: '5vh' }}>

                        <Card style={{
                            backgroundColor: '#83F28F',
                        }} >
                            <div style={{ paddingLeft: '45vh', paddingTop: '62%', paddingBottom: '58%' }}>
                                <h1>Student Sign Up</h1>
                                </div>
                        </Card>
                    </div>
                </Col>
                <Col>
                    <AddStudent />
                </Col>

            </Row>


        </div>
    );
}
