import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from "react-router-dom"
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

function ReportRecording() {

    //generate pdf-----------------------------

    let docToPrint = React.createRef();

    const printDocument = () => {
      const input = docToPrint.current;
      html2canvas(input).then(canvas => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF({
          orientation: "landscape",
          unit: "px",
          format: [600, 900]
        });
        pdf.addImage(imgData, "JPEG", 0, 0);
        pdf.save("Recording Report_2021-2-3.pdf");
      });
    };
  
    //end generate pdf-----------------------------

    const [recordings, setRecordings] = useState([]);

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

return (
      <div className='con_first' >
      <div ref={docToPrint}>
      <table class="table">
          <thead>
              <tr>
                  <th scope='col'>No.</th>
                  <th scope="col">Recording Name</th>
                  <th scope="col">Module Name</th>
                  <th scope="col">Module Code</th>
                  <th scope="col">Lecturer Name</th>
                  <th scope="col">Category</th>
                  <th scope="col">Date</th>
              </tr>
          </thead>
          <tbody>
              {
                  recordings.map((Recording , index) => {
                      return (
                          <tr key={index}>
                              <th scope="row">{index+1}</th>
                              <td>{Recording.recordingName}</td>
                              <td>{Recording.moduleName}</td>
                              <td>{Recording.moduleCode}</td>
                              <td>{Recording.lecturerName}</td>
                              <td>{Recording.category}</td>
                              <td>{Recording.date}</td>
                              
                          </tr>
                      )
                  })
              }

          

          </tbody>
      </table>
      </div>
      <button className="newCustomer_btn" onClick={printDocument}>
      Download PDF
      </button>
      </div> 
    
  )
}

export default ReportRecording;
