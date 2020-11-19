import React, { useState, createRef } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import { AuthContext } from "./context/auth";
import { SnackbarProvider } from "notistack";

import Dashboard from "./pages/Dashboard";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

function App() {
  const notistackRef = createRef();
  const tokenKey = "resonance-auth-token";
  const storedAuthToken = JSON.parse(localStorage.getItem(tokenKey));
  const [authToken, setAuthToken] = useState(storedAuthToken);

  const setToken = (payload) => {
    localStorage.setItem(tokenKey, JSON.stringify(payload));
    setAuthToken(payload);
  };

  return (
    <AuthContext.Provider value={ { authToken: authToken, setAuthToken: setToken } }>
      <SnackbarProvider ref={ notistackRef } maxSnack={ 5 } dense>
        <BrowserRouter>
          <Switch>
            <PrivateRoute path="/dashboard" component={ Dashboard } />
            <Route path="/sign-up" component={ SignUp } />
            <Route path="/" exact component={ SignIn } />
          </Switch>
        </BrowserRouter>
      </SnackbarProvider>
    </AuthContext.Provider>
  );
};

export default App;