import "./helper/authService";

import React, { useEffect, useState } from "react";
import {
  Route,
  Redirect,
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";

import Footer from "./components/common/footer/Footer";
import { GlobalContext } from "./config/GlobalContext";
import Login from "./components/login/Login";
import Navbar from "./components/navbar/Navbar";
import Register from "./components/register/Register";
import Root from "./components/Root";

import { withAuthenticator } from "aws-amplify-react";

const App = () => {
  const [global, setGlobal] = useState({});

  useEffect(() => {
    const ls = localStorage.getItem("global");
    ls && setGlobal(JSON.parse(ls));
  }, []);

  const AppBottom = {
    marginBottom: "-36px",
  };

  return (
    <>
      <Router>
        <GlobalContext.Provider value={[global, setGlobal]}>
          <Navbar />
          <div>
            <div className="App" style={AppBottom}>
              <Switch>
                {global.user ? (
                  <Route path="/" exact component={Root} />
                ) : (
                  <Route path="/" exact component={Login} />
                )}
                <Route path="/register" exact component={Register} />
              </Switch>
              {/*<Redirect to={global.route ? global.route : '/'} />*/}
            </div>
          </div>
          <Footer />
        </GlobalContext.Provider>
      </Router>
    </>
  );
};

export default App;
