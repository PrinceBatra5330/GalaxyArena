import React, { useEffect } from "react";
import AOS from "aos";
import Header from "../../components/header";
import Footer from "../../components/footer";
import "aos/dist/aos.css";

const PrivateSale = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
    <Header/>
      <section className="contact-page-section">
        <div className="container">
          <div className="row mt-5 mb-4">
            <div className="col-md-9 mx-auto text-center">
              <div className="col-md-12 text-center">
                <div
                  className="footer-img-section"
                  style={{
                    backgroundColor: "black",
                    borderRadius: " 10px",
                    height: "80%",
                    width: "20%",
                    display: " inline-block"
                  }}
                >
                  <img src="./assets/img/logo.svg" />
                </div>
              </div>
              <div className="contact-page-sec">
                <h1
                  className="jps"
                  id="private-sale"
                  data-aos="zoom-out-left"
                  data-aos-duration="1500"
                >
                  Contact Us
                </h1>
                <p className="">
                  Galaxy Arena Metaverse P.C, Dimitriou Gounari 227, Glifada,
                  Athens, Greece 16674, Tel : +302109641114{" "}
                </p>
                <p>Email: Admin@galaxyarena.io </p>
                <p>Company reg #163302103000, Tax # 801786471</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default PrivateSale;
