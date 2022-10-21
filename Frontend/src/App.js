import React from "react";
import { BrowserRouter as BRouter, Route, Routes } from "react-router-dom";
import AddStudent from "./screen/AddStudent";
import AddUser from "./screen/AddUser";
import Login from "./screen/Login";
import Viewstudent from "./screen/Viewstudent";
import Signup from "./screen/Signup";
import Loginmain from "./screen/Loginmain";
import Profile from "./screen/Profile";


function App() {
  return (
    <BRouter>
      <Routes>
        <Route exact path="/AddStudent" element={<AddStudent />} />
        <Route exact path="/adduser" element={<AddUser/>} />
        <Route exact path="/" element={<Viewstudent/>} />
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/signup" element={<Signup/>} />
        <Route exact path="/log" element={<Loginmain/>} />
        <Route exact path="/profile" element={<Profile/>} />


      </Routes>
    </BRouter>
  );
}

export default App;
