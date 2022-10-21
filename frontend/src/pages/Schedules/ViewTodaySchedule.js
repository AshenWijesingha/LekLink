import React, { useEffect, useState } from 'react'
import Sidebar from '../../components/sidebar/Sidebar';
import axios from 'axios'
import Button from 'react-bootstrap/Button';

function ViewTodaySchedule() {

    const [day,setDay] = useState();

    const[schedule,setSchedule] = useState([]);
    useEffect(() => {

        var a = new Date();
        var days = new Array(7);
        days[0] = "Sunday";
        days[1] = "Monday";
        days[2] = "Tuesday";
        days[3] = "Wednesday";
        days[4] = "Thursday";
        days[5] = "Friday";
        days[6] = "Saturday";
        setDay(days[a.getDay()]);
      
    }, [])


    useEffect(() => {
        axios.get("http://localhost:8080/manageSchedule/viewToday").then((res) =>{
            setSchedule(res.data.schedulesToday)
            console.log(schedule)
        })

    }, [])
    

    const getDate = () =>{
        const date = new Date();

        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();

        // This arrangement can be altered based on how we want the date's format to appear.
        let currentDate = `${day}-${month}-${year}`;
        return currentDate;
    }
    
  return (
    <div style={{display : 'flex'}}>
         <Sidebar/>
        <div style={{display : 'block',justifyContent:'right',width : '100%',margin : 50}}>
            <div style={{display:'flex' ,textAlign:'center',width : 1000,backgroundColor:"Blue",justifyContent:"center",padding :10,borderRadius:20,color:'white',fontSize:25,fontWeight:'800'}}>
                {day}<br></br>
                {getDate()}
            </div>
            {
                schedule.map((elem,i) => (
                    <div style={{margin:20, backgroundColor : 'lightblue',width : 900,padding :10,borderRadius:20}}>
                        <h1>Topic : {elem.Topic}</h1>
                        <h1>Module : {elem.Module}</h1>
                        <h1>Time : {elem.Time}</h1>
                        <Button variant="primary"  style={{backgroundColor : 'blue',marginTop : 20}}>
                        Join Meeting
                        </Button>
                    </div>
                ))
            }
            
        </div>
    </div>
  )
}

export default ViewTodaySchedule