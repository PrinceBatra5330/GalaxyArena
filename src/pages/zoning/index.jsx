import React, { useState, useEffect } from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import "../zoning/style.scss";

const Zoing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="App">
      <Header />
      <section className="btitlebox light zoning_psudeo">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="section_divider zoning_divide_top"></div>
            </div>
            <div className="col-12  col-lg-8 text-center">
              <h1>Galaxy Arena Metaverse Zoning</h1>
            </div>
            <div className="col-12">
              <div className="section_divider zoning_divide_bottom d-none d-lg-block"></div>
            </div>
          </div>
        </div>
      </section>
      <section className="welcome_box light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 ">
              <div className="pointerimage">
                <img src="images/newslider/galaxyarenacloseview.png" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-lg-12">
              <h1 className="" id="arena">
                The Arena
              </h1>
              <p>
                Galaxy Arena’s 30.000 square meters of explorable digital space
                are divided in floors, each with its own unique amenities,
                attractions and functionalities with the arena as the focal
                point. Opening its doors in May 2022, galaxy arena venue already
                exists and currently offers a number of immersive VR experiences
                including a virtual reality space for real world celebrity
                concerts, fighting events and a stage that can be used for stand
                up performances. We plan to unlocks new revenue streams for
                music artists and creators, offering a brand-new way to directly
                reach and monetise their fanbase.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="slideection light">
        <div className="container">
          <div className="row mt-5">
            <div className="col-md-12">
              <div className="alfa">
                <div className="">
                  <img
                    src="images/slides/11.jpeg"
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
                <div className="">
                  <img
                    src="images/slides/11.jpeg"
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
                <div className="">
                  <img
                    src="images/slides/11.jpeg"
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <hr className="seperator" />
      <section className="slideection light videoImage-slider">
        <div className="container">
          <div className="row">
            <div className="col-md-8 mx-auto">
              <div
                id="carouselExampleControls1"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <video
                      playsInline
                      controls="{false}"
                      autoPlay="{autoplay}"
                      className="framevideo"
                      loop
                      muted
                    >
                      <source
                        src="https://galaxyarena.io/files/Zoning EXT.mp4"
                        type="video/mp4"
                      />
                    </video>
                  </div>
                  <div className="carousel-item">
                    <img
                      src="images/newslider/sectorentrance.png"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="images/newslider/Teleportationsphere.png"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="images/newslider/Upperringloors.png"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="images/newslider/redlaserbig.png"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="images/newslider/whitelaserversion.png"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="images/newslider/bluelaser.png"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                </div>
                <button
                  className="carousel-control-prev slider-btn-cusome"
                  type="button"
                  data-bs-target="#carouselExampleControls1"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next slider-btn-cusome"
                  type="button"
                  data-bs-target="#carouselExampleControls1"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="gymsection light" id="gym">
        <div className="container">
          <div className="row mt-5 justify-content-center">
            <div className="col-12  col-lg-9  text-center">
              <h1>The Gym</h1>
              {/* <h3>Coming Soon</h3> */}
              <p>
                Galaxy Arena’s state of the art gym provides an array of health
                and fitness games where players can stay fit and get paid.
                Instead of a hefty price tag that comes with almost any gym
                membership, we pay you.That’s right! Our groundbreaking concept
                has found a way to motivate people to workout. With our own
                twist to the very popular play to earn model “train to earn”
                promises to keep users coming back for more.
              </p>
              <p>Come in, join the action and TRAIN-TO-EARN.</p>
            </div>
            <section className="slideection light videoImage-slider mt-5">
              <div className="row align-items-center">
                <div className="col-md-8">
                  <div
                    id="carouselExampleControls2"
                    className="carousel slide"
                    data-bs-ride="carousel"
                  >
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <video
                          playsInline
                          controls="{false}"
                          autoPlay="{autoplay}"
                          className="framevideo"
                          loop
                          muted
                        >
                          <source
                            src=" https://galaxyarena.io/files/tower.mp4"
                            type="video/mp4"
                          />
                        </video>
                      </div>
                      <div className="carousel-item">
                        <img
                          src="images/newslider/1.png"
                          className="d-block w-100"
                          alt="..."
                        />
                      </div>
                      <div className="carousel-item">
                        <img
                          src="images/newslider/2.png"
                          className="d-block w-100"
                          alt="..."
                        />
                      </div>
                      <div className="carousel-item">
                        <img
                          src="images/newslider/3.png"
                          className="d-block w-100"
                          alt="..."
                        />
                      </div>
                      <div className="carousel-item">
                        <img
                          src="images/newslider/4.png"
                          className="d-block w-100"
                          alt="..."
                        />
                      </div>
                      <div className="carousel-item">
                        <img
                          src="images/newslider/6.png"
                          className="d-block w-100"
                          alt="..."
                        />
                      </div>
                      <div className="carousel-item">
                        <img
                          src="images/newslider/9.png"
                          className="d-block w-100"
                          alt="..."
                        />
                      </div>
                    </div>
                    <button
                      className="carousel-control-prev slider-btn-cusome"
                      type="button"
                      data-bs-target="#carouselExampleControls2"
                      data-bs-slide="prev"
                    >
                      <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                      ></span>
                      <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                      className="carousel-control-next slider-btn-cusome"
                      type="button"
                      data-bs-target="#carouselExampleControls2"
                      data-bs-slide="next"
                    >
                      <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                      ></span>
                      <span className="visually-hidden">Next</span>
                    </button>
                  </div>
                </div>
                <div className="col-md-4 col-md-4 mb-5">
                  <div className="text-center">
                    <em>July 2022</em>
                    <h3>COMING SOON</h3>
                    <p>Boxing ring</p>
                    <p>Octagon</p>
                    <p>Punching bags</p>
                    <p>Glass climbing wall</p>
                    <p>Private training studios</p>
                    <p>Run track</p>
                    <p>Sport activity games</p>
                    <p>Pool</p>
                    <p>Garden (relaxation & stretching area)</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
      <section className="gymsection light mt-5" id="tower">
        <div className="container">
          <div className="row  justify-content-center">
            <div className="col-12  col-lg-9  text-center">
              <h1>The Tower</h1>
              {/* <h3>Coming Soon</h3> */}
              <p>
                Try your luck in the celestial casino or own you piece of
                virtual real estate within this architectural marvel.
              </p>
            </div>
            <section className="slideection light videoImage-slider mt-5">
              <div className="row align-items-center">
                <div className="col-md-8">
                  <div
                    id="carouselExampleControls3"
                    className="carousel slide"
                    data-bs-ride="carousel"
                  >
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <img
                          src="images/newslider/DMX1.png"
                          className="d-block w-100"
                          alt="..."
                        />
                      </div>
                      <div className="carousel-item">
                        <img
                          src="images/newslider/DMX2.png"
                          className="d-block w-100"
                          alt="..."
                        />
                      </div>
                      <div className="carousel-item">
                        <img
                          src="images/newslider/DMX3.png"
                          className="d-block w-100"
                          alt="..."
                        />
                      </div>
                    </div>
                    <button
                      className="carousel-control-prev slider-btn-cusome"
                      type="button"
                      data-bs-target="#carouselExampleControls3"
                      data-bs-slide="prev"
                    >
                      <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                      ></span>
                      <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                      className="carousel-control-next slider-btn-cusome"
                      type="button"
                      data-bs-target="#carouselExampleControls3"
                      data-bs-slide="next"
                    >
                      <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                      ></span>
                      <span className="visually-hidden">Next</span>
                    </button>
                  </div>
                </div>
                <div className="col-md-4 mb-5">
                  <div className="text-center">
                    <em>July 2022</em>
                    <h3>COMING SOON</h3>
                    <p>Celestial casino</p>
                    <p>Galactic planetarium</p>
                    <p>Lounge areas</p>
                    <p>Luxury suites</p>
                    <p>Rooms</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Zoing;
