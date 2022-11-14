import React, { useState, useEffect } from "react";
import Home from "./pages/home";
import analytics from "./firebase";
import PrivacyPolicy from "./pages/Privacy-Policy";
import PrivateSale from "./pages/privatesale";
import TeamInfo from "./pages/teaminfo";
import { HashRouter, Routes, Route } from "react-router-dom";
import Simplex from "./pages/simplex";
import Zoning from "./pages/zoning";
import { createBrowserHistory } from "history";
import "./App.css";
import ReactGA from "react-ga";
import { ToastContainer } from "react-toastify";

export const history = createBrowserHistory();

history.listen((location) => {
  ReactGA.pageview(location);
});

const App = () => {
  analytics;
  const [user, setUsers] = useState("");
  useEffect(() => {
    var data = JSON.parse(localStorage.getItem("user"));
    setUsers(data);
  }, []);

  useEffect(() => {
    // ReactGA.initialize('G-EZP9RMR1HD')
    ReactGA.initialize("G-RS9YTDYF6C");
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <div>
      <HashRouter history={history}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/contact-us" element={<PrivateSale />} />
          <Route exact path="/teaminfo/:id" element={<TeamInfo />} />
          <Route exact path="/simplex" element={<Simplex />} />
          <Route exact path="/zoning" element={<Zoning />} />
          <Route exat path="/privacypolicy" element={<PrivacyPolicy />} />
        </Routes>
      </HashRouter>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        pauseOnFocusLoss={false}
        closeOnClick
        rtl={false}
        draggable
        theme="colored"
      />
    </div>
  );
};

export default App;
