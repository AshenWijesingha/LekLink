import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useContext, useState } from "react";
// import { Context } from "./context/Context";
import { ToastContainer } from 'react-toastify';

import Home from "./pages/home/Home";
import Shop from "./pages/shop/Shop";
import Single from "./pages/single/Single";
import CusSpectacle from "./pages/cusSpectacle/CusSpectacle";

function App() {
  // const { user } = useContext(Context);

  return (
    <Router>
      <ToastContainer />
      <Switch>
        <Route path="/cusSpectacle"><CusSpectacle /></Route>
        <Route path="/spectacle/:id"><Single /></Route>
        <Route path="/shop"><Shop /></Route>
        <Route path="/"><Home /></Route>
        {/* <Route path="/login">{user ? <Dashboard /> : <Login />}</Route>
          <Route path="/write">{user ? <Write /> : <Register />}</Route> */}
      </Switch>
    </Router >
  );
}

export default App;
