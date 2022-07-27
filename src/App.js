import React, { useState, useEffect } from "react";
import Home from "./pages/home";
import analytics from "./firebase";
import Blueprint from "./pages/blueprint";
import EssenceTokenomics from "./pages/EssenceTokenomics";
import PrivateSale from "./pages/privatesale";
import Teaminfo from "./pages/teaminfo";
import Features from "./pages/features";
import Content from "./pages/policies/content";
import Privacy from "./pages/policies/privacy";
import Termsofuse from "./pages/policies/terms";
import { BrowserRouter, HashRouter, Routes, Route} from "react-router-dom";
import Simplex from "./pages/simplex";
import Zoning from "./pages/zoning";
import Nft from "./pages/Nft";
import { createBrowserHistory } from 'history';
import "./App.css";
import ReactGA from "react-ga";
export const history = createBrowserHistory();

history.listen((location) => {
	ReactGA.pageview(location);

});

const App = () => {
  analytics
  const [user, setUsers] = useState("");
  useEffect(() => {
    var data = JSON.parse(localStorage.getItem("user"));
    setUsers(data);
  }, []);

  useEffect(()=>{
    // ReactGA.initialize('G-EZP9RMR1HD')
    ReactGA.initialize ("G-RS9YTDYF6C")
    ReactGA.pageview(window.location.pathname + window.location.search);
  },[])
  
  return (
    <div>
      <HashRouter history={history}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/blurprint" element={<Blueprint />} />
          <Route
            exact
            path="/essencetokenomics"
            element={<EssenceTokenomics/>}
          />
          <Route exact path="/privatesale" element={<PrivateSale />} />
          <Route exact path="/team_detail/:id" element={<Teaminfo />} />
          <Route exact path="/features" element={<Features />} />
          <Route exact path="/content" element={<Content />} />
          <Route exact path="/privacy" element={<Privacy />} />
          <Route exact path="/teamsofuse" element={<Termsofuse />} />
          <Route exact path="/simplex" element={<Simplex />} />
          <Route exact path="/zoning" element={<Zoning />} />
          <Route exat path="/nft" element={<Nft />} />
        </Routes>
      </HashRouter>
    </div>
  );
};

export default App;
