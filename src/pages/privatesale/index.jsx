import React, { useState, useEffect } from "react";
import "./style.scss";
import { useForm } from "react-hook-form";
import { useTheme } from "@material-ui/core/styles";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { ethers } from "ethers";
import Web3Modal from "web3modal";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Loader from "../../components/Loader";
import axios from "axios";

import { providerOptions } from "../../providerOptions";
const web3Modal = new Web3Modal({
  cacheProvider: true, // optional
  providerOptions, // required
});

const PrivateSale = () => {
  const theme = useTheme();

  const [text, setText] = useState("");
  const [isCopied, setIsCopied] = useState(false);
  const [isCopied2, setIsCopied2] = useState(false);
  const [isCopied3, setIsCopied3] = useState(false);
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);

  const [isLoading, setLoading] = useState(false);
  const [provider, setProvider] = useState();
  const [library, setLibrary] = useState();
  const [account, setAccount] = useState();
  const [userData, setUserData] = useState("");
  const [saveInput, setInput] = useState({
    telegram: "",
    address: "",
    country: "",
    email: "",
    description: "",
  });

  const inputFields = (event) => {
    const { value, name } = event.target;
    setInput((preValue) => ({
      ...preValue,
      [name]: value,
    }));
  };

  const [buttonText, setButtonText] = useState("Send");
  const changeText = (text) => setButtonText(text);
  const [privatData, setPrivatData] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      await axios
        .post(
          "https://manage.galaxyarena.io/public/api/subscription",
          {
            telegram_handle: data.telegram,
            matic_wallet_address: data.address,
            country_of_residence: data.country,
            email: data.email,
            description: data.description,
          },
          {
            headers: {
              "Content-Type": "application/json",
              allowed_headers: ["*"],
            },
          }
        )
        .then((res) => {
          setUserData(res.data);
          setLoading(false);
          // console.log("api", userData);
          document.getElementById("myForm").reset();
        });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    window.scrollTo(0, 0);
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
    navigator.clipboard.writeText("0xc7F620dA5A5E03E8F988A02107ACDEb3187FD933");
  };
  const copyText2 = () => {
    setOpen2(true);
    navigator.clipboard.writeText("TDmRT9Z5HUa7yTR5eiTnp9XjU2XN61ySyo");
  };
  const copyText3 = () => {
    setOpen3(true);
    navigator.clipboard.writeText("36V2x3pn5y1MAUP96ux365UVmrW5Dwc3KA");
  };
  const onCopyText = () => {
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  };

  const onCopyText2 = () => {
    setIsCopied2(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  };

  const onCopyText3 = () => {
    setIsCopied3(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  };

  return (
    <>
      <Header />
      {/* <section className="pstitlebox light"> */}
      <section className="btitlebox light zoning_psudeo">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12">
              {/* <div className="section_divider"></div> */}
              <div className="section_divider zoning_divide_top"></div>
            </div>
            <div className="col-12  col-lg-8 text-center">
              <h1>Join Private Sale</h1>
            </div>
            <div className="col-12">
              {/* <div className="section_divider d-none d-xl-block"></div> */}
              <div className="section_divider zoning_divide_bottom d-none d-lg-block"></div>
            </div>
          </div>
        </div>
      </section>
      <section className="privatesale_form light">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-5 ">
              <div className="aps_box box-space">
                {/* <span>Private sale is now LIVE!</span> */}
                <span>Private sale closed , 1M reached!</span>
                <h4>Galaxy Arena Private sale!</h4>
                <p>
                  The journey to the meta verse begins here. Please provide the
                  information below and your Essence (ESNC) tokens will be sent
                  to your wallet address upon release date of the token. Once
                  you've filled out the information you'll be sent a
                  confirmation email from : ''admin@galaxyarena.io. Please make
                  sure that the email you receive is from the same sender as the
                  email above.
                </p>
              </div>
              <div className="psd_box psd_myBox box-space">
                <h4>Private sale details :</h4>
                <p>- Supply : 7.5% 75,000,000 ESNC</p>
                <p>- Starting Price : 0.01$</p>
                <p>
                  <div className="addressCode">
                    - Galaxy arena wallet address:
                    <CopyToClipboard
                      text={text}
                      onCopy={() => onCopyText(true)}
                    >
                      <div className="copy-area">
                        <button onClick={copyText}>
                          <p>0xc7F620dA5A5E03E8F988A02107ACDEb3187FD933 📋</p>
                        </button>
                        <span>{isCopied ? "Copied!" : null}</span>
                      </div>
                    </CopyToClipboard>
                  </div>
                </p>
                <p>- Accepted currencies: ERC-20, Matic, BEP-20, USDT.</p>
                <p>
                  <div className="addressCode">
                    - TRC20 address:
                    <CopyToClipboard
                      text={text}
                      onCopy={() => onCopyText2(true)}
                    >
                      <div className="copy-area">
                        <button onClick={copyText2}>
                          <p>TDmRT9Z5HUa7yTR5eiTnp9XjU2XN61ySyo 📋</p>
                        </button>
                        <span>{isCopied2 ? "Copied!" : null}</span>
                      </div>
                    </CopyToClipboard>
                  </div>
                </p>
                <p>
                  <div className="addressCode">
                    - BTC :
                    <CopyToClipboard
                      text={text}
                      onCopy={() => onCopyText3(true)}
                    >
                      <div className="copy-area">
                        <button onClick={copyText3}>
                          <p>36V2x3pn5y1MAUP96ux365UVmrW5Dwc3KA 📋</p>
                        </button>
                        <span>{isCopied3 ? "Copied!" : null}</span>
                      </div>
                    </CopyToClipboard>
                  </div>
                </p>
              </div>
              <div className="row psd_myBox box-space" id="psd_myBox">
                <div className="col-12 mb-4"></div>
                <div className="col-12 col-lg-6">
                  <p>Pre sale 1</p>
                  <p>Supply : 6%</p>
                  <p>60,000,000 ESNC</p>
                  <p>Price : $0.03</p>
                  <p>Date :TBA</p>
                </div>
                {/* <div className="col-12 col-lg-6">
                  <p> 3. Pre sale 2</p>
                  <p> – Supply :5%. 50,000,000 </p>
                  <p>ESNC</p>
                  <p> – Price : $0.02</p>
                  <p> – Date :TBA</p>
                </div> */}
              </div>
              <div className="border_bottom"></div>
            </div>
            <div className="col-12 col-md-7">
              <div className="ps_form_box">
                <form onSubmit={handleSubmit(onSubmit)} id="myForm">
                  <div className="row">
                    <div className="col-12 mb-3">
                      <input
                        type="text"
                        name="telegram"
                        //  onChange={inputFields}
                        //   value={saveInput.telegram}
                        className="form-control"
                        aria-describedby=""
                        {...register("telegram")}
                        required
                        placeholder="Telegram Handle"
                      />
                    </div>
                    <div className="col-12 mb-3">
                      <input
                        type="text"
                        name="address"
                        // onChange={inputFields}
                        // value={saveInput.address}
                        className="form-control"
                        {...register("address")}
                        required
                        aria-describedby=""
                        placeholder="Enter your polygon MATIC wallet address where Essence (ESNC) will be sent*"
                      />
                    </div>
                    <div className="col-12 col-lg-6  mb-3">
                      <input
                        type="text"
                        name="country"
                        // onChange={inputFields}
                        // value={saveInput.country}
                        className="form-control"
                        {...register("country")}
                        required
                        aria-describedby=""
                        placeholder="Country of Residence"
                      />
                    </div>
                    <div className="col-12 col-12 col-lg-6 mb-3">
                      <input
                        type="email"
                        name="email"
                        // onChange={inputFields}
                        // value={saveInput.email}
                        className="form-control"
                        // {...register("email")}
                        required
                        {...register("email", {
                          required: "Email is Required",
                          validate: (value) =>
                            !!value.trim() || "Invalid email address",
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Invalid email address",
                          },
                        })}
                        aria-describedby=""
                        placeholder="E-mail Address*"
                      />
                    </div>
                    <div className="col-12 mb-3">
                      <textarea
                        name="description"
                        type="text"
                        // onChange={inputFields}
                        // value={saveInput.description}
                        {...register("description")}
                        required
                        className="form-control textarea"
                        aria-describedby=""
                        placeholder="Enter your transaction ID link here (URL) so we can confirm your transaction to join the private sale. Please note that failure to send this transaction ID can lead to loss of funds*"
                      />
                    </div>
                    <div className="col-12 mb-3 mt-5">
                      {/* {userData?.message == "Data store successfully" ? (
                        <button type="submit" className="base_btn base_primary">
                          Submitted
                        </button>
                      ) : ( */}
                      <button type="submit" className="base_btn base_primary">
                        Submit
                      </button>
                      {/* )} */}
                    </div>
                  </div>
                </form>
                <Loader isLoading={isLoading} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
export default PrivateSale;
