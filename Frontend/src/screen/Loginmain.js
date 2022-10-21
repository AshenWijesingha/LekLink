import React, { useState, useEffect } from "react";
import { Row, Col, Card } from 'react-bootstrap';
import Login from "./Login";


export default function Loginmain(props) {

    return (
        <div >
            <Row>
                <Col>
                    <div style={{ paddingLeft: '5vh', paddingRight: '5vh', paddingTop: '5vh', paddingBottom: '5vh' }}>

                        <Card style={{
                            backgroundColor: '#83F28F',
                        }} >
                            <div style={{ paddingLeft: '45vh', paddingTop: '40vh', paddingBottom: '40vh' }}>
                                <h1>Student Login</h1>
                                </div>
                        </Card>
                    </div>
                </Col>
                <Col>
                <div style={{  paddingTop: '10vh'}}>
                    <Login />
                    </div>
                </Col>

            </Row>


        </div>
    );
}
