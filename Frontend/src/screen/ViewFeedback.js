import React, { useState, useEffect } from "react";
import { Table, Button, Card, Modal, Form } from "react-bootstrap";
import axios from "axios";
import { FaPencilAlt, FaTrashAlt, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

function ViewFeedback(props) {
    const [feedbacks, setfeedbacks] = useState([]); 
    const [id, setid] = useState("");
    const [name, setName] = useState(" ");
    const [feedback, setfeedback] = useState(" ");
    const [search, setSearch] = useState("");
    const [_id, setId] = useState(" "); 
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    
    const handleShow = (_id,id, name, feedback) => {
        setShow(true);
        setId(_id);
        setid(id);
        setName(name);
        setfeedback(feedback);

    }
    useEffect(() => {

        //get funtion
        function getfeedbacks() {
            axios.get("http://localhost:5000/feedback/get").then((res) => {
                setfeedbacks(res.data);
            }).catch((err) => {
                alert(err.message);
            })
        }
        getfeedbacks();
    }, [])

    //delete funtion
    function onDelete(_id) {
        console.log(_id);
        axios.delete("http://localhost:5000/feedback/delete/" + _id).then((res) => {
            alert('Deleted Successfully');
            window.location.reload();
        }).catch((err) => {
            alert(err.message);
        })
    }
    // update function

    const updateFeedback= (e) => {
        e.preventDefault();
        update(e)
    };


    function update() {
        console.log(_id)
        console.log(id)
        console.log(name)
        console.log(feedback)
        
        const newTime = {
            _id,
             id,
            name,
            feedback,
             
        }

        axios.put("http://localhost:5000/feedback/update/" + _id, newTime).then(() => {

            setid('');
            setName('');
            setfeedback('');
            
            
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
                        <h1 style={{ paddingLeft: "40%", paddingBottom: "5vh" }}>Feedback List</h1>
                        <Link
                            to={{
                                pathname: "/Addfeedback",
                            }}
                        >  <Button><FaPlus /> Add Feedback</Button></Link>
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
                                    <th>Student Id</th>
                                    <th>Full Name</th>
                                    <th>Feedback</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>

                                {feedbacks.filter(Feedback => {
                                    if (search === "") {
                                        return Feedback
                                    }
                                    else if (Feedback.name.toLowerCase().includes(search.toLowerCase())) {
                                        return Feedback
                                    }
                                }).
                                    map((Feedbacks) => {

                                        return (
                                                <tr key={Feedbacks._id}>
                                                 <td>{Feedbacks.id}</td>   
                                                <td>{Feedbacks.name}</td>
                                                <td>{Feedbacks.feedback}</td>
                                                 
                                                <td>
                                                    <Button variant="outline-success" onClick={() => handleShow(Feedbacks._id,Feedbacks.id, Feedbacks.name, Feedbacks.feedback)} ><FaPencilAlt /></Button>
                                                </td>

                                                <td>
                                                    <Button variant="outline-danger" onClick={() => onDelete(Feedbacks._id)}><FaTrashAlt /></Button>

                                                </td>
                                            </tr>

                                        );
                                    })}

                            </tbody>

                        </Table >
                        <Link
                            style={{ textDecoration: 'none' }}
                            to="/DownloadLec"
                        >
                        <Button>Go Back</Button>{' '}
                        </Link>
                        <Link
                            style={{ textDecoration: 'none' }}
                            to="/log"
                        >
                            <Button>Login</Button>{' '}
                        </Link>
                        <Link
                            style={{ textDecoration: 'none' }}
                            to="/"
                        >
                        <Button>My Profile</Button>{' '}
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
                                <Form.Label>Student Id</Form.Label>
                                <Form.Control placeholder="origin"
                                    value={id}
                                    onChange={(e) => setid(e.target.value)} />
                            </div>

                            <div >
                                <Form.Label>Name</Form.Label>
                                <Form.Control placeholder="origin"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)} />
                            </div>

                             <div>
                                <Form.Label>Feedback</Form.Label >
                                <Form.Control placeholder="origin"
                                    value={feedback}
                                    onChange={(e) => setfeedback(e.target.value)} />
                            </div>
                            <Button variant="outline-success" type="submit" onClick={(e) => updateFeedback(e)}>Edit Timetables</Button>
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
 
                                
export default ViewFeedback;