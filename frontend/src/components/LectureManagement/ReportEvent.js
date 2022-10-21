import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from "react-router-dom"
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

function ReportEvent() {

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
        pdf.save("Event Report_2021-2-3.pdf");
      });
    };
  
    //end generate pdf-----------------------------

    const [lectures, setLectures] = useState([]);

    useEffect(() => {
        function getLectures() {
            axios.get("http://localhost:8070/Lecture/").then((res) => {
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
    axios.delete("http://localhost:8070/Lecture/delete/"+id).then((res)=>{
            if(res.status===200){
                alert("Lecture deleted")
                // getEvents()
            }
        })
}    }

return (
        
      <div ref={docToPrint}>
      <table class="table">
          <thead>
              <tr>
            
                    <th scope="col">Lecture Name</th>
                    <th scope="col">Year</th>
                    <th scope="col">Semester</th>
                    <th scope="col">Module</th>
                    <th scope="col">Module Name</th>
                    <th scope="col">Date</th>
                    <th scope="col">Time</th>
                    <th scope="col">Meeting Type</th>
                    <th scope="col">Meeting Link</th>
                  
              </tr>
          </thead>
          <tbody>
              {
                  lectures.map((Lecture , index) => {
                      return (
                          <tr key={index}>
                               <td>{Lecture.lName}</td>
                                <td>{Lecture.year}</td>
                                <td>{Lecture.semester}</td>
                                <td>{Lecture.module}</td>
                                <td>{Lecture.moduleN}</td>
                                <td>{Lecture.date}</td>
                                <td>{Lecture.time}</td>
                                <td>{Lecture.mType}</td>
                                <td>{Lecture.mLink}</td>
                              
                          </tr>
                      )
                  })
              }

          <button className="newCustomer_btn" onClick={printDocument}>
          Generate Report(Download PDF)
          </button>

          </tbody>
      </table>
      </div>
    
  )
}

export default ReportEvent;
