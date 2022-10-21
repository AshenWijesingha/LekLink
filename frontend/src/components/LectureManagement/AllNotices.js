import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from "react-router-dom"
import './All.css'




function NoticeTable() {

    const [notices, setNotices] = useState([]);
    const [searchInput, setSearchInput] = useState('');
    const [filteredResults, setFilteredResults] = useState([]);

    useEffect(() => {
        function getNotices() {
            axios.get("http://localhost:8070/notice/").then((res) => {
                setNotices(res.data);
            }).catch((err) => {
                alert(err.message);
            })
        }
        getNotices();
    }, [notices])


    const deleteNotice = (id) =>{
        // alert(id)
        var answer = window.confirm("Are you sure")

if(answer){
    axios.delete("http://localhost:8070/notice/delete/"+id).then((res)=>{
            if(res.status===200){
                alert("notice deleted")
                // getEvents()
            }
        })
}    }

//search

useEffect(() => {
    setFilteredResults(

       notices.filter((e) => {
        return e.mName,e.mNo.toLowerCase().includes(searchInput.toLowerCase())
        
        })
    )
  }, [searchInput, notices])

    //endsearch

    

return (
    <div className='background'>
    <div className='container2'>

       <div class="d-flex justify-content-center h-100">

       <div class="searchbar">
          <input class="search_input" type="text" placeholder="Find Your Notices" onChange={(e) => setSearchInput(e.target.value)}/>
          <a href="#" class="search_icon"><i class="fa"></i></a>
        </div>

      </div>
    </div>
    <div className="container3">
<section className="" id="about">
    <p className="text-center font-weight-bold display-6 font-italic text-success p-3 mb-2 bg-warning text-dark" >Notices</p>
    {notices && filteredResults.map(notice => (
    <div className="row align-items-center justify-content-around flex-row-reverse">
        <div className="col-lg-7">
            <div className="about-text">
                <h4></h4>
            <hr/>
              
                <h6 className="dark-color" style={{color:"black"}}></h6><h6 class="text-white bg-dark">Lecture Name: {notice.lName}</h6>
                <h6 className="p-3 mb-2 bg-light text-dark">Module Name:   {notice.mName}</h6>
                <h6 className="p-3 mb-2 bg-light text-dark">Module No:   {notice.mNo}</h6>
                <h6 className="p-3 mb-2 bg-light text-dark">Date:   {notice.date}</h6>
                <h6 className="p-3 mb-2 bg-danger text-white">Message:   {notice.message}</h6> 
                                  
                <div className="btn-bar">
             
             
                </div>
            </div>
        </div>
      
        </div>
 


))}
</section>

</div>
</div>
)
}
export default NoticeTable;