import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {FaTrash,FaEye,FaLocationArrow} from "react-icons/fa";
import './userList.css'
import { useNavigate,Link} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function UserList(){
    const Navigate = useNavigate()
    const [user, setUser] = useState([]);

    useEffect(() => {
        function getUser() {
            axios.get("http://localhost:8070/user/").then((res) => {
                setUser(res.data);
            }).catch((err) => {
                alert(err.message);
            })
        }
        getUser();
    }, [user])

    const deletUser = (id) =>{
        // alert(id)
        var answer = window.confirm("Are you sure")

if(answer){
    axios.delete("http://localhost:8070/user/delet/"+id).then((res)=>{
        if(res.status===200){
            toast.success('User Deleted Successfully', {

                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                
                });
                setTimeout(() => {
                    Navigate('/home')
                }, 3000);        
        } 
        })
        
        
}    }


const getUser = (id) =>{
axios.get("http://localhost:8070/user/get/"+id).then((res)=>{
    if(res.status===200){
        setUser(res.data)
        

    } 
    })
    
    
}    



    return(
    <div>
         
        <div class="container mt-3 mb-4">
<div class="col-lg-9 mt-4 mt-lg-0">

    <div class="row">
      <div class="col-md-12">
      <ToastContainer/>
        <div class="user-dashboard-info-box table-responsive mb-0 bg-white p-4 shadow-sm">
          <table class="table manage-candidates-top mb-0">
            <thead>
              <tr>
                <th>User Name</th>
                <th class="text-center">Membership</th>
                
                <th class="action text-right"></th>
              </tr>
            </thead>
            <tbody>
            {
             user.map((user , index) => {  
             return (
              <tr class="candidates-list">
                <td class="title">
                  <div class="thumb">
                    <img class="img-fluid" src="https://bootdey.com/img/Content/avatar/avatar4.png" alt=""/>
                  </div>
                  <div class="candidate-list-details">
                    <div class="candidate-list-info">
                      <div class="candidate-list-title">
                        <h5 class="mb-0"><a href="#">{user.fristname}</a></h5>
                      </div>
                      <div class="candidate-list-option">
                        <ul class="list-unstyled">
                          <li>{user.email}</li>
                          <li><FaLocationArrow/>{user.address}</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </td>
                <td class="candidate-list-favourite-time text-center">
                  <a class="candidate-list-favourite order-2 text-danger" href="#"></a>
                  <span class="candidate-list-time order-1">{user.membership}</span>
                </td>
                <td class="candidate-list-favourite-time text-center">
                  <a class="candidate-list-favourite order-2 text-danger" href="#"></a>
                  <span class="candidate-list-time order-1" style={{color:"red"}}>{user.userType}</span>
                </td>
                <td>
                  <ul class="list-unstyled mb-0 d-flex justify-content-end">
                    <li><Link to={"view/"+user._id}><a class="text-info" data-toggle="tooltip" title="" data-original-title="Edit"onClick={()=>{getUser(user._id)}}><FaEye/></a></Link></li>
                    <li><a href="" class="text-danger" data-toggle="tooltip" title="" data-original-title="Delete" onClick={()=>{deletUser(user._id)}}> <FaTrash/> </a></li>
                  </ul>
                </td>
              </tr>
                )
            })
        }
            </tbody>
          </table>
          <div class="text-center mt-3 mt-sm-3">
            <ul class="pagination justify-content-center mb-0">
              <li class="page-item disabled"> <span class="page-link">Prev</span> </li>
              <li class="page-item active" aria-current="page"><span class="page-link">1 </span> <span class="sr-only">(current)</span></li>
              <li class="page-item"><a class="page-link" href="#">2</a></li>
              <li class="page-item"><a class="page-link" href="#">3</a></li>
              <li class="page-item"><a class="page-link" href="#">...</a></li>
              <li class="page-item"><a class="page-link" href="#">25</a></li>
              <li class="page-item"> <a class="page-link" href="#">Next</a> </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    </div>
    )
}

export default UserList