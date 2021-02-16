import React from "react";
import Dashboard from "./Components/Dashboard/Dashboard";
import Login from "./Components/Login/Login";
import NotFound from "./Components/NotFound";
import PrivareRoute from "./Private";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Register from "./Components/Register/Register";
import FullLayout from "./Components/Layout";
import DisplayDish from "./Components/DisplayDish";
import AddDish from "./Components/AddDish";
import EditItem from "./Components/EditItem";

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/register" component={Register} />
      <FullLayout>
        <Route exact path="/items" component={DisplayDish} />
        <Route exact path="/add" component={AddDish} />

        <Route exact path="/dashboard" component={Dashboard} />

        <Route exact path="/edit/:id" component={EditItem} />

        {/* <PrivareRoute component={Dashboard} path="/Dashboard" /> */}
      </FullLayout>
      <Route path="/*">
        <NotFound />
      </Route>
    </Switch>
  </Router>
);

export default Routes;
