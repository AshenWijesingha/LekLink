import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";

export default function Sidebar(props) {

  return (
    <nav id="sidebar" className={props.isActive ? 'active' : null}>

      <ul className="list-unstyled components font-color">
        <li>
          <Link to="/app" className="font-color">
            <i className="fa fa-cubes" aria-hidden="true" style={{marginRight:10}}></i>
            Dashboard
          </Link>
        </li>
        <br></br>
        <li>
          <Link to="/app/student" className="font-color">
            <i className="fa fa-cubes" aria-hidden="true" style={{marginRight:10}}></i>
            Student Management
          </Link>
        </li>
        <li>
          <Link to="/app/Lecturer" className="font-color">
            <i className="fa fa-cubes" aria-hidden="true" style={{marginRight:10}}></i>
            Lecturer Profile Management
          </Link>
        </li>
        <li>
          <Link to="/app/Schedule/createSchedule" className="font-color">
            <i className="fa fa-cubes" aria-hidden="true" style={{marginRight:10}}></i>
            Schedule
          </Link>
        </li>
        <li>
          <Link to="/app/Schedule/today" className="font-color">
            <i className="fa fa-cubes" aria-hidden="true" style={{marginRight:10}}></i>
            Today Schedule
          </Link>
        </li>
        <li>
          <Link to="/app/Schedule/ViewFullSchedule" className="font-color">
            <i className="fa fa-cubes" aria-hidden="true" style={{marginRight:10}}></i>
            Full Schedule
          </Link>
        </li>

      </ul>

    </nav>
  );
}
