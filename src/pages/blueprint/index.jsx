import React from "react";
import "./style.scss";
import Header from "../../components/header";
import Footer from "../../components/footer";
const Blueprint = () => {
  return (
    <>
      <Header />
      <section className="btitlebox light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="section_divider"></div>
            </div>
            <div className="col-12  col-lg-8 text-center">
              <h1>Metaverse Arena Blueprints</h1>
            </div>
            <div className="col-12">
              <div className="section_divider d-none d-lg-block"></div>
            </div>
          </div>
        </div>
      </section>
      <section className="blureprint_media light">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <iframe
                className="blueptintvideo"
                src="https://www.youtube.com/embed/xwh-WHTp2RY"
                title=""
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      <section className="blureprint_media light">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div
                id="carouselExampleControls"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src="images/s1.jpeg" className="d-block w-100" />
                  </div>
                  <div className="carousel-item">
                    <img src="images/s2.jpeg" className="d-block w-100" />
                  </div>
                  <div className="carousel-item">
                    <img src="images/s3.jpeg" className="d-block w-100" />
                  </div>
                  <div className="carousel-item">
                    <img src="images/s5.jpeg" className="d-block w-100" />
                  </div>
                  <div className="carousel-item">
                    <img src="images/s7.webp" className="d-block w-100" />
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleControls"
                  data-bs-slide="prev"
                >
                  <div className="arrowbox">
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                  </div>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleControls"
                  data-bs-slide="next"
                >
                  <div className="arrowbox">
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                  </div>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
export default Blueprint;
