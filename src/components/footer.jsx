import React from "react";
import { HashLink } from "react-router-hash-link";
const Footer = () => {
  return (
    <>
      <footer className="footer_box light" id="contact">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="footer_logo">
                <img src="/images/logo.png" />
                <p>Ready to see what’s beyond Earth?</p>
              </div>
            </div>
            <div className="col-12 ">
              <h3>Contact us</h3>
              <div className="address_box">
                <p>Galaxy Arena Metaverse P.C, Dimitriou Gounari 227,</p>
                <p>Glifada, Athens, Greece 16674, Tel : +302109641114</p>
                <p>Email: Admin@galaxyarena.io</p>
                <p>Company reg #163302103000, Tax # 801786471</p>
              </div>
            </div>
            <div className="col-12 ">
              <div className="address_box">
                <ul>
                  <li>
                    <a href="https://mobile.twitter.com/galaxyarena_io/">
                      <div className="soicalicon">
                        <i className="bi bi-twitter"></i>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="https://instagram.com/galaxyarena.io?utm_medium=copy_link">
                      <div className="soicalicon">
                        <i className="bi bi-instagram"></i>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="https://discord.gg/rarhPDw5YT">
                      <div className="soicalicon">
                        <i className="bi bi-discord"></i>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="https://t.me/galaxyarenatg">
                      <div className="soicalicon">
                        <i className="bi bi-telegram"></i>
                      </div>
                    </a>
                  </li>
                </ul>
                <p>Galaxy Arena &copy; 2022 All rights reserved</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <HashLink to ="#header">
        <div className="redirectionbox" id="redirectionbox">
          <i className="bi bi-chevron-up"></i>
        </div>
      </HashLink>
    </>
  );
};

export default Footer;
