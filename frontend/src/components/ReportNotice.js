import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from "react-router-dom"
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

function ReportNotice() {

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
        pdf.save("Notice Report_2021-2-3.pdf");
      });
    };
  
    //end generate pdf-----------------------------

    const [notices, setNotices] = useState([]);

    useEffect(() => {
        function getNotices() {
            axios.get("http://localhost:8070/Notice/").then((res) => {
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
    axios.delete("http://localhost:8070/Notice/delete/"+id).then((res)=>{
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
                    <th scope="col">Module Name</th>
                    <th scope="col">Module No</th>
                    <th scope="col">Date</th>
                    <th scope="col">Message</th>
                    
              </tr>
          </thead>
          <tbody>
              {
                  notices.map((Notice , index) => {
                      return (
                          <tr key={index}>
                               <td>{Notice.lName}</td>
                               <td>{Notice.mName}</td>
                               <td>{Notice.mNo}</td>
                               <td>{Notice.date}</td>
                               <td>{Notice.message}</td>
                               
                              
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

export default ReportNotice;
