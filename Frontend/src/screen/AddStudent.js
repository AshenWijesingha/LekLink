import React, { useState } from "react"
import { FaLock } from "react-icons/fa";
import { Fragment } from "react";
import { Card, Button, Row, Col, Form } from 'react-bootstrap';
import axios from "axios";
;

export default function AddStudent() {
  const [name, setName] = useState(" ");
  const [email, setemail] = useState(" ");
  const [password, setpassword] = useState(" ");
  const [cpassword, setcpassword] = useState(" ");
  const [contact, setcontact] = useState(" ");
  const [year, setyear] = useState(" ");
  const [semester, setsemester] = useState(" ");
  const [batch, setbatch] = useState(" ");
  const [nic, setnic] = useState(" ");


  function sendData(e) {

    e.preventDefault();

    const newAppointment = {
      name,
      email,
      password,
      contact,
      year,
      semester,
      batch,
      cpassword,
      nic
    }

    axios.post("http://localhost:5000/user/", newAppointment).then(() => {
      ("User added")
      setName('');
      setemail('');
      setpassword('');
      setcpassword('');
      setcontact('');
      setyear('');
      setsemester('');
      setbatch('');
      setnic('');
      alert("Signup Success ..");
      window.location = `/`;

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
                  <Form.Label >Name : </Form.Label>
                  <Form.Control type="text"  name='name'
                    onChange={(e) => setName(e.target.value)}
                    placeholder=" Enter Name .." />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label >NIC : </Form.Label>
                  <Form.Control type="text"
                    onChange={(e) => setnic(e.target.value)}

                    placeholder=" Enter NIC .." />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label >Contact Number: </Form.Label>
                  <Form.Control type="text"
                    onChange={(e) => setcontact(e.target.value)}

                    placeholder=" Enter Contact Number .." />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label >Email : </Form.Label>
                  <Form.Control type="text"
                    onChange={(e) => setemail(e.target.value)}

                    placeholder=" Enter Email .." />
                </Form.Group>




                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label >Password: </Form.Label>
                  <Form.Control type="password"
                    onChange={(e) => setpassword(e.target.value)}

                    placeholder=" Enter Password .." />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label >Confirm Password: </Form.Label>

                  <Form.Control type="password"
                    onChange={(e) => setcpassword(e.target.value)}

                    placeholder='Confirm Password' />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label >Year : </Form.Label>
                  <Form.Select aria-label="Default select example"
                    onChange={(e) => setyear(e.target.value)}>
                    <option>Select Year</option>
                    <option value="2017">2017</option>
                    <option value="2018">2018</option>
                    <option value="2019">2019</option>
                    <option value="2020">2020</option>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                    <option value="2025">2025</option>
                    <option value="2026">2026</option>
                    <option value="2027">2027</option>
                    <option value="2028">2028</option>
                    <option value="2029">2029</option>
                    <option value="2030">2030</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label >Semester : </Form.Label>
                  <Form.Select aria-label="Default select example"
                    onChange={(e) => setsemester(e.target.value)}>
                    <option>Select Semester</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label >Batch : </Form.Label>
                  <Form.Select aria-label="Default select example"
                    onChange={(e) => setbatch(e.target.value)}>
                    <option>Select Batch</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                  </Form.Select>
                </Form.Group>
              </div>


              <div style={{ paddingLeft: "40%" }}>
                <Button variant="success" type="submit">~ ~ Signup ~ ~</Button>{' '} {' '}<Button variant="danger" onClick={refreshPage}>- Clear -</Button>

              </div>
            </Form>

          </Card.Body>
        </Card>
      </div>


    </div>
  );
}
