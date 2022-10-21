import React, { useState, useEffect } from "react";
import { Table, Button, Card, Modal, Form } from "react-bootstrap";
import axios from "axios";
import { FaPencilAlt, FaTrashAlt, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

function Viewstudent(props) {
    const [student, setstudent] = useState([]);
    const [search, setSearch] = useState("");
    const [name, setName] = useState(" ");
    const [email, setemail] = useState(" ");
    const [password, setpassword] = useState(" ");
    const [cpassword, setcpassword] = useState(" ");
    const [contact, setcontact] = useState(" ");
    const [year, setyear] = useState(" ");
    const [semester, setsemester] = useState(" ");
    const [batch, setbatch] = useState(" ");
    const [nic, setnic] = useState(" ");
    const [_id, setid] = useState(" ");
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = (_id, name, email, contact, year, semester, batch, nic,password,cpassword) => {
        setShow(true);
        setid(_id);
        setcontact(contact);
        setName(name);
        setemail(email);
        setyear(year);
        setsemester(semester);
        setbatch(batch);
        setnic(nic);
        setcpassword(password);
        setpassword(cpassword);
    }
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

    //delete funtion to delete a student
    function onDelete(_id) {
        console.log(_id);
        axios.delete("http://localhost:5000/user/" + _id).then((res) => {
            alert('Deleted Successfully');
            window.location.reload();
        }).catch((err) => {
            alert(err.message);
        })
    }
// update function
    const updateUser = (e) => {
        e.preventDefault();
        update(e)
    };


    function update() {
        console.log(_id)
        console.log(name)
        console.log(email)
        console.log(contact)
        const newTime = {
            _id,
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

        axios.put("http://localhost:5000/user/" + _id, newTime).then(() => {


            setName('');
            setemail('');
            setcontact('');
            setyear('');
            setsemester('');
            setbatch('');
            setnic('');
            setpassword('');
            setcpassword('');
            alert("Updated Successfully");
            window.location.reload();
        }).catch((err => {
            alert(err)
        }))


    }
    return (
        <div>
            <div style={{ paddingLeft: "10vh", color: 'white', paddingTop: '4vh' }}>
            </div>
            <div style={{ paddingLeft: '8vh', paddingRight: '13vh', paddingTop: '4vh', paddingBottom: '4vh' }}>
                
            <Card style={{
                            backgroundColor: '#83F28F',
                        }}
                        >
                
                    <div style={{ paddingBottom: "8vh", paddingTop: "5vh", paddingLeft: "8vh", paddingRight: "5vh" }}>
                        <div style={{ paddingBottom: "5vh", paddingTop: "5vh", paddingLeft: "5vh", paddingRight: "5vh" }}>
                            <h1 style={{ paddingLeft: "40%", paddingBottom: "5vh" }}>Student List</h1>
                            <Link
                                to={{
                                    pathname: "/signup",
                                }}
                            >  <Button><FaPlus /> Add Student</Button></Link>
                            <div style={{ paddingleft: "10vh", paddingBottom: "1vh", paddingTop: "1vh" }} >

                                <div style={{ paddingleft: "2vh", paddingBottom: "1vh", paddingTop: "1vh" }}>
                                    <div style={{ paddingBottom: "1vh", paddingTop: "1vh" }}>
                                        <input type="text" placeholder="Search from 'Name' " className="mr-2"
                                            onChange={(e) => {
                                                setSearch(e.target.value);
                                            }} />
                                    </div>

                                </div>

                            </div>
                             
                            <Table striped bordered hover size="sm" variant="light" >
                                <thead>

                                    <tr>

                                        <th>Full Name</th>
                                        <th>NIC</th>
                                        <th>Phone</th>
                                        <th>Email</th>
                                        <th>Password</th>
                                        <th>Confirm Password</th>
                                        <th>Year</th>
                                        <th>Semester</th>
                                        <th>Batch</th>
                                        <th>Edit</th>
                                        <th>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {student.filter(Student => {
                                        if (search === "") {
                                            return Student
                                        }
                                        else if (Student.name.toLowerCase().includes(search.toLowerCase())) {
                                            return Student
                                        }
                                    }).
                                        map((Student) => {

                                            return (
                                                <tr key={Student._id}>
                                                    <td>{Student.name}</td>
                                                    <td>{Student.nic}</td>
                                                    <td>{Student.contact}</td>
                                                    <td>{Student.email}</td>
                                                    <td>*************</td>
                                                    <td>*************</td>
                                                    <td>{Student.year}</td>
                                                    <td>{Student.semester}</td>
                                                    <td>{Student.batch}</td>
                                                    <td>
                                                        <Button variant="outline-success" onClick={() => handleShow(Student._id, Student.name, Student.nic, Student.contact, Student.year, Student.semester, Student.batch, Student.nic, Student.password, Student.cpassword)} ><FaPencilAlt /></Button>
                                                    </td>

                                                    <td>
                                                        <Button variant="outline-danger" onClick={() => onDelete(Student._id)}><FaTrashAlt /></Button>

                                                    </td>
                                                </tr>

                                            );
                                        })}

                                </tbody>

                            </Table >
                            <Link
                                style={{ textDecoration: 'none' }}
                                to="/PrintStudent"
                            >
                            <Button>Print Report</Button>{' '}
                            </Link>
                            <Link
                                style={{ textDecoration: 'none' }}
                                to="/log"
                            >
                                <Button>Login</Button>
                            </Link>
                        </div>
                    </div>



                </Card>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Edit Details </Modal.Title>

                    </Modal.Header>
                    <Modal.Body>
                        <Form >
                            <div >
                                <Form.Label>Name</Form.Label>
                                <Form.Control placeholder="origin"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)} />
                            </div>

                            <div >
                                <Form.Label>NIC</Form.Label >
                                <Form.Control placeholder="NIC"
                                    value={nic}
                                    onChange={(e) => setnic(e.target.value)} />
                            </div>

                            <div >
                                <Form.Label>Contact</Form.Label >
                                <Form.Control placeholder="Time"
                                    value={contact}
                                    onChange={(e) => setcontact(e.target.value)} />
                            </div>
                            <div >

                                <Form.Label>Email</Form.Label >
                                <Form.Control placeholder="to"
                                    value={email}
                                    onChange={(e) => setemail(e.target.value)} />
                            </div>

                            <div >

                                <Form.Label>Password</Form.Label >
                                <Form.Control placeholder="Password"
                                    value={password}
                                    onChange={(e) => setpassword(e.target.value)} />
                            </div> <div >

                                <Form.Label>Confirm Password</Form.Label >
                                <Form.Control placeholder="Password"
                                    value={cpassword}
                                    onChange={(e) => setcpassword(e.target.value)} />
                            </div>
                            <div >
                                <Form.Label>Year</Form.Label >
                                <Form.Control placeholder="Time"
                                    value={year}
                                    onChange={(e) => setyear(e.target.value)} />
                            </div>
                            <div >
                                <Form.Label>Semester</Form.Label >
                                <Form.Control placeholder="semester"
                                    value={semester}
                                    onChange={(e) => setsemester(e.target.value)} />
                            </div>
                            <div style={{ paddingBottom: "5vh", paddingTop: "1vh" }}>
                                <Form.Label>Batch</Form.Label >
                                <Form.Control placeholder="batch"
                                    value={batch}
                                    onChange={(e) => setbatch(e.target.value)} />
                            </div>
                            <Button variant="outline-success" type="submit" onClick={(e) => updateUser(e)}>Edit Timetables</Button>
                            {' '}<Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>

                        </Form>
                    </Modal.Body>

                </Modal>
            </div>
        </div>


    );

}
export default Viewstudent;



