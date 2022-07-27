import React,{useEffect} from "react";
import "./style.scss";
import Header from "../../components/header";
import { Link } from "react-router-dom";
import Footer from "../../components/footer";
import analytics from "../../firebase";
import ReactGA from "react-ga";
const EssenceTokenomics = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  
  analytics
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      {/* <section className="ettitlebox light"> */}
      <section className="btitlebox light zoning_psudeo">
        <div className="container">
       
          <div className="row justify-content-center">
          <div className="col-12  col-lg-8 text-center">
              <h1>Essence Tokenomics</h1>
            </div>
            <div className="col-12">
              {/* <div className="section_divider"></div> */}
              <div className="section_divider zoning_divide_top"></div>
            </div>
           
            <div className="col-12">
              {/* <div className="section_divider zoning_divide_bottom es_section_divide "></div> */}
              <div className="section_divider zoning_divide_bottom "></div>
            </div>
          </div>
        </div>
      </section>
      <section className="tokenwelcome_box light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 ">
              <div className="pointerimage">
                <img src="images/media14.jpg" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
export default EssenceTokenomics;
