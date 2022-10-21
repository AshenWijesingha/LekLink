import Login from './components/login';
import Signin from './components/signin';
import Profile from './components/profile';
import Header from './components/header';
import Home from './components/home';
import UpdateProfile from './components/UpdateProfile';
import UserList from './components/userList';
import View from './components/view';
import AddRecording from './components/AddRecording';
import AllRecordings from './components/AllRecordings';
import UpdateRecording from './components/UpdateRecording';
import RecordingTable from './components/RecordingTable';
import Viewmore from './components/ViewMore';
import ReportRecording from './components/ReportRecording';
import {BrowserRouter as Router,Routes, Route , Navigate} from "react-router-dom"



function App() {

   

  return (
    <Router>
     <div>
      
      <Header/>

     <Routes>
        <Route path='/log'  element={<Login/>} />  
        <Route path='/home'  element={<Home/>}/>
        <Route path='/add'  element={<Signin/>} />
        <Route path='/profile'  element={<Profile/>} />
        <Route path='/updateprofile' element={<UpdateProfile/>}/>    
        <Route path='/list'  element={<UserList/>} />
        <Route path='/list/view/:id'  element={<View/>} />
        <Route path= '/' element={<AllRecordings/>} />
        <Route path='/addRECORDING' element={<AddRecording/>} />
        <Route path='/updateRECORDING/:id' element={<UpdateRecording/>} />
        <Route path='/allRECORDING-table' element={<RecordingTable/>} />
        <Route path='/all-table/updateRECORDING/:id' element={<UpdateRecording/>} />
        <Route path='/viewRECORDING/:id' element={<Viewmore/>} />
        <Route path='/reportRecording' element={<ReportRecording/>} />
        
        <Route path="*" element={<Navigate to="/log" replace />} />
      </Routes>
      
      
     
     </div>
    </Router>
    
  );
}

export default App;
