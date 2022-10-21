import './App.css';

import Header from './components/LectureManagement/Header';
import AddLecture from './components/LectureManagement/AddLecture';
import AddNotice from './components/LectureManagement/AddNotice';
import AllLectures from './components/LectureManagement/AllLectures';
import AllNotices from './components/LectureManagement/AllNotices';
import Home from './components/LectureManagement/Home';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import UpdateLecture from './components/LectureManagement/UpdateLecture';
import UpdateNotice from './components/LectureManagement/UpdateNotice';
import LectureTable from './components/LectureManagement/LectureTable';
import NoticeTable from './components/LectureManagement/NoticeTable';
import Viewmore from './components/LectureManagement/ViewMore';
import ReportEvent from './components/LectureManagement/ReportEvent';
import CreateLink from './components/LectureManagement/CreateLink';
import Footer from './components/LectureManagement/Footer';



function App() {
  return (
    <Router>
      <div>
      <Header/>
      
        <Routes>
          
          <Route path= '/' element={<AllLectures/>} />
          <Route path= '/N' element={<AllNotices/>} />
          <Route path='/addLECTURE' element={<AddLecture/>} /> 
          <Route path='/addNOTICE' element={<AddNotice/>} /> 
          <Route path='/Home' element={<Home/>} />
          <Route path='/allLECTURE-table' element={<LectureTable/>} />
          <Route path='/allNOTICE-table' element={<NoticeTable/>} />
          <Route path='/updateLECTURE/:id' element={<UpdateLecture/>} />
          <Route path='/updateNOTICE/:id' element={<UpdateLecture/>} />
          <Route path='/reportEvent' element={<ReportEvent/>} />
          <Route path='/all-table/updateLECTURE/:id' element={<UpdateLecture/>} />
          <Route path='/all-table/updateNOTICE/:id' element={<UpdateNotice/>} />
          <Route path='/all-table/viewLECTURE/:id' element={<Viewmore/>} />
          <Route path='/createl' element={<CreateLink/>} />
          
         

          
        </Routes>
        
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
