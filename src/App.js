import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import { AuthContext } from "./context/auth"
import Dashboard from "./pages/Dashboard";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

function App() {
  const tokenKey = "resonance-auth-token";
  const storedAuthToken = JSON.parse(sessionStorage.getItem(tokenKey));
  const [authToken, setAuthToken] = useState(storedAuthToken);

  const setToken = (payload) => {
    localStorage.setItem(tokenKey, JSON.stringify(payload));
    setAuthToken(payload);
  };

  return (
    <AuthContext.Provider value={ { authToken: authToken, setAuthToken: setToken } }>
      <BrowserRouter>
        <Switch>
          <PrivateRoute path="/dashboard" component={ Dashboard } />
          <Route path="/sign-up" component={ SignUp } />
          <Route path="/" exact component={ SignIn } />
        </Switch>
      </BrowserRouter>
    </AuthContext.Provider>
  );
};

export default App;