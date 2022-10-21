import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from "react-router-dom"
import './All.css'

function RecordingTable() {

    const [recordings, setRecordings] = useState([]);
    const [searchInput, setSearchInput] = useState('');
    const [filteredResults, setFilteredResults] = useState([]);

    useEffect(() => {
        function getRecordings() {
            axios.get("http://localhost:8070/Recording/").then((res) => {
                setRecordings(res.data);
            }).catch((err) => {
                alert(err.message);
            })
        }
        getRecordings();
    }, [recordings])


    const deleteRecording = (id) =>{
        // alert(id)
        var answer = window.confirm("Are you sure")

if(answer){
    axios.delete("http://localhost:8070/Recording/delete/"+id).then((res)=>{
            if(res.status===200){
                alert("Recording deleted")
                // getRecordings()
            }
        })
}    }

//search

useEffect(() => {
    setFilteredResults(

        recordings.filter((e) => {
        return e.lecturerName,e.moduleCode.toLowerCase().includes(searchInput.toLowerCase())
        })

    )
  }, [searchInput, recordings])

    //endsearch

    

return (
    <div className='background' style={{marginLeft:"0px"}}>
    <div className='container2'>

       <div class="d-flex justify-content-center h-100">

       <div class="searchbar">
          <input class="search_input" type="text" placeholder="Find Lecture Recordings..." onChange={(e) => setSearchInput(e.target.value)}/>
          <a href="#" class="search_icon"><i class="fa"></i></a>
        </div>

      </div>
    </div>
    <div className="container3">
<section className="section about-section gray-bg" id="about">
    <p className="text-center font-weight-bold display-6 font-italic text-success" >Find your lecture recordings here........</p>
    {recordings && filteredResults.map(recording => (
    <div className="row align-items-center justify-content-around flex-row-reverse">
        <div className="col-lg-7">
            <div className="about-text">
                <h4></h4>
            <hr/>
                <h4 className="theme-color">{recording.recordingName} </h4>
                <h6 className="dark-color" style={{color:"black"}}></h6><h6 class="dark-color">Module Name: {recording.moduleName}</h6>
                <h6 className="dark-color">Module Code:   {recording.moduleCode}</h6>
                <h6 className="dark-color">Lecturer Name:   {recording.lecturerName}</h6>
                <h6 className="dark-color">Category:   {recording.category}</h6> 
                <h6 className="dark-color">Date:   {recording.date}</h6> 
                               
                <div className="btn-bar">
                 <td> <Link to={"/viewRECORDING/"+recording._id}><button  className='btn btn-success'>View More</button></Link> </td>
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
export default RecordingTable;