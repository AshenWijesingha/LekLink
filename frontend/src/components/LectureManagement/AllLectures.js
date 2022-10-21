import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from "react-router-dom"
import './All.css'




function LectureTable() {

    const [lectures, setLectures] = useState([]);
    const [searchInput, setSearchInput] = useState('');
    const [filteredResults, setFilteredResults] = useState([]);

    useEffect(() => {
        function getLectures() {
            axios.get("http://localhost:8070/lecture/").then((res) => {
                setLectures(res.data);
            }).catch((err) => {
                alert(err.message);
            })
        }
        getLectures();
    }, [lectures])


    const deleteLecture = (id) =>{
        // alert(id)
        var answer = window.confirm("Are you sure")

if(answer){
    axios.delete("http://localhost:8070/lecture/delete/"+id).then((res)=>{
            if(res.status===200){
                alert("Lecture deleted")
                // getEvents()
            }
        })
}    }

//search

useEffect(() => {
    setFilteredResults(

       lectures.filter((e) => {
        return e.module,e.moduleN.toLowerCase().includes(searchInput.toLowerCase())
        })
    )
  }, [searchInput, lectures])

    //endsearch

    

return (
    <div className='background'>
    <div className='container2'>

       <div class="d-flex justify-content-center h-100">

       <div class="searchbar">
          <input class="search_input" type="text" placeholder="Find Your Lecture" onChange={(e) => setSearchInput(e.target.value)}/>
          <a href="#" class="search_icon"><i class="fa"></i></a>
        </div>

      </div>
    </div>
    <div className="container3">
<section className="p-3 mb-2 bg-light text-dark" id="about">
    <p className="text-center font-weight-bold display-6 font-italic text-success p-3 mb-2 bg-warning text-dark" >Find your Lectures</p>
    {lectures && filteredResults.map(lecture => (
    <div className="row align-items-center justify-content-around flex-row-reverse">
        <div className="col-lg-7">
            <div className="about-text">
                <h4></h4>
            <hr/>
                <h5 className="text-white bg-dark">{lecture.lName} </h5>
                <h6 className="dark-color" style={{color:"black"}}></h6><h6 class="p-3 mb-2 bg-light text-dark">Year: {lecture.year}</h6>
                <h6 className="p-3 mb-2 bg-light text-dark">Semester:   {lecture.semester}</h6>
                <h6 className="p-3 mb-2 bg-light text-dark">Module:   {lecture.module}</h6>
                <h6 className="p-3 mb-2 bg-light text-dark">Module Name:   {lecture.moduleN}</h6> 
                <h6 className="p-3 mb-2 bg-light text-dark">Date:   {lecture.date}</h6>
                <h6 className="p-3 mb-2 bg-light text-dark">Time:   {lecture.time}</h6>       
                <h6 className="p-3 mb-2 bg-primary text-white">Meeting Link:   {lecture.mLink}</h6>                    
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
export default LectureTable;