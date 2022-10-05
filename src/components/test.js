import React, { useEffect, useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "./style.css";
const NewHeader = () => {
  const navigate = useNavigate();
  const [docsModalShow, SetDocsModalShow] = useState("");
  const [teamModalShow, SetTeamModalShow] = useState("");
  const [tockModalShow, SetTeamTockShow] = useState("");
  const [joinModalShow, SetJoinModelShow] = useState("");

  const changeDocsModalStatus = () => {
    if (docsModalShow == "show") {
      SetDocsModalShow("");
    } else {
      SetDocsModalShow("show");
    }
  };

  const changeTeamModalStatus = () => {
    if (teamModalShow == "show") {
      SetTeamModalShow("");
    } else {
      SetTeamModalShow("show");
    }
  };

  const changeJoinModalStatus = () => {
    if (joinModalShow == "show") {
      SetJoinModelShow("");
    } else {
      SetJoinModelShow("show");
    }
  };

  const changeTockModalStatus = () => {
    if (tockModalShow == "show") {
      SetTeamTockShow("");
    } else {
      SetTeamTockShow("show");
    }
  };

  const handler = () => {
    navigate("/simplex");
    window.location.reload();
  };
  return (
    <>
      <section className="webMain-header">
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <a className="navbar-brand" href="./index.html">
              <div className="webLogo">
                <img className="img-fluid" src="./assets/img/logo.svg" />
              </div>
            </a>
            <button
              className="navbar-toggler web-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fa fa-bars barMenu" aria-hidden="true"></i>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav webnavbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to="/" className="nav-link active" aria-current="page">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/zoning" className="nav-link" aria-current="page">
                    Zoning
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className={`nav-link dropdown-toggle dropdown-toggleWeb  ${tockModalShow} `}
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="true"
                    onClick={changeTockModalStatus}
                  >
                    Tokenomics
                  </a>
                  <ul
                    className={`dropdown-menu ${tockModalShow} `}
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <HashLink className="dropdown-item" to="/#tockenomics">
                        Tokenomics
                      </HashLink>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  {/* <a className ="nav-link dropdown-toggle dropdown-toggleWeb" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" > */}
                  <a
                    className={`nav-link dropdown-toggle dropdown-toggleWeb  ${docsModalShow} `}
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="true"
                    onClick={changeDocsModalStatus}
                  >
                    Docs
                  </a>
                  <ul
                    className={`dropdown-menu ${docsModalShow} `}
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <a className="dropdown-item" href="https://www.canva.com/design/DAFJZxL45J8/FOpduH4bBPnJiOOdLcj89g/view?utm_content=DAFJZxL45J8&utm_campaign=designshare&utm_medium=link&utm_source=publishpresent#1"  target="_blank">
                        Pitch Deck
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        target="_blank"
                        href="https://galaxyarena.io/files/TechRate.pdf"
                      >
                        Audit
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        target="_blank"
                        href="https://github.com/GalaxyArena2/GalaxyArena-core"
                      >
                        Github
                      </a>
                    </li>
                    <li>
                      <Link to="/privacypolicy" className="dropdown-item">
                        Privacy Policy
                      </Link>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        target="_blank"
                        href="https://www.canva.com/design/DAFKSVM8bMo/iEnik4yf3PPwTBme3LAgYQ/view?utm_content=DAFKSVM8bMo&utm_campaign=designshare&utm_medium=link&utm_source=publishpresent"
                      >
                        White Paper
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="nav-item dropdown">
                  {/* <a className ="nav-link dropdown-toggle dropdown-toggleWeb" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"
                   > */}
                  <a
                    className={`nav-link dropdown-toggle dropdown-toggleWeb  ${teamModalShow} `}
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="true"
                    onClick={changeTeamModalStatus}
                  >
                    Our Team
                  </a>
                  <ul
                    className={`dropdown-menu ${teamModalShow} `}
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <HashLink className="dropdown-item" to="/#team">
                        Team
                      </HashLink>
                    </li>

                    <li>
                      <HashLink className="dropdown-item" to="/#affiliates">
                        Afflites
                      </HashLink>
                    </li>
                  </ul>
                </li>
                <li className="nav-item nav-itemBtn me-2">
                  <a
                    className="nav-link"
                    aria-current="page"
                    href="#"
                    onClick={handler}
                  >
                    Buy Crypto Now
                  </a>
                </li>
                <div className="web-desktop d-flex">
                  <li className="nav-item nav-itemBtn ">
                    <a
                      className="nav-link "
                      aria-current="page"
                      href="#"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      data-bs-whatever="@mdo"
                    >
                      Connect Wallet
                    </a>
                  </li>
                  <li className="nav-item dropdown webDots-ellipies">
                    <a
                      className={`nav-link dropdown-toggle  ${joinModalShow} `}
                      href="#"
                      id="navbarDropdown"
                      onClick={changeJoinModalStatus}
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
                    </a>
                    <ul
                      className={`dropdown-menu ${joinModalShow} `}
                      aria-labelledby="navbarDropdown"
                    >
                      {/* <li>
                        <Link to="/joinprivatesale" className="dropdown-item">
                          Join private sale
                        </Link>
                      </li> */}
                      <li>
                        <Link className="dropdown-item" to="/contact-us">
                          Contact us
                        </Link>
                      </li>
                    </ul>
                  </li>
                </div>
                <div className="web-mobile">
                  <li className="nav-item dropdown webDots-ellipies">
                    <a
                      className="nav-link dropdown-toggle dropdown-toggleWeb"
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      More Info
                    </a>
                    <ul
                      className="dropdown-menu "
                      aria-labelledby="navbarDropdown"
                    >
                      <li>
                        <Link className="dropdown-item" to="/contact-us">
                          Contact us
                        </Link>
                      </li>
                    </ul>
                  </li>
                  {/* <li
                    className="nav-item nav-itemBtn "
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    data-bs-whatever="@mdo"
                  >
                    Connect Wallet
                  </li> */}
                  
                </div>
              </ul>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
};

export default NewHeader;
