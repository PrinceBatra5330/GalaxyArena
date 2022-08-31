// import React, { useEffect, useState } from "react";
// import { VStack, Text, HStack } from "@chakra-ui/react";
// import { HashLink } from "react-router-hash-link";
// import { CopyToClipboard } from "react-copy-to-clipboard";
// import { NavLink, Link, useNavigate } from "react-router-dom";
// import $ from "jquery";
// import { ethers } from "ethers";
// import Web3Modal from "web3modal";
// import { providerOptions } from "../providerOptions";
// const web3Modal = new Web3Modal({
//   cacheProvider: true, // optional
//   providerOptions, // required
// });

// const Header = () => {
  // const navigate = useNavigate();
  // const [text, setText] = useState("");
  // const [isCopied, setIsCopied] = useState(false);
  // const [open, setOpen] = useState(false);
  // const [isOpened, setIsOpened] = useState(false);
  // const [provider, setProvider] = useState();
  // const [library, setLibrary] = useState();
  // const [account, setAccount] = useState();
  // const [error, setError] = useState("");
//   useEffect(() => {
//     const data = document.getElementById("WEB3_CONNECT_MODAL_ID");
//     $("body").click(function (event) {
//       $("#WEB3_CONNECT_MODAL_ID").click(function () {
//         console.log(data);
//         $(".web3modal-modal-lightbox").hide();
//       });
//     });
//     $("#connect_cardbtn").click(function () {
//       if (data) {
//         $(".web3modal-modal-lightbox").show();
//         console.log("show", data);
//       } else {
//         $(".web3modal-modal-lightbox").hide();
//         console.log("hide", data);
//       }
//     });
//   }, []);

//   function toggle() {
//     setIsOpened((wasOpened) => !wasOpened);
//   }
  // const connectWallet = async () => {
  //   try {
  //     const provider = await web3Modal.connect();
  //     const library = new ethers.providers.Web3Provider(provider);
  //     const accounts = await library.listAccounts();
  //     const network = await library.getNetwork();
  //     setProvider(provider);
  //     setLibrary(library);
  //     if (accounts) setAccount(accounts[0]);
  //     setChainId(network.chainId);
  //   } catch (error) {
  //     setError(error);
  //   }
  // };

  // const refreshState = () => {
  //   setAccount();
  //   setChainId();
  //   setMessage("");
  //   setSignature("");
  //   setVerified(undefined);
  // };

  // const disconnect = async () => {
  //   await web3Modal.clearCachedProvider();
  //   refreshState();
  // };

  // useEffect(() => {
  //   if (web3Modal.cachedProvider) {
  //     connectWallet();
  //   }
  // }, []);

  // useEffect(() => {
  //   if (provider?.on) {
  //     const handleAccountsChanged = (accounts) => {
  //       console.log("accountsChanged", accounts);
  //       if (accounts) setAccount(accounts[0]);
  //     };
  //     const handleChainChanged = (_hexChainId) => {
  //       setChainId(_hexChainId);
  //     };
  //     const handleDisconnect = () => {
  //       console.log("disconnect", error);
  //       disconnect();
  //     };
  //     provider.on("accountsChanged", handleAccountsChanged);
  //     provider.on("chainChanged", handleChainChanged);
  //     provider.on("disconnect", handleDisconnect);
  //     return () => {
  //       if (provider.removeListener) {
  //         provider.removeListener("accountsChanged", handleAccountsChanged);
  //         provider.removeListener("chainChanged", handleChainChanged);
  //         provider.removeListener("disconnect", handleDisconnect);
  //       }
  //     };
  //   }
  // }, [provider]);
//   const copyText = () => {
//     setOpen(true);
//     navigator.clipboard.writeText(account);
//   };

//   const onCopyText = () => {
//     setIsCopied(true);
//     setTimeout(() => {
//       setIsCopied(false);
//     }, 1000);
//   };

//   const handler = () => {
//     navigate("/simplex");
//     window.location.reload();
//   };

//   return (
//     <>
//       <div className="header" id="header">
//         <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
//           <div className="container-fluid">
//             <NavLink to="/" className="navbar-brand">
//               <img src="/images/logo.png" />
//             </NavLink>
//             <button
//               className="navbar-toggler"
//               type="button"
//               data-bs-toggle="collapse"
//               data-bs-target="#navbarSupportedContent"
//               aria-controls="navbarSupportedContent"
//               aria-expanded="false"
//               aria-label="Toggle navigation"
//             >
//               <span className="navbar-toggler-icon"></span>
//             </button>
//             <div
//               className="collapse navbar-collapse align-items-center"
//               id="navbarSupportedContent"
//             >
//               <ul className="navbar-nav ms-auto align-items-center">
//                 <li className="nav-item">
//                   <NavLink to="/" className="nav-link">
//                     Home
//                   </NavLink>
//                 </li>
//                 <li className="nav-item">
//                   <NavLink to="/zoning" className="nav-link">
//                     Zoning
//                   </NavLink>
//                 </li>
//                 <li className="nav-item dropdown">
//                   <a
//                     className="nav-link dropdown-toggle"
//                     href="#"
//                     id="navbarDropdown"
//                     role="button"
//                     data-bs-toggle=""
//                     aria-expanded="false"
//                   >
//                     Docs
//                   </a>
//                   <ul
//                     className="dropdown-menu"
//                     aria-labelledby="navbarDropdown"
//                   >
//                     <div className="dropdownBackground">
//                       {/* <li>
//                         <a
//                           className="dropdown-item"
//                           target="_blank"
//                           href="https://galaxyarena.io/files/Galaxy-Arena-Whitepaper-1.pdf"
//                         >
//                          White Paper
//                         </a>
//                       </li> */}
//                       {/* <li>
//                         <a
//                           className="dropdown-item"
//                           target="_blank"
//                           href="https://galaxyarena.io/files/NewGalaxyArenaPitchDeck.pdf"
//                         >
//                           Arena Pitch Deck
//                         </a>
//                       </li> */}
//                       <li>
//                         <a
//                           className="dropdown-item"
//                           target="_blank"
//                           href="https://galaxyarena.io/files/TechRate.pdf"
//                         >
//                           Audit
//                         </a>
//                       </li>
//                       <li>
//                         <a
//                           className="dropdown-item"
//                           target="_blank"
//                           href="https://github.com/GalaxyArena2/GalaxyArena-core"
//                         >
//                           Github
//                         </a>
//                       </li>
//                       <li>
//                         <NavLink to="/teamsofuse" className="dropdown-item">
//                           Terms of Use
//                         </NavLink>
//                       </li>
//                       <li>
//                         <NavLink to="/privacy" className="dropdown-item">
//                           Privacy Policy
//                         </NavLink>
//                       </li>
//                       <li>
//                         <NavLink to="/content" className="dropdown-item">
//                           Content Policy
//                         </NavLink>
//                       </li>
//                     </div>
//                   </ul>
//                 </li>
//                 <li className="nav-item">
//                   <NavLink to="/essencetokenomics" className="nav-link">
//                     Essence Tokenomics
//                   </NavLink>
//                 </li>
//                 <li className="nav-item dropdown">
//                   <a
//                     className="nav-link dropdown-toggle"
//                     href="#"
//                     id="navbarDropdown"
//                     role="button"
//                     data-bs-toggle=""
//                     aria-expanded="false"
//                   >
//                     Our Team
//                   </a>
//                   <ul
//                     className="dropdown-menu"
//                     aria-labelledby="navbarDropdown"
//                   >
//                     <div className="dropdownBackground">
//                       <li>
//                         <HashLink className="dropdown-item" to="/#team">
//                           Team
//                         </HashLink>
//                       </li>
//                       <li>
//                         <HashLink className="dropdown-item" to="/#affiliates">
//                           Affiliates
//                         </HashLink>
//                       </li>
//                     </div>
//                   </ul>
//                 </li>
//                 {/* <li className="nav-item">
//                   <Link to="/nft" className="nav-link">
//                     Show NFTs
//                   </Link>
//                 </li> */}
//                 <li className="nav-item mobile-view">
//                   <NavLink to="/privatesale" className="nav-link">
//                     join private sale*
//                   </NavLink>
//                 </li>
//                 <li className="nav-item mobile-view">
//                   <a className="nav-link " href="#contact">
//                     Contact Us
//                   </a>
//                 </li>
//                 <li className="nav-item">
//                   <li
//                     className="nav-link"
//                     onClick={handler}
//                     style={{ cursor: "pointer" }}
//                   >
//                     Buy Crypto Now
//                   </li>
//                 </li>
//                 <VStack className="light">
//                   <HStack>
//                     {account ? (
//                       <Text>
//                         <div className="tp-tools">
//                           <p>
//                             <img
//                               src="images/walletlogo.png"
//                               style={{
//                                 width: "50px",
//                                 height: "30px",
//                                 marginRight: "10px",
//                               }}
//                             ></img>
//                             0x8dfdst...a0
//                           </p>
//                           <i
//                             className="fa fa-angle-down downCode"
//                             aria-hidden="true"
//                             onClick={toggle}
//                           ></i>
//                         </div>
//                         {isOpened && (
//                           <div className="codeDropdown">
//                             <div className="addressCode">
//                               <CopyToClipboard
//                                 text={text}
//                                 onCopy={() => onCopyText(true)}
//                               >
//                                 <div className="copy-area">
//                                   <button onClick={copyText}>
//                                     <p>
//                                       <img src="images/logo.png"></img>
//                                       {account}
//                                     </p>
//                                   </button>
//                                   <span>{isCopied ? "Copied!" : null}</span>
//                                 </div>
//                               </CopyToClipboard>
//                             </div>
//                             <div className="innerLogout">
//                               <button
//                                 type="button"
//                                 onClick={disconnect}
//                                 className="btn btn-dark"
//                               >
//                                 Log Out
//                               </button>
//                             </div>
//                           </div>
//                         )}
//                       </Text>
//                     ) : null}
//                     {
//                       !account ? (
//                         <button
//                           onClick={connectWallet}
//                           className="btn btn-info connect_cardbtn"
//                           id="connect_cardbtn"
//                           style={{ backgroundColor: "#0dcaf0" }}
//                         >
//                           Connect Wallet
//                         </button>
//                       ) : null
                     
//                     }
//                   </HStack>
//                 </VStack>
//                 <li className="nav-item dropdown desktop-view-menu">
//                   <span
//                     className="nav-link dropdown-toggle"
//                     href="#"
//                     id="navbarDropdown"
//                     role="button"
//                     data-bs-toggle=""
//                     aria-expanded="false"
//                   >
//                     <li className="nav-item">
//                       <span className="nav-link elps">
//                         <i className="fa fa-ellipsis-v "></i>
//                       </span>
//                     </li>
//                   </span>
//                   <ul
//                     className="dropdown-menu lastmenu"
//                     aria-labelledby="navbarDropdown"
//                   >
//                     <div className="dropdownBackground">
//                       <li className="nav-item">
//                         <HashLink to="/privatesale" className="nav-link">
//                           join private sale*
//                         </HashLink>
//                       </li>
//                       <li className="nav-item">
//                         <HashLink to="#contact" className="nav-link">
//                           Contact Us
//                         </HashLink>
//                       </li>
//                     </div>
//                   </ul>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </nav>
//       </div>
//     </>
//   );
// };

// export default Header;
import React, { useEffect, useState } from "react";
import { VStack, Text, HStack } from "@chakra-ui/react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { ethers } from "ethers";
import { HashLink } from "react-router-hash-link";
import Web3Modal from "web3modal";
import { providerOptions } from "../providerOptions";
const web3Modal = new Web3Modal({
  cacheProvider: true, // optional
  providerOptions, // required
});

const Header = () => {
  const navigate = useNavigate();
  const [docsModalShow, SetDocsModalShow] = useState("");
  const [teamModalShow, SetTeamModalShow] = useState("");
  const [tockModalShow, SetTeamTockShow] = useState("");
  const [joinModalShow, SetJoinModelShow] = useState("");
  const [text, setText] = useState("");
  const [isCopied, setIsCopied] = useState(false);
  const [open, setOpen] = useState(false);
  const [isOpened, setIsOpened] = useState(false);
  const [provider, setProvider] = useState();
  const [library, setLibrary] = useState();
  const [account, setAccount] = useState();
  const [error, setError] = useState("");

  
  useEffect(() => {
    const data = document.getElementById("WEB3_CONNECT_MODAL_ID");
    $("body").click(function (event) {
      $("#WEB3_CONNECT_MODAL_ID").click(function () {
        console.log(data);
        $(".web3modal-modal-lightbox").hide();
      });
    });
    $("#connect_cardbtn").click(function () {
      if (data) {
        $(".web3modal-modal-lightbox").show();
        console.log("show", data);
      } else {
        $(".web3modal-modal-lightbox").hide();
        console.log("hide", data);
      }
    });
  }, []);

  function toggle() {
    setIsOpened((wasOpened) => !wasOpened);
  }
  const connectWallet = async () => {
    try {
      const provider = await web3Modal.connect();
      const library = new ethers.providers.Web3Provider(provider);
      const accounts = await library.listAccounts();
      const network = await library.getNetwork();
      setProvider(provider);
      setLibrary(library);
      if (accounts) setAccount(accounts[0]);
      setChainId(network.chainId);
    } catch (error) {
      setError(error);
    }
  };

  const refreshState = () => {
    setAccount();
    setChainId();
    setMessage("");
    setSignature("");
    setVerified(undefined);
  };

  const disconnect = async () => {
    await web3Modal.clearCachedProvider();
    refreshState();
  };

  useEffect(() => {
    if (web3Modal.cachedProvider) {
      connectWallet();
    }
  }, []);

  useEffect(() => {
    if (provider?.on) {
      const handleAccountsChanged = (accounts) => {
        console.log("accountsChanged", accounts);
        if (accounts) setAccount(accounts[0]);
      };
      const handleChainChanged = (_hexChainId) => {
        setChainId(_hexChainId);
      };
      const handleDisconnect = () => {
        console.log("disconnect", error);
        disconnect();
      };
      provider.on("accountsChanged", handleAccountsChanged);
      provider.on("chainChanged", handleChainChanged);
      provider.on("disconnect", handleDisconnect);
      return () => {
        if (provider.removeListener) {
          provider.removeListener("accountsChanged", handleAccountsChanged);
          provider.removeListener("chainChanged", handleChainChanged);
          provider.removeListener("disconnect", handleDisconnect);
        }
      };
    }
  }, [provider]);
  const copyText = () => {
    setOpen(true);
    navigator.clipboard.writeText(account);
  };

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
                  <Link to="/" className="nav-link" aria-current="page">
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
                      <a
                        className="dropdown-item"
                        href="https://www.canva.com/design/DAFJZxL45J8/FOpduH4bBPnJiOOdLcj89g/view?utm_content=DAFJZxL45J8&utm_campaign=designshare&utm_medium=link&utm_source=publishpresent#1"
                        target="_blank"
                      >
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
                <VStack className="light">
                  <HStack>
                    {account ? (
                      <Text>
                        <div className="tp-tools">
                          <p>
                            <img
                              src="images/walletlogo.png"
                              style={{
                                width: "50px",
                                height: "30px",
                                marginRight: "10px",
                              }}
                            ></img>
                            0x8dfdst...a0
                          </p>
                          <i
                            className="fa fa-angle-down downCode"
                            aria-hidden="true"
                            onClick={toggle}
                          ></i>
                        </div>
                        {isOpened && (
                          <div className="codeDropdown">
                            <div className="addressCode">
                              <CopyToClipboard
                                text={text}
                                onCopy={() => onCopyText(true)}
                              >
                                <div className="copy-area">
                                  <button onClick={copyText}>
                                    <p>
                                      <img src="images/logo.png"></img>
                                      {account}
                                    </p>
                                  </button>
                                  <span>{isCopied ? "Copied!" : null}</span>
                                </div>
                              </CopyToClipboard>
                            </div>
                            <div className="innerLogout">
                              <button
                                type="button"
                                onClick={disconnect}
                                className="btn btn-dark"
                              >
                                Log Out
                              </button>
                            </div>
                          </div>
                        )}
                      </Text>
                    ) : null}
                    {!account ? (
                      <li className="nav-item nav-itemBtn ">
                        <button
                          onClick={connectWallet}
                          id="connect_cardbtn"
                          className="nav-link "
                          aria-current="page"
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                          data-bs-whatever="@mdo"
                          style={{color:"#7EC8E3"}}
                        >
                          Connect Wallet
                        </button>
                      </li>
                    ) : null}
                  </HStack>
                </VStack>
                <div className="web-desktop d-flex">
                  {/* <li className="nav-item nav-itemBtn ">
                    <a
                      className="nav-link "
                      aria-current="page"
                      href="#"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      data-bs-whatever="@mdo"
                    >
                      Connect Wallett
                    </a>
                  </li> */}
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

export default Header;


