import React, { useState, useEffect } from "react";
import { Table, Button, Card, Modal, Form } from "react-bootstrap";
import axios from "axios";
import { FaPencilAlt, FaTrashAlt, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";


function PrintStudent(props) {

 //generate pdf-to print----------------------------

 let docToPrint = React.createRef();

 const printDocument = () => {
   const input = docToPrint.current;
   html2canvas(input).then(canvas => {const pdf = new jsPDF({
    orientation: "landscape",
    unit: "px",
    format: [600, 900]
  });pdf.save("Student Report_2021-2-3.pdf");
});
};
 //end generate pdf-----------------------------




    const [student, setstudent] = useState([]);
    const [search, setSearch] = useState("");
    const [name, setName] = useState(" ");
    const [email, setemail] = useState(" ");
    const [contact, setcontact] = useState(" ");
    const [year, setyear] = useState(" ");
    const [semester, setsemester] = useState(" ");
    const [batch, setbatch] = useState(" ");
    const [nic, setnic] = useState(" ");
    const [_id, setid] = useState(" ");
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = (_id, name, email, contact, year, semester, batch, nic) => {
        setShow(true);
        setid(_id);
        setcontact(contact);
        setName(name);
        setemail(email);
        setyear(year);
        setsemester(semester);
        setbatch(batch);
        setnic(nic);
        
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

     


      
    
    return (
         
            <div ref={docToPrint}> 
            <div style={{ paddingLeft: "10vh", color: 'white', paddingTop: '4vh' }}>
            </div>
            <div style={{ paddingLeft: '8vh', paddingRight: '13vh', paddingTop: '4vh', paddingBottom: '4vh' }}>
                
            <Card style={{
                            backgroundColor: '#83F28F',
                        }}
                        >
                
                    <div style={{ paddingBottom: "8vh", paddingTop: "5vh", paddingLeft: "8vh", paddingRight: "5vh" }}>
                        <div style={{ paddingBottom: "5vh", paddingTop: "5vh", paddingLeft: "5vh", paddingRight: "5vh" }}>
                            <h1 style={{ paddingLeft: "40%", paddingBottom: "5vh" }}> Student List (Jun-Dec)</h1>
                            
                            <div style={{ paddingleft: "10vh", paddingBottom: "1vh", paddingTop: "1vh" }} >

                                <div style={{ paddingleft: "2vh", paddingBottom: "1vh", paddingTop: "1vh" }}>
                                    
                                   
                                </div>

                            </div>
                             
                            <Table striped bordered hover size="sm" variant="light" >
                                <thead>

                                    <tr>

                                        <th>Full Name</th>
                                        <th>NIC</th>
                                        <th>Phone</th>
                                        <th>Email</th>
                                        <th>Year</th>
                                        <th>Semester</th>
                                        <th>Batch</th>
                                       
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

                                                    <td>{Student.year}</td>
                                                    <td>{Student.semester}</td>
                                                    <td>{Student.batch}</td>
                                                    
                                                </tr>

                                            );
                                        })}
                  </tbody>

                            </Table >
                            <Button  onClick={printDocument}>
          Generate Report(Download PDF) 
          </Button>{' '}
                                <Link
                                    style={{ textDecoration: 'none' }}
                                    to="/"
                                >
                                     <Button>Go Back</Button>{' '}
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
                             
                        </Form>
                    </Modal.Body>

                </Modal>
            </div>
        </div>


    );

}
export default PrintStudent;



