import React, { useEffect, useState } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import airtableBase from "./plugins/airtablePlugin";
import LayoutHeader from "./components/Layout.Header";

import ProductsCatalog from "./pages/ProductsCatalog";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

function App() {
  const [users, setUsers] = useState([]);

  const constructUser = (record) => {
    return {
      firstName: record.get("First Name"),
      lastName: record.get("Last Name"),
      user: record.get("username"),
      email: record.get("email"),
      password: record.get("Password")
    };
  };

  useEffect(() => {
    airtableBase("Users")
      .select({ view: "Grid view" /* Load all fields */})
      .eachPage((records, fetchNextPage) => {
        setUsers(records.map(record => constructUser(record)))
        fetchNextPage();
      })
  }, []);

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={ (props) => <ProductsCatalog props={ props } /> } />
        <Route path="/sign-up" component={ SignUp } />
        <Route path="/sign-in" component={ () => <SignIn availableUsers={ users } /> } />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
