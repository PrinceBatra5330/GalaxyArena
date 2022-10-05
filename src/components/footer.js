import React from "react";

const Footer = () => {
  return (
    <>
      <section className="webMain-footer pb-0 font-link">
        <div className="footer-blackbg-section">
          <div className="container">
            <div className="row">
              <div className="col-md-8 mx-auto">
                <div className="footerinner-section">
                  <h2>Get more out of Galaxy Arena</h2>
                  <div className="col-md-12 text-center">
                    <div className="footer-img-section">
                      <img src="./assets/img/logo.svg" />
                    </div>
                  </div>
                  <div className="col-md-8 mx-auto  ">
                    <div className="footer-contact-us">
                      <h3>Contact us</h3>
                      <p className="">
                        Galaxy Arena Metaverse P.C, Dimitriou Gounari 227,
                        Glifada, Athens, Greece 16674, Tel : +302109641114{" "}
                      </p>
                      <p>Email: Admin@galaxyarena.io </p>
                      <p>Company reg #163302103000, Tax # 801786471</p>
                    </div>
                  </div>
                  <div className="col-md-5 mx-auto">
                    {/* <div className="footer-social-media-icon">
                      <ul>
                        <li>
                          <a
                            href="https://mobile.twitter.com/galaxyarena_io"
                            target="_blank"
                          >
                            <i className="fa fa-twitter social-icon"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.instagram.com/galaxyarena.io/?utm_medium=copy_link"
                            target="_blank"
                          >
                            <i className="fa fa-instagram social-icon"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.youtube.com/channel/UCodR03tMbhseYaVS33SbKFA"
                            target="_blank"
                          >
                            <i
                              className="fa fa-youtube-play social-icon"
                              aria-hidden="true"
                            ></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.linkedin.com/company/galaxy-arena"
                            target="_blank"
                          >
                            <i
                              className="fa fa-linkedin"
                              style={{
                                backgroundColor: "white",
                                height: "20px",
                                width: "20px",
                                textAlign: "center",
                                marginTop: "10px",
                              }}
                            >
                              {" "}
                            </i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://discord.com/invite/xCBEnjGkNN"
                            target="_blank"
                          >
                            <img src="./assets/img/discord-logo.png" alt="" style={{textAlign: "center"}}/>
                          </a>
                        </li>
                      </ul>
                    </div> */}
                    <section className="footer-social-media-icon">
                    <div className="footer-social-media-icon">
                        <ul>
                          <li>
                            <a
                              href="https://mobile.twitter.com/galaxyarena_io"
                              target="_blank"
                            >
                              <img
                                src="./assets/img/logos/twiter.jpg"
                                alt=""
                                style={{ borderRadius: "20px" }}
                              />
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://www.instagram.com/galaxyarena.io/?utm_medium=copy_link"
                              target="_blank"
                            >
                              <img
                                src="./assets/img/logos/instagram.jpg"
                                alt=""
                                style={{ borderRadius: "20px" }}
                              />
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://www.youtube.com/channel/UCodR03tMbhseYaVS33SbKFA"
                              target="_blank"
                            >
                              <img
                                src="./assets/img/logos/youtube.jpg"
                                alt=""
                                style={{ borderRadius: "20px" }}
                              />
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://discord.com/invite/xCBEnjGkNN"
                              target="_blank"
                            >
                              <img
                                src="./assets/img/logos/discord.jpg"
                                alt=""
                                style={{ borderRadius: "20px" }}
                              />
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://www.linkedin.com/company/galaxy-arena"
                              target="_blank"
                            >
                              <img
                                src="./assets/img/linkedin.jpg"
                                alt=""
                                style={{ borderRadius: "20px" }}
                              />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
