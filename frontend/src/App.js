import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from '../src/pages/Home/Home'
import Dashboard from './pages/Dashboard/Dashboard';
import ViewStudent from './pages/Students/ViewStudent';
import AddStudent from './pages/Students/AddStudent';
import UpdateStudent from './pages/Students/UpdateStudent';
import AddLecturer from './pages/Lecturer/AddLecturer';
import UpdateLecturer from './pages/Lecturer/UpdateLecturer';
import ViewLecturers from './pages/Lecturer/ViewLecturers';
import CreateSchedule from './pages/Schedules/CreateSchedule';
import ViewTodaySchedule from './pages/Schedules/ViewTodaySchedule';
import ViewFullSchedule from './pages/Schedules/ViewFullSchedule';

function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route exact  path ="" element = {<Home/>}/>
      <Route exact  path ="/app" element = {<Dashboard/>}/>

      <Route exact  path ="/app/student" element = {<ViewStudent/>}/>
      <Route exact  path ="/app/student/addNew" element = {<AddStudent/>}/>
      <Route exact  path ="/app/student/editStudent" element = {<UpdateStudent/>}/>

      <Route exact  path ="/app/Lecturer" element = {<ViewLecturers/>}/>
      <Route exact  path ="/app/Lecturer/AddLecturer" element = {<AddLecturer/>}/>
      <Route exact  path ="/app/Lecturer/editLecturer" element = {<UpdateLecturer/>}/>

      <Route exact  path ="/app/Schedule/createSchedule" element = {<CreateSchedule/>}/>
      <Route exact  path ="/app/Schedule/today" element = {<ViewTodaySchedule/>}/>
      <Route exact  path ="/app/Schedule/ViewFullSchedule" element = {<ViewFullSchedule/>}/>

    </Routes>
    </>
  );
}

export default App;
