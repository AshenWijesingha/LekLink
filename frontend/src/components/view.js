import React, { useState, useEffect } from 'react';
import './view.css'
import {FaArrowLeft} from "react-icons/fa";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link, useParams } from "react-router-dom";



const View= (props) => {

	const {id} = useParams();
	const Navigate = useNavigate()
	const [fristname, setName] = useState("");
    const [idnumber, setIdnumber] = useState("");
    const [nic, setNic] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [birthday, setBirthday] = useState("");
    const [position, setPosition] = useState("");
    const [department, setDepartment] = useState("");
    const [createdAt, setDate] = useState("");
    
    const [formValues, setFormValues] = useState({

    fristname:"",
    idnumber:"",
    nic:"",
    email:"",
    phone:"",
    birthday:"",
    position:"",
    department:"",
    createdAt:"",
    
});

    
	


// Load data from server and reinitialize guide form  
useEffect(() => {
	axios
	.get(
    `http://localhost:8070/user/get/${id}`
		
	)
	.then((res) => {
		const {fristname, idnumber, nic, email, phone, birthday, position, department, createdAt} = res.data.user;
	/*	console.log(fname)
		console.log(lname)
        console.log(idnumber)
        console.log(nic)
		console.log(email)
        console.log(phone)
        console.log(registration_number)
        console.log(gtype)
		console.log(description)
        console.log(image)*/
		//setFormValues({...formValues,fname, lname, address, email, phone, registration_number, gtype, description, image });
	    setName(fristname)
        setIdnumber(idnumber)
        setNic(nic)
        setEmail(email)
	    setPhone(phone)
        setBirthday(birthday)
        setPosition(position)
        setDepartment(department)
        setDate(createdAt)
	    
	})
	.catch((err) => console.log(err));
}, []);
function sendData(e){
	e.preventDefault();

	const newUser = {

        fristname,
        idnumber,
        nic,
        email,
        phone,
        birthday,
        position,
        department,
        createdAt,
        
	}
   
	
   }


    return(
        <form onSubmit={sendData}>
         <div class="content">
    <div class="card1">
        <div class="firstinfo"><img src="https://bootdey.com/img/Content/avatar/avatar6.png" />
            <div class="profileinfo">
                <h1>{fristname}</h1>
                <h3>{idnumber}</h3>
                <h3>{nic}</h3>
                <h3>{email}</h3>
                <h3>{birthday}</h3>
                <h3>{createdAt}</h3>
                <h3>{phone}</h3>
                
            </div>
        </div>
    </div>
    <div class="badgescard"> 
       <a href="/list"><FaArrowLeft/></a>
        
    </div>
    
</div>
</form>
    )

}
export default View