import Dashboard from "./pages/dashboard/Dashboard";
import TopBar from "./components/topbar/TopBar";
import Sidebar from "./components/sidebar/Sidebar";
import AddDesign from "./pages/spectacle/addDesign/AddDesign";
import AllDesign from "./pages/spectacle/allDesign/AllDesign";
import AddCustomDesign from "./pages/spectacle/addCustomDesign/AddCustomDesign";
import CustomDesigns from "./pages/spectacle/customDesigns/CustomDesigns";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";
// import { Context } from "./context/Context";
import { ToastContainer } from 'react-toastify';

import "./style.css";

function App() {
  // const { user } = useContext(Context);
  const [isActive, setActive] = useState(false);

  return (
    <Router>
      <ToastContainer />
      <TopBar setActive={setActive} isActive={isActive} />
      <div id="wrapper" className="d-flex col-md-12">
        <Sidebar setActive={setActive} isActive={isActive} />
        <div id="content-wrapper" >
          <Switch>
            <Route path="/app/dashboard"><Dashboard /></Route>
            <Route path="/app/new-design"><AddDesign /></Route>
            <Route path="/app/new-custom-design"><AddCustomDesign /></Route>
            <Route path="/app/custom-design"><CustomDesigns /></Route>
            <Route path="/app/designs"><AllDesign /></Route>
            {/* <Route path="/login">{user ? <Dashboard /> : <Login />}</Route>
          <Route path="/write">{user ? <Write /> : <Register />}</Route> */}
          </Switch>
        </div>
      </div>
    </Router >
  );
}

export default App;
