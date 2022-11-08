import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import moment from "moment";
import $, { data } from "jquery";
import { Link, NavLink } from "react-router-dom";
import teams from "../../data/team.json";
import Slider from "react-slick";
import demodata from "./demodata";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "../../components/header";
import Footer from "../../components/footer";

const Home = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    setInterval(() => {
      const now = moment();
      const then = moment("2020-10-20 12:12:12", "YYYY-MM-DD hh:mm:ss");
      const countdown = moment(then - now);
      setDays(countdown.format("D"));
      setHours(countdown.format("HH"));
      setMinutes(countdown.format("mm"));
      setSeconds(countdown.format("ss"));
    }, 1000);
  }, []);

  const [showMore, setShowMore] = useState(false);
  const [showMore2, setShowMore2] = useState(false);
  const [showMore3, setShowMore3] = useState(false);
  const { text } = demodata;
  const { text2 } = demodata;
  const { text3 } = demodata;

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const settings = {
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const afflites = {
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const togglePlay = () => {
    const myAudio = document.getElementById("myVideo");
    if (myAudio.muted == false) {
      myAudio.muted = true;
    } else {
      myAudio.muted = false;
    }
  };

  const Team = teams.filter((item) => {
    return item.id <= 15;
  });
  const Team2 = teams.filter((item) => {
    return item.name === "Travlad" || item.name === "Amid Yazdi";
  });

  return (
    <>
      <Header />
      <div className="sound">
        <img src="./assets/img/sound.svg" onClick={togglePlay} />
      </div>
      <section className="herovideo" id="home">
        <div className="video-section">
          <video
            playsInline
            controls="{false}"
            autoPlay="{autoplay}"
            className="framevideo"
            loop
            muted
            id="myVideo"
            allowFullScreen
          >
            <source
              src="https://verbio-cng-prod-n.s3.amazonaws.com/galaxyarenanotuse.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </section>
      {/* <div className="bg-black-sec innrsec-spacing">
         <img src="./assets/img/MicrosoftTeams-image.jpg" alt="" style={{width:'100%'}} />   
      </div> */}
      <section className="innrsec-spacing inner-topSpece">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-3 mb-3" style={{ textAlign: "center" }}>
                  <div className="planet-sizedimg">
                    <img
                      src="./assets/img/home/Bybit.png"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <Link
                    to="https://www.bybit.com/en-US/trade/spot/BTC/USDT"
                    target="_blank"
                  >
                    <button class="btn btn-primary">Bybit</button>
                  </Link>
                </div>
                <div className="col-md-3 mb-3" style={{ textAlign: "center" }}>
                  <div className="planet-sizedimg">
                    <img
                      src="./assets/img/home/coingecko.png"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <Link
                    to="https://www.coingecko.com/en/coins/galaxy-arena"
                    target="_blank"
                  >
                    <button class="btn btn-primary">CoinGecko</button>
                  </Link>
                </div>
                <div className="col-md-3 mb-3" style={{ textAlign: "center" }}>
                  <div className="planet-sizedimg">
                    <img
                      src="./assets/img/home/coinmarketcap.png"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <Link
                    to="https://coinmarketcap.com/currencies/galaxy-arena-metaverse/"
                    target="_blank"
                  >
                    <button class="btn btn-primary">Coinmarketcap</button>
                  </Link>
                </div>
                <div className="col-md-3" style={{ textAlign: "center" }}>
                  <div className="planet-sizedimg">
                    <img
                      src="./assets/img/home/Qmall.png"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <button class="btn btn-primary">
                    <Link to="#"></Link>
                    QMall
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-black-sec innrsec-spacing galexybg-img">
        <span id="timer"></span>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="hero-banner-content">
                <h1 data-aos="fade-down" data-aos-duration="100">
                  BRIDGING THE GAP BETWEEN{" "}
                  <span className="colorText">VIRTUAL & REALITY</span>
                </h1>
                <p data-aos="fade-up" data-aos-duration="1000">
                  The metaverse is the next step in the development of the
                  internet and the hub of the Web 3.0 era. Galaxy Arena is
                  poised to become a leading state of the art metaverse HUB that
                  will seamlessly help transition the world of live events ,
                  attractions ,VR experiences and businesses forever by bridging
                  the gap between virtual and reality and offer a simple Web 2.0
                  to 3.0 solution.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div
                className="hero-gif"
                data-aos="fade-left"
                data-aos-anchor="#example-anchor"
                data-aos-offset="500"
                data-aos-duration="500"
              >
                <img
                  src="./assets/img/GF.gif"
                  alt=""
                  style={{ width: "100%", height: "200%", textAlign: "right" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="innrsec-spacing endless-innersec-section endlessBg">
        <div className="container">
          <div className="row">
            <div className="col-md-9 mx-auto">
              <div className="blocksText blocksbtn-margin">
                <h2 data-aos="zoom-in" data-aos-duration="1500">
                  Endless adventures in the Galaxy Arena metaverse{" "}
                </h2>
                <p data-aos="zoom-in-up" data-aos-duration="1500">
                  Whatever you seek, you will find in Galaxy Arena . Boasting
                  three behemoth sectors, each one as impressive as the other.
                </p>
                <p data-aos="zoom-in-up" data-aos-duration="1500">
                  Galaxy Arena is the one and only VR Earn game aggregator
                  metaverse HUB. Play, move, learn, dance , sing and participate
                  to earn all under one roof, making us the exclusive ‘’ X to
                  earn HUB ‘’ ​ ​
                </p>
                <h4
                  data-aos="zoom-in"
                  data-aos-duration="1500"
                  className="mt-5"
                >
                  WELCOME TO THE GALAXY ARENA METAVERSE
                </h4>
              </div>
            </div>
            <div className="col-lg-4  col-md-12 innsersection-sectors">
              <div
                className="sector-box"
                data-aos="fade-right"
                data-aos-duration="2000"
              >
                <div className="sector-boxInner">
                  <div className="sector-boxInner-content">
                    <p className="sector-btn">Entertainment Venue</p>
                    <section className="img-gallery-magnific"></section>
                    <div className="clear"></div>
                    <div className="magnific-img">
                      <a
                        className="image-popup-vertical-fit"
                        href="./assets/img/entertainmentvenue/1.jpg"
                        title=""
                      />
                      <a
                        className="image-popup-vertical-fit"
                        href="./assets/img/entertainmentvenue/2.jpg"
                        title=""
                      />
                      <a
                        className="image-popup-vertical-fit"
                        href="./assets/img/entertainmentvenue/3.jpg"
                        title=""
                      />
                      <a
                        className="image-popup-vertical-fit"
                        href="./assets/img/entertainmentvenue/4.jpg"
                        title=""
                      />
                      <a
                        className="image-popup-vertical-fit"
                        href="./assets/img/entertainmentvenue/5.jpg"
                        title=""
                      >
                        <div className="popupHove-img">
                          {" "}
                          <img
                            src="./assets/img/entertainmentvenue/5.jpg"
                            className="img-fluid"
                            alt=""
                          />{" "}
                        </div>
                      </a>
                    </div>
                    <p className="">
                      {showMore ? (
                        <p className="">
                          30.000 square meters of explorable digital space
                          divided into 6 action packed floors with the arena at
                          its focal point. Every floor will have its own unique
                          amenities, attractions, functionalities and
                          experiences. The arena will boast a virtual reality
                          space for real world celebrity concerts, fighting
                          events and for various types of performances. We plan
                          to unlock new revenue streams by acquiring volumetric
                          video capture technology and further monetizing
                          already existing events, offering a brand-new way to
                          directly connect with their fanbase.{" "}
                        </p>
                      ) : (
                        `${text.substring(0, 250)}`
                      )}
                      <button
                        className="readMore"
                        onClick={() => setShowMore(!showMore)}
                      >
                        {showMore ? "Show less" : "Show more"}
                      </button>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4  col-md-12 innsersection-sectors">
              <div
                className="sector-box"
                data-aos="flip-up"
                data-aos-duration="2000"
              >
                <div className="sector-boxInner">
                  <div className="sector-boxInner-content">
                    <p className="sector-btn">Galaxy Gym</p>
                    <section className="img-gallery-magnific"></section>
                    <div className="clear"></div>
                    <div className="magnific-img">
                      <a
                        className="image-popup-vertical-fit1"
                        href="./assets/img/arenagym/1.jpg"
                        title=""
                      />
                      <a
                        className="image-popup-vertical-fit1"
                        href="./assets/img/arenagym/3.jpg"
                        title=""
                      />
                      <a
                        className="image-popup-vertical-fit1"
                        href="./assets/img/arenagym/4.jpg"
                        title=""
                      />
                      <a
                        className="image-popup-vertical-fit1"
                        href="./assets/img/arenagym/2.jpg"
                        title=""
                      >
                        <div className="popupHove-img">
                          {" "}
                          <img
                            src="./assets/img/arenagym/2.jpg"
                            className="img-fluid"
                            alt=""
                          />{" "}
                        </div>
                      </a>
                    </div>
                    <p className="">
                      {showMore2 ? (
                        <>
                          {" "}
                          <p className="">
                            A state of the art facility that provides an array
                            of interactive virtual reality health and fitness
                            movement mini - games.{" "}
                            <b>
                              This is the first Move to Earn game in VR, where
                              players can stay fit and get paid
                            </b>
                            . With our own twist to the very popular play to
                            earn model “train to earn” promises to keep users
                            coming back for more.{" "}
                          </p>
                          <p>
                            A wide range of fully immersive fitness studios
                            connecting celebrities, world renowned athletes and
                            trainers to users while offering courses & classes
                            online in VR. Enjoy stretching, yoga, fitness
                            movements, refloxology, and other exercise
                            activities in group or private sessions from the
                            comfort of your own home.{" "}
                          </p>
                          <h6>
                            <b>MOVE TO EARN APPS</b>
                          </h6>
                          <p>
                            Galaxians will be able to reap rewards by
                            participating in VR mini games found in the
                            exclusive spaces of their favorite move to earn apps
                            placed strategically within the Galaxy gym. These
                            include big names such as Menzy, Dotmoovs & Fitevo.{" "}
                          </p>{" "}
                        </>
                      ) : (
                        `${text2.substring(0, 250)}`
                      )}
                      <button
                        className="readMore"
                        onClick={() => setShowMore2(!showMore2)}
                      >
                        {showMore2 ? "Show less" : "Show more"}
                      </button>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12  innsersection-sectors ">
              <div
                className="sector-box"
                data-aos="fade-left"
                data-aos-duration="2000"
              >
                <div className="sector-boxInner">
                  <div className="sector-boxInner-content">
                    <p className="sector-btn">Galaxy Tower</p>
                    <section className="img-gallery-magnific"></section>
                    <div className="clear"></div>
                    <div className="magnific-img">
                      <a
                        className="image-popup-vertical-fit2"
                        href="./assets/img/galaxytower/5.jpg"
                        title=""
                      />
                      <a
                        className="image-popup-vertical-fit2"
                        href="./assets/img/galaxytower/2.jpg"
                        title=""
                      />
                      <a
                        className="image-popup-vertical-fit2"
                        href="./assets/img/galaxytower/3.jpg"
                        title=""
                      />
                      <a
                        className="image-popup-vertical-fit2"
                        href="./assets/img/galaxytower/4.jpg"
                        title=""
                      />
                      <a
                        className="image-popup-vertical-fit2"
                        href="./assets/img/galaxytower/1.jpg"
                        title=""
                      >
                        <div className="popupHove-img">
                          {" "}
                          <img
                            src="./assets/img/galaxytower/1.jpg"
                            className="img-fluid"
                            alt=""
                          />{" "}
                        </div>
                      </a>
                    </div>
                    <p className="">
                      {showMore3 ? (
                        <p className="">
                          Standing alongside the arena and the gym, the Galaxy
                          Tower is a marvel on its own. While the top floor is
                          reserved for our Sky lounge social nightclub &
                          celestial casino, the rest of the tower will include a
                          collection of 20,000 unique NFT units, divided into
                          luxury suites, lounges, office spaces, and digital
                          real estate. Each of these areas will be uniquely
                          designed by our creative team, who will build each
                          space with one-of-a-kind styles and exclusive
                          decorative pieces in line with its respective use
                          case.{" "}
                        </p>
                      ) : (
                        `${text3.substring(0, 250)}`
                      )}
                      <button
                        className="readMore"
                        onClick={() => setShowMore3(!showMore3)}
                      >
                        {showMore3 ? "Show less" : "Show more"}
                      </button>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="blacksection-social-icon">
        <div
          className="social-media-icon"
          data-aos="fade-right"
          data-aos-duration="1500"
        >
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
              <a href="https://discord.com/invite/xCBEnjGkNN" target="_blank">
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
      <section className="innrsec-spacing inner-topSpece">
        <div className="boxSkyblue-bg skybluebg-section">
          <div className="boxDark-bg">
            <div className="container">
              <div className="row">
                <div className="col-md-9 mx-auto">
                  <div className="blocksText blockswhiteText blocksbtn-margin">
                    <h2 data-aos="zoom-in" data-aos-duration="1500">
                      The Future Has Arrived
                    </h2>
                    <h4
                      data-aos="zoom-in"
                      data-aos-duration="1500"
                      className="text-white"
                      class="mb-4"
                    >
                      <p>‘’ X- TO EARN METAVERSE HUB ‘’</p>
                    </h4>
                    <p data-aos="zoom-in-up" data-aos-duration="1500">
                      We aim to retain value in the Galaxy Arena native token,
                      ESNC by deponzifying our rewards model. Rewards in Essence
                      will be extremely limited meanwhile purchasing our all
                      access pass NFTs will give users the ability to earn
                      massive rewards within all our partners games & apps
                      creating a one of a kind shared reward model{" "}
                    </p>
                  </div>
                </div>
                <div className="col-md-4  tripleblock-section">
                  <div
                    className="futureArrived-arena"
                    data-aos="fade-right"
                    data-aos-duration="2000"
                  >
                    <div className="futureArrived-arena-inner">
                      <div className="futureAricon">
                        <img src="./assets/img/future1.svg" alt="" />
                      </div>
                      <h6>Reduced costs</h6>
                      <p>
                        Lower prices on event tickets and gym memberships due to
                        the elimination of travel time and limited spacing.
                        Using blockchain technology transaction fees are reduced
                        significantly.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 tripleblock-section">
                  <div
                    className="futureArrived-arena"
                    data-aos="flip-up"
                    data-aos-duration="2000"
                  >
                    <div className="futureArrived-arena-inner">
                      <div className="futureAricon">
                        <img src="./assets/img/vr.png" alt="" />
                      </div>
                      <h6>Metaverse AR/VR Integration</h6>
                      <p>
                        Instant access to events with unobstructed views is made
                        possible by utilising VR/AR technology. Take advantage
                        of working out in the comfort and safety of your own
                        home. Galaxy Arena is open 24/7, 365 days a year with no
                        chance of cancellation due to gym closures and strict
                        safety measures.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 tripleblock-section">
                  <div
                    className="futureArrived-arena"
                    data-aos="fade-left"
                    data-aos-duration="2000"
                  >
                    <div className="futureArrived-arena-inner">
                      <div className="futureAricon">
                        <img src="./assets/img/future3.svg" alt="" />
                      </div>
                      <h6>TRAIN-TO-EARN Rewards System</h6>
                      <p>
                        What’s the best way to motivate people to work out ?
                        Turn working out into a game where money is on the line.
                        Visit the Galaxy Arena gym to take advantage of a
                        plethora of health and fitness challenges, where you can
                        exercise and earn ESSENCE.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="innrsec-spacing">
        <div className="container">
          <div className="row">
            <div className="col-md-12 ">
              <div className="blocksText blocksbtn-margin">
                <h2 data-aos="zoom-in" data-aos-duration="1500">
                  ECOSYSTEM & REVENUE STREAMS.
                </h2>
                <p data-aos="zoom-in-up" data-aos-duration="1500">
                  Galaxy Arena Metaverse and “ESNC” token economy includes
                  staking, locks, liquidity incentives, buy backs, and burns.
                  These are driven by demand drawn by both gameplay perks and
                  value drawn from the game economy.{" "}
                </p>
                <h4
                  data-aos="zoom-in"
                  data-aos-duration="1500"
                  className="text-start mb-0"
                ></h4>
                <div
                  className="ecosystemImg"
                  style={{ backgroundColor: "#000000" }}
                >
                  <img
                    src="./assets/img/new2.png"
                    style={{ width: "200%", height: "100%" }}
                    className="img-fluid"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="innrsec-spacing inner-topSpece">
        <div className="container">
          <div className="row">
            <div className="col-md-9 mx-auto">
              <div className="blocksText blocksbtn-margin">
                <h2 data-aos="zoom-in" data-aos-duration="1500">
                  Planet-Sized Partnerships
                </h2>
                <h4 data-aos="zoom-in" data-aos-duration="1500">
                  <b>Portals & metaverse development.</b>
                </h4>
                <p data-aos="zoom-in-up" data-aos-duration="1500">
                  Galaxy arena is big on partnerships and bringing communities
                  together. We’ve gathered alliances from all sectors of the
                  crypto sphere, establishing ourselves as the pioneers of the X
                  - to earn metaverse hub.
                </p>
                <p data-aos="zoom-in-up" data-aos-duration="1500">
                  Thanks to our significantly sized in-house development team,
                  we are able to establish contracts with our allies to build
                  out portals that lead you to exclusive explorable spaces
                  within the Galaxy Arena. Each portal and space will be fitted
                  to the project's needs. For example, but not limited to :
                </p>
              </div>
            </div>
            <div className="col-md-12">
              <div
                className="ecosystemImg planet-SizedImg"
                style={{ backgroundColor: "#000000" }}
              >
                <img
                  src="./assets/img/img101.png"
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="innrsec-spacing inner-topSpece">
        <div className="container">
          <div className="row">
            <div className="col-md-9 mx-auto">
              <div className="blocksText blocksbtn-margin">
                <h2 data-aos="zoom-in" data-aos-duration="1500">
                  {" "}
                  Metaverse HUB Partners
                </h2>
                <p data-aos="zoom-in-up" data-aos-duration="1500">
                  It has survived not only five centuries, but also the leap
                  into electronic typesetting, remaining essentially unchanged.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="boxSkyblue-bg boxSkyblue-bg-arena">
          <div
            className="boxDark-bg boxDark-bg-arena"
            style={{ paddingLeft: "80px" }}
          >
            <div
              className="partners-logos partner-logo-img"
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-duration="1000"
            >
              <div className="metaverse">
                <div className="row mt-4">
                  <div className="col-6 col-sm-12 col-md-3  p-0">
                    <div className="pl_box">
                      <img
                        src="./assets/img/logo/metaversehubpartner/1.png"
                        style={{ width: "50%", height: "60%" }}
                      />
                    </div>
                  </div>
                  <div className="col-6 col-sm-12 col-md-3  p-0">
                    <div className="pl_box">
                      <img
                        src="./assets/img/logo/metaversehubpartner/2.png"
                        style={{ width: "50%", height: "80%;" }}
                      />
                    </div>
                  </div>
                  <div className="col-6 col-sm-12 col-md-3  p-0">
                    <div className="pl_box">
                      <img
                        src="./assets/img/logo/metaversehubpartner/3.png"
                        style={{ width: "40%", height: "60%;" }}
                      />
                    </div>
                  </div>
                  <div className="col-6 col-sm-12 col-md-3  p-0">
                    <div className="pl_box each_four">
                      <img
                        src="./assets/img/logo/metaversehubpartner/4.png"
                        style={{ width: "60%", height: "20%;" }}
                      />
                    </div>
                  </div>
                  <div className="col-6 col-sm-12 col-md-3  p-0">
                    <div className="pl_box">
                      <img
                        src="./assets/img/logo/metaversehubpartner/5.png"
                        style={{ width: "50%", height: "80%;" }}
                      />
                    </div>
                  </div>
                  <div className="col-6 col-sm-12 col-md-3  p-0">
                    <div className="pl_box">
                      <img
                        src="./assets/img/logo/metaversehubpartner/6.png"
                        style={{ width: "50%", height: "50%;" }}
                      />
                    </div>
                  </div>
                  <div className="col-6 col-sm-12 col-md-3  p-0">
                    <div className="pl_box">
                      <img
                        src="./assets/img/logo/metaversehubpartner/7.png"
                        style={{ width: "50%", height: "60%;" }}
                      />
                    </div>
                  </div>
                  <div className="col-6 col-sm-12 col-md-3  p-0">
                    <div className="pl_box each_four">
                      <img
                        src="./assets/img/logo/metaversehubpartner/8.png"
                        style={{ width: "50%", height: "50%" }}
                      />
                    </div>
                  </div>
                  <div className="col-6 col-sm-12 col-md-3  p-0">
                    <div className="pl_box">
                      <img
                        src="./assets/img/logo/metaversehubpartner/9.png"
                        style={{ width: "50%", height: "50%" }}
                      />
                    </div>
                  </div>
                  <div className="col-6 col-sm-12 col-md-3  p-0">
                    <div className="pl_box">
                      <img
                        src="./assets/img/logo/metaversehubpartner/10.png"
                        style={{ width: "50%", height: "50%" }}
                      />
                    </div>
                  </div>
                  <div className="col-6 col-sm-12 col-md-3  p-0">
                    <div className="pl_box">
                      <img
                        src="./assets/img/logo/metaversehubpartner/11.png"
                        style={{ width: "50%", height: "50%" }}
                      />
                    </div>
                  </div>
                  <div className="col-6 col-sm-12 col-md-3  p-0">
                    <div className="pl_box each_four">
                      <img
                        src="./assets/img/logo/metaversehubpartner/12.png"
                        style={{ width: "50%", height: "50%" }}
                      />
                    </div>
                  </div>
                  <div className="col-6 col-sm-12 col-md-3  p-0">
                    <div className="pl_box">
                      <img
                        src="./assets/img/logo/metaversehubpartner/13.png"
                        style={{ width: "50%", height: "50%" }}
                      />
                    </div>
                  </div>
                  <div className="col-6 col-sm-12 col-md-3  p-0">
                    <div className="pl_box">
                      <img
                        src="./assets/img/logo/metaversehubpartner/14.png"
                        style={{ width: "50%", height: "50%" }}
                      />
                    </div>
                  </div>
                  <div className="col-6 col-sm-12 col-md-3  p-0">
                    <div className="pl_box">
                      <img
                        src="./assets/img/logo/metaversehubpartner/15.png"
                        style={{ width: "50%", height: "50%" }}
                      />
                    </div>
                  </div>
                  <div className="col-6 col-sm-12 col-md-3  p-0">
                    <div className="pl_box">
                      <img
                        src="./assets/img/logo/metaversehubpartner/16.png"
                        style={{ width: "30%", height: "50%" }}
                      />
                    </div>
                  </div>
                  <div className="col-6 col-sm-12 col-md-3  p-0">
                    <div className="pl_box">
                      <img
                        src="./assets/img/logo/metaversehubpartner/17.png"
                        style={{ width: "50%", height: "50%" }}
                      />
                    </div>
                  </div>
                  {/* <div className="col-6 col-sm-12 col-md-3  p-0">
                    <div className="pl_box">
                      <img
                        src="./assets/img/logo/metaversehubpartner/18.png"
                        style={{ width: "50%", height: "50%" }}
                      />
                    </div>
                  </div> */}
                  <div className="col-6 col-sm-12 col-md-3  p-0">
                    <div className="pl_box">
                      <img
                        src="./assets/img/logo/metaversehubpartner/19.png"
                        style={{ width: "50%", height: "50%" }}
                      />
                    </div>
                  </div>
                  <div className="col-6 col-sm-12 col-md-3  p-0">
                    <div className="pl_box">
                      <img
                        src="./assets/img/logo/metaversehubpartner/20.png"
                        style={{ width: "50%", height: "50%" }}
                      />
                    </div>
                  </div>
                  <div className="col-6 col-sm-12 col-md-3  p-0">
                    <div className="pl_box">
                      <img
                        src="./assets/img/logo/metaversehubpartner/21.png"
                        style={{ width: "50%", height: "50%" }}
                      />
                    </div>
                  </div>
                  <div className="col-6 col-sm-12 col-md-3  p-0">
                    <div className="pl_box">
                      <img
                        src="./assets/img/logo/metaversehubpartner/22.png"
                        style={{ width: "50%", height: "50%" }}
                      />
                    </div>
                  </div>
                  <div className="col-6 col-sm-12 col-md-3  p-0">
                    <div className="pl_box">
                      <img
                        src="./assets/img/logo/metaversehubpartner/23.png"
                        style={{ width: "50%", height: "50%" }}
                      />
                    </div>
                  </div>
                  <div className="col-6 col-sm-12 col-md-3  p-0">
                    <div className="pl_box">
                      <img
                        src="./assets/img/logo/metaversehubpartner/24.png"
                        style={{ width: "30%", height: "20%" }}
                      />
                    </div>
                  </div>
                  <div className="col-6 col-sm-12 col-md-3  p-0">
                    <div className="pl_box">
                      <img
                        src="./assets/img/logo/metaversehubpartner/25.png"
                        style={{ width: "50%", height: "50%" }}
                      />
                    </div>
                  </div>
                  <div className="col-6 col-sm-12 col-md-3  p-0">
                    <div className="pl_box">
                      <img
                        src="./assets/img/logo/metaversehubpartner/26.png"
                        style={{ width: "50%", height: "50%" }}
                      />
                    </div>
                  </div>
                  <div className="col-6 col-sm-12 col-md-3  p-0">
                    <div className="pl_box">
                      <img
                        src="./assets/img/logo/metaversehubpartner/27.png"
                        style={{ width: "50%", height: "50%" }}
                      />
                    </div>
                  </div>
                  <div className="col-6 col-sm-12 col-md-3  p-0">
                    <div className="pl_box">
                      <img
                        src="./assets/img/logo/metaversehubpartner/28.png"
                        style={{ width: "50%", height: "50%" }}
                      />
                    </div>
                  </div>
                  <div className="col-6 col-sm-12 col-md-3  p-0">
                    <div className="pl_box">
                      <img
                        src="./assets/img/logo/metaversehubpartner/29.png"
                        style={{ width: "50%", height: "50%" }}
                      />
                    </div>
                  </div>
                  <div className="col-6 col-sm-12 col-md-3  p-0">
                    <div className="pl_box">
                      <img
                        src="./assets/img/logo/metaversehubpartner/30.png"
                        style={{ width: "50%", height: "50%" }}
                      />
                    </div>
                  </div>
                  <div className="col-6 col-sm-12 col-md-3  p-0">
                    <div className="pl_box">
                      <img
                        src="./assets/img/logo/metaversehubpartner/31.png"
                        style={{ width: "50%", height: "50%" }}
                      />
                    </div>
                  </div>
                  <div className="col-6 col-sm-12 col-md-3  p-0">
                    <div className="pl_box">
                      <img
                        src="./assets/img/logo/metaversehubpartner/32.png"
                        style={{ width: "50%", height: "50%" }}
                      />
                    </div>
                  </div>
                  <div className="col-6 col-sm-12 col-md-3  p-0">
                    <div className="pl_box">
                      <img
                        src="./assets/img/logo/metaversehubpartner/33.png"
                        style={{ width: "50%", height: "50%" }}
                      />
                    </div>
                  </div>
                  <div className="col-6 col-sm-12 col-md-3  p-0">
                    <div className="pl_box">
                      <img
                        src="./assets/img/logo/metaversehubpartner/34.png"
                        style={{ width: "50%", height: "50%" }}
                      />
                    </div>
                  </div>
                  <div className="col-6 col-sm-12 col-md-3  p-0">
                    <div className="pl_box">
                      <img
                        src="./assets/img/logo/metaversehubpartner/35.png"
                        style={{ width: "50%", height: "50%" }}
                      />
                    </div>
                  </div>
                  <div className="col-6 col-sm-12 col-md-3  p-0">
                    <div className="pl_box">
                      <img
                        src="./assets/img/logo/metaversehubpartner/36.png"
                        style={{ width: "30%", height: "40%" }}
                      />
                    </div>
                  </div>
                  <div className="col-6 col-sm-12 col-md-3  p-0">
                    <div className="pl_box">
                      <img
                        src="./assets/img/logo/metaversehubpartner/37.png"
                        style={{ width: "50%", height: "50%" }}
                      />
                    </div>
                  </div>
                  <div className="col-6 col-sm-12 col-md-3  p-0">
                    <div className="pl_box">
                      <img
                        src="./assets/img/logo/metaversehubpartner/38.png"
                        style={{ width: "50%", height: "50%" }}
                      />
                    </div>
                  </div>
                  <div className="col-6 col-sm-12 col-md-3  p-0">
                    <div className="pl_box">
                      <img
                        src="./assets/img/logo/metaversehubpartner/39.png"
                        style={{ width: "50%", height: "50%" }}
                      />
                    </div>
                  </div>
                  <div className="col-6 col-sm-12 col-md-3  p-0">
                    <div className="pl_box">
                      <img
                        src="./assets/img/logo/metaversehubpartner/40.png"
                        style={{ width: "50%", height: "50%" }}
                      />
                    </div>
                  </div>
                  <div className="col-6 col-sm-12 col-md-3  p-0">
                    <div className="pl_box">
                      <img
                        src="./assets/img/logo/metaversehubpartner/41.png"
                        style={{ width: "50%", height: "50%" }}
                      />
                    </div>
                  </div>
                  <div className="col-6 col-sm-12 col-md-3  p-0">
                    <div className="pl_box">
                      <img
                        src="./assets/img/logo/metaversehubpartner/42.png"
                        style={{ width: "50%", height: "50%" }}
                      />
                    </div>
                  </div>
                  <div className="col-6 col-sm-12 col-md-3  p-0">
                    <div className="pl_box">
                      <img
                        src="./assets/img/logo/metaversehubpartner/43.png"
                        style={{ width: "50%", height: "50%" }}
                      />
                    </div>
                  </div>
                  <div className="col-6 col-sm-12 col-md-3  p-0">
                    <div className="pl_box">
                      <img
                        src="./assets/img/logo/metaversehubpartner/44.png"
                        style={{ width: "50%", height: "50%" }}
                      />
                    </div>
                  </div>
                  <div className="col-6 col-sm-12 col-md-3  p-0">
                    <div className="pl_box">
                      <img
                        src="./assets/img/logo/metaversehubpartner/45.png"
                        style={{ width: "50%", height: "50%" }}
                      />
                    </div>
                  </div>
                  <div className="col-6 col-sm-12 col-md-3  p-0">
                    <div className="pl_box">
                      <img
                        src="./assets/img/logo/metaversehubpartner/46.png"
                        style={{ width: "50%", height: "50%" }}
                      />
                    </div>
                  </div>
                  <div className="col-6 col-sm-12 col-md-3  p-0">
                    <div className="pl_box">
                      <img
                        src="./assets/img/logo/metaversehubpartner/47.png"
                        style={{ width: "50%", height: "50%" }}
                      />
                    </div>
                  </div>
                  <div className="col-6 col-sm-12 col-md-3  p-0">
                    <div className="pl_box">
                      <img
                        src="./assets/img/logo/metaversehubpartner/48.png"
                        style={{ width: "50%", height: "50%" }}
                      />
                    </div>
                  </div>
                  <div className="col-6 col-sm-12 col-md-3  p-0">
                    <div className="pl_box">
                      <img
                        src="./assets/img/logo/metaversehubpartner/49.png"
                        style={{ width: "50%", height: "50%" }}
                      />
                    </div>
                  </div>
                  <div className="col-6 col-sm-12 col-md-3  p-0">
                    <div className="pl_box">
                      <img
                        src="./assets/img/logo/metaversehubpartner/50.png"
                        style={{ width: "50%", height: "50%" }}
                      />
                    </div>
                  </div>
                  <div className="col-6 col-sm-12 col-md-3  p-0">
                    <div className="pl_box">
                      <img
                        src="./assets/img/logo/metaversehubpartner/51.png"
                        style={{ width: "50%", height: "50%" }}
                      />
                    </div>
                  </div>
                  <div className="col-6 col-sm-12 col-md-3  p-0">
                    <div className="pl_box">
                      <img
                        src="./assets/img/logo/metaversehubpartner/52.png"
                        style={{ width: "50%", height: "50%" }}
                      />
                    </div>
                  </div>
                  <div className="col-6 col-sm-12 col-md-3  p-0">
                    <div className="pl_box">
                      <img
                        src="./assets/img/logo/metaversehubpartner/53.png"
                        style={{ width: "50%", height: "50%" }}
                      />
                    </div>
                  </div>
                  <div className="col-6 col-sm-12 col-md-3  p-0">
                    <div className="pl_box">
                      <img
                        src="./assets/img/logo/metaversehubpartner/54.png"
                        style={{ width: "50%", height: "50%" }}
                      />
                    </div>
                  </div>
                  <div className="col-6 col-sm-12 col-md-3  p-0">
                    <div className="pl_box">
                      <img
                        src="./assets/img/logo/metaversehubpartner/55.png"
                        style={{ width: "50%", height: "50%" }}
                      />
                    </div>
                  </div>
                  <div className="col-6 col-sm-12 col-md-3  p-0">
                    <div className="pl_box">
                      <img
                        src="./assets/img/logo/metaversehubpartner/56.png"
                        style={{ width: "50%", height: "50%" }}
                      />
                    </div>
                  </div>
                  <div className="col-6 col-sm-12 col-md-3  p-0">
                    <div className="pl_box">
                      <img
                        src="./assets/img/logo/metaversehubpartner/57.png"
                        style={{ width: "50%", height: "50%" }}
                      />
                    </div>
                  </div>
                  <div className="col-6 col-sm-12 col-md-3  p-0">
                    <div className="pl_box">
                      <img
                        src="./assets/img/logo/metaversehubpartner/58.png"
                        style={{ width: "50%", height: "50%" }}
                      />
                    </div>
                  </div>
                  <div className="col-6 col-sm-12 col-md-3  p-0">
                    <div className="pl_box">
                      <img
                        src="./assets/img/logo/metaversehubpartner/59.png"
                        style={{ width: "50%", height: "50%" }}
                      />
                    </div>
                  </div>
                  <div className="col-6 col-sm-12 col-md-3  p-0">
                    <div className="pl_box">
                      <img
                        src="./assets/img/logo/metaversehubpartner/60.png"
                        style={{ width: "50%", height: "50%" }}
                      />
                    </div>
                  </div>
                  <div className="col-6 col-sm-12 col-md-3  p-0">
                    <div className="pl_box">
                      <img
                        src="./assets/img/logo/metaversehubpartner/61.png"
                        style={{ width: "50%", height: "50%" }}
                      />
                    </div>
                  </div>
                  <div className="col-6 col-sm-12 col-md-3  p-0">
                    <div className="pl_box">
                      <img
                        src="./assets/img/logo/metaversehubpartner/62.png"
                        style={{ width: "50%", height: "50%" }}
                      />
                    </div>
                  </div>
                  <div className="col-6 col-sm-12 col-md-3  p-0">
                    <div className="pl_box">
                      <img
                        src="./assets/img/logo/metaversehubpartner/63.png"
                        style={{ width: "50%", height: "50%" }}
                      />
                    </div>
                  </div>
                  <div className="col-6 col-sm-12 col-md-3  p-0">
                    <div className="pl_box">
                      <img
                        src="./assets/img/logo/metaversehubpartner/64.png"
                        style={{ width: "50%", height: "50%" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="innrsec-spacing inner-topSpece">
        <div className="container">
          <div className="row">
            <div className="col-md-9 mx-auto">
              <div className="blocksText blocksbtn-margin">
                <h2 data-aos="zoom-in" data-aos-duration="1500">
                  Strategic Partners
                </h2>
                <p data-aos="zoom-in-up" data-aos-duration="1500">
                  It has survived not only five centuries, but also the leap
                  into electronic typesetting, remaining essentially unchanged.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="boxSkyblue-bg boxSkyblue-bg-arena">
          <div
            className="boxDark-bg boxDark-bg-arena"
            style={{ paddingLeft: "80px" }}
          >
            <div
              className="partners-logos"
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-duration="1000"
            >
              <div className="partner">
                <div className="row mt-4">
                  <div className="col-6 col-sm-12 col-md-3  p-0">
                    <div className="pl_box">
                      <img
                        src="./assets/img/logo/strategicpartners/1.png"
                        style={{ width: "50%", height: "50%" }}
                      />
                    </div>
                  </div>
                  <div className="col-6 col-sm-12 col-md-3  p-0">
                    <div className="pl_box">
                      <img
                        src="./assets/img/logo/strategicpartners/2.png"
                        style={{ width: "50%", height: "50%" }}
                      />
                    </div>
                  </div>
                  <div className="col-6 col-sm-12 col-md-3  p-0">
                    <div className="pl_box">
                      <img
                        src="./assets/img/logo/strategicpartners/3.png"
                        style={{ width: "50%", height: "50%" }}
                      />
                    </div>
                  </div>
                  <div className="col-6 col-sm-12 col-md-3  p-0">
                    <div className="pl_box">
                      <img
                        src="./assets/img/logo/strategicpartners/4.png"
                        style={{ width: "50%", height: "50%" }}
                      />
                    </div>
                  </div>
                  <div className="col-6 col-sm-12 col-md-3  p-0">
                    <div className="pl_box">
                      <img
                        src="./assets/img/logo/strategicpartners/5.png"
                        style={{ width: "50%", height: "50%" }}
                      />
                    </div>
                  </div>
                  <div className="col-6 col-sm-12 col-md-3  p-0">
                    <div className="pl_box">
                      <img
                        src="./assets/img/logo/strategicpartners/6.png"
                        style={{ width: "50%", height: "50%" }}
                      />
                    </div>
                  </div>
                  <div className="col-6 col-sm-12 col-md-3  p-0">
                    <div className="pl_box">
                      <img
                        src="./assets/img/logo/strategicpartners/7.png"
                        style={{ width: "50%", height: "50%" }}
                      />
                    </div>
                  </div>
                  <div className="col-6 col-sm-12 col-md-3  p-0">
                    <div className="pl_box">
                      <img
                        src="./assets/img/logo/strategicpartners/8.png"
                        style={{ width: "50%", height: "50%" }}
                      />
                    </div>
                  </div>
                  <div className="col-6 col-sm-12 col-md-3  p-0">
                    <div className="pl_box">
                      <img
                        src="./assets/img/logo/strategicpartners/9.png"
                        style={{ width: "50%", height: "50%" }}
                      />
                    </div>
                  </div>
                  <div className="col-6 col-sm-12 col-md-3  p-0">
                    <div className="pl_box">
                      <img
                        src="./assets/img/logo/strategicpartners/10.png"
                        style={{ width: "50%", height: "50%" }}
                      />
                    </div>
                  </div>
                  <div className="col-6 col-sm-12 col-md-3  p-0">
                    <div className="pl_box">
                      <img
                        src="./assets/img/logo/strategicpartners/11.png"
                        style={{ width: "50%", height: "50%" }}
                      />
                    </div>
                  </div>
                  <div className="col-6 col-sm-12 col-md-3  p-0">
                    <div className="pl_box">
                      <img
                        src="./assets/img/logo/strategicpartners/12.png"
                        style={{ width: "50%", height: "50%" }}
                      />
                    </div>
                  </div>
                  <div className="col-6 col-sm-12 col-md-3  p-0">
                    <div className="pl_box">
                      <img
                        src="./assets/img/logo/strategicpartners/13.png"
                        style={{ width: "50%", height: "50%" }}
                      />
                    </div>
                  </div>
                  <div className="col-6 col-sm-12 col-md-3  p-0">
                    <div className="pl_box">
                      <img
                        src="./assets/img/logo/strategicpartners/14.png"
                        style={{ width: "50%", height: "50%" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="innrsec-spacing inner-topSpece">
        <div className="container">
          <div className="row">
            <div className="col-md-9 mx-auto">
              <div className="blocksText blocksbtn-margin">
                <h2 data-aos="zoom-in" data-aos-duration="1500">
                  Backers & Investors
                </h2>
                <p data-aos="zoom-in-up" data-aos-duration="1500">
                  It has survived not only five centuries, but also the leap
                  into electronic typesetting, remaining essentially unchanged.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="boxSkyblue-bg boxSkyblue-bg-arena boxDark-bg-arenaInve">
          <div
            className="boxDark-bg boxDark-bg-arena"
            style={{ paddingLeft: "80px" }}
          >
            <div
              className="partners-logos investors-logos"
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-duration="1000"
            >
              <div className="investor">
                <div className="partner">
                  <div className="row mt-4">
                    <div className="col-6 col-sm-12 col-md-3  p-0">
                      <div className="pl_box">
                        <img
                          src="./assets/img/logo/backersInvestors/1.png"
                          style={{ width: "30%", height: "30%" }}
                        />
                      </div>
                    </div>
                    <div className="col-6 col-sm-12 col-md-3  p-0">
                      <div className="pl_box">
                        <img
                          src="./assets/img/logo/backersInvestors/3.png"
                          style={{ width: "50%", height: "50%" }}
                        />
                      </div>
                    </div>
                    <div className="col-6 col-sm-12 col-md-3  p-0">
                      <div className="pl_box">
                        <img
                          src="./assets/img/logo/backersInvestors/4.png"
                          style={{ width: "30%", height: "40%" }}
                        />
                      </div>
                    </div>
                    <div className="col-6 col-sm-12 col-md-3  p-0">
                      <div className="pl_box">
                        <img
                          src="./assets/img/logo/backersInvestors/5.png"
                          style={{ width: "50%", height: "50%" }}
                        />
                      </div>
                    </div>
                    <div className="col-6 col-sm-12 col-md-3  p-0">
                      <div className="pl_box">
                        <img
                          src="./assets/img/logo/backersInvestors/7.png"
                          style={{ width: "50%", height: "50%" }}
                        />
                      </div>
                    </div>
                    <div className="col-6 col-sm-12 col-md-3  p-0">
                      <div className="pl_box">
                        <img
                          src="./assets/img/logo/backersInvestors/8.png"
                          style={{ width: "50%", height: "50%" }}
                        />
                      </div>
                    </div>
                    <div className="col-6 col-sm-12 col-md-3  p-0">
                      <div className="pl_box">
                        <img
                          src="./assets/img/logo/backersInvestors/9.png"
                          style={{ width: "50%", height: "50%" }}
                        />
                      </div>
                    </div>
                    <div className="col-6 col-sm-12 col-md-3  p-0">
                      <div className="pl_box">
                        <img
                          src="./assets/img/logo/backersInvestors/10.png"
                          style={{ width: "50%", height: "50%" }}
                        />
                      </div>
                    </div>
                    <div className="col-6 col-sm-12 col-md-3  p-0">
                      <div className="pl_box">
                        <img
                          src="./assets/img/logo/backersInvestors/11.png"
                          style={{ width: "50%", height: "50%" }}
                        />
                      </div>
                    </div>
                    <div className="col-6 col-sm-12 col-md-3  p-0">
                      <div className="pl_box">
                        <img
                          src="./assets/img/logo/backersInvestors/12.png"
                          style={{ width: "50%", height: "50%" }}
                        />
                      </div>
                    </div>
                    <div className="col-6 col-sm-12 col-md-3  p-0">
                      <div className="pl_box">
                        <img
                          src="./assets/img/logo/backersInvestors/13.png"
                          style={{ width: "50%", height: "50%" }}
                        />
                      </div>
                    </div>
                    <div className="col-6 col-sm-12 col-md-3  p-0">
                      <div className="pl_box">
                        <img
                          src="./assets/img/logo/backersInvestors/14.png"
                          style={{ width: "50%", height: "50%" }}
                        />
                      </div>
                    </div>
                    <div className="col-6 col-sm-12 col-md-3  p-0">
                      <div className="pl_box">
                        <img
                          src="./assets/img/logo/backersInvestors/15.png"
                          style={{ width: "50%", height: "50%" }}
                        />
                      </div>
                    </div>
                    <div className="col-6 col-sm-12 col-md-3  p-0">
                      <div className="pl_box">
                        <img
                          src="./assets/img/logo/backersInvestors/16.png"
                          style={{ width: "50%", height: "50%" }}
                        />
                      </div>
                    </div>
                    <div className="col-6 col-sm-12 col-md-3  p-0">
                      <div className="pl_box">
                        <img
                          src="./assets/img/logo/backersInvestors/17.png"
                          style={{ width: "50%", height: "50%" }}
                        />
                      </div>
                    </div>
                    <div className="col-6 col-sm-12 col-md-3  p-0">
                      <div className="pl_box">
                        <img
                          src="./assets/img/logo/backersInvestors/18.png"
                          style={{ width: "50%", height: "50%" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="innrsec-spacing inner-topSpece" id="team">
        <div className="boxSkyblue-bg">
          <div className="boxDark-bg">
            <div className="container">
              <div className="row">
                <div className="col-md-9 mx-auto">
                  <div className="blocksText blockswhiteText blocksbtn-margin">
                    <h2 data-aos="zoom-in" data-aos-duration="1500">
                      Galaxy Arena Team
                    </h2>
                    <p data-aos="zoom-in-up" data-aos-duration="1500">
                      Whatever you seek, you will find in Galaxy Arena .
                      Boasting three behemoth sectors, each one more impressive
                      than the other.
                    </p>
                  </div>
                </div>
                {Team.map((person) => (
                  <div className="col-lg-4 col-md-6">
                    <div
                      className="gArena-team "
                      data-aos="fade-up"
                      data-aos-anchor-placement="top-bottom"
                      data-aos-duration="2000"
                    >
                      <div className="gArena-teamInner" key={person.id}>
                        <>
                          <div className="teamMember-img">
                            <img src={person.image} className="" />
                          </div>
                          <div className="teamMember-info">
                            <h6>{person.name}</h6>
                            <p>{person.role}</p>
                            <Link
                              to={"/teaminfo/" + person.id}
                              className="more-Info webBtn"
                            >
                              Info
                            </Link>
                          </div>
                        </>
                      </div>
                    </div>
                  </div>
                ))}
                <div className="col-md-9 mx-auto">
                  <div className="blocksText blockswhiteText blocksbtn-margin">
                    <h2 data-aos="zoom-in" data-aos-duration="1500">
                      Advisor
                    </h2>
                  </div>
                </div>
                {Team2.map((person) => (
                  <div className="col-lg-4 col-md-6">
                    <div
                      className="gArena-team "
                      data-aos="fade-up"
                      data-aos-anchor-placement="top-bottom"
                      data-aos-duration="2000"
                    >
                      <div className="gArena-teamInner" key={person.id}>
                        <>
                          <div className="teamMember-img">
                            <img src={person.image} className="" />
                          </div>
                          <div className="teamMember-info">
                            <h6>{person.name}</h6>
                            <p>{person.role}</p>
                            <Link
                              to={"/teaminfo/" + person.id}
                              className="more-Info webBtn"
                            >
                              Info
                            </Link>
                          </div>
                        </>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="innrsec-spacing pt-0" id="affiliates">
        <div className="container">
          <div className="row">
            <div className="col-md-10 mx-auto">
              <div className="blocksText blocksbtn-margin">
                <h2 data-aos="zoom-in" data-aos-duration="1500">
                  Affiliates
                </h2>
                <p data-aos="zoom-in-up" data-aos-duration="1500">
                  Meet our Fighters
                </p>
              </div>
            </div>
            <div className="affiliates affiliatesIneer">
              <Slider {...afflites}>
                <div className="slideItems">
                  <div className="affiliates-group">
                    <div className="content-overlay"></div>
                    <img
                      src="./assets/img/affiliate/20.jpg"
                      className="img-fluid"
                    />
                    <a
                      href="https://www.instagram.com/paigevanzant/?hl=en"
                      className="instaIcon fadeIn-bottom"
                      target="_blank"
                    >
                      <i className="fa fa-instagram"></i>
                    </a>
                  </div>
                  <div className="affiliates-group">
                    <div className="content-overlay"></div>
                    <img
                      src="./assets/img/affiliate/21.jpg"
                      className="img-fluid"
                    />
                    <a
                      // href="https://www.instagram.com/brutalbostwick/?utm_medium=copy_link"
                      className="instaIcon fadeIn-bottom"
                      target="_blank"
                    >
                      <i className="fa fa-instagram"></i>
                    </a>
                  </div>
                </div>
                <div className="slideItems">
                  <div className="affiliates-group">
                    <div className="content-overlay"></div>
                    <img
                      src="./assets/img/affiliate/3.jpeg"
                      className="img-fluid"
                    />
                    <a
                      href="https://www.instagram.com/pearlgonzalez/?hl=en"
                      className="instaIcon fadeIn-bottom"
                      target="_blank"
                    >
                      <i className="fa fa-instagram"></i>
                    </a>
                  </div>
                  <div className="affiliates-group">
                    <div className="content-overlay"></div>
                    <img
                      src="./assets/img/affiliate/4.jpeg"
                      className="img-fluid"
                    />
                    <a
                      href="https://www.instagram.com/mikerashid/?utm_medium=copy_link"
                      className="instaIcon"
                      target="_blank"
                    >
                      <i className="fa fa-instagram"></i>
                    </a>
                  </div>
                </div>

                <div className="slideItems">
                  <div className="affiliates-group">
                    <div className="content-overlay"></div>
                    <img
                      src="./assets/img/affiliate/5.jpeg"
                      className="img-fluid"
                    />
                    <a
                      href="https://www.instagram.com/officialprimetime718/?utm_medium=copy_link"
                      className="instaIcon"
                      target="_blank"
                    >
                      <i className="fa fa-instagram"></i>
                    </a>
                  </div>
                  <div className="affiliates-group">
                    <div className="content-overlay"></div>
                    <img
                      src="./assets/img/affiliate/7.jpeg"
                      className="img-fluid"
                    />
                    <a
                      href="https://www.instagram.com/tnt__mma/?utm_medium=copy_link"
                      className="instaIcon"
                      target="_blank"
                    >
                      <i className="fa fa-instagram"></i>
                    </a>
                  </div>
                </div>
                <div className="slideItems">
                  <div className="affiliates-group">
                    <div className="content-overlay"></div>
                    <img
                      src="./assets/img/affiliate/8.jpeg"
                      className="img-fluid"
                    />
                    <a
                      href="https://www.instagram.com/samanthajerring/?utm_medium=copy_link"
                      className="instaIcon"
                      target="_blank"
                    >
                      <i className="fa fa-instagram"></i>
                    </a>
                  </div>
                  <div className="affiliates-group">
                    <div className="content-overlay"></div>
                    <img
                      src="./assets/img/affiliate/9.jpeg"
                      className="img-fluid"
                    />
                    <a href="#" className="instaIcon" target="_blank">
                      <i className="fa fa-instagram"></i>
                    </a>
                  </div>
                </div>
                <div className="slideItems">
                  <div className="affiliates-group">
                    <div className="content-overlay"></div>
                    <img
                      src="./assets/img/affiliate/10.jpeg"
                      className="img-fluid"
                    />
                    <a
                      href="https://www.instagram.com/randy_costa/?utm_medium=copy_link"
                      className="instaIcon"
                      target="_blank"
                    >
                      <i className="fa fa-instagram"></i>
                    </a>
                  </div>
                  <div className="affiliates-group">
                    <div className="content-overlay"></div>
                    <img
                      src="./assets/img/affiliate/11.jpeg"
                      className="img-fluid"
                    />
                    <a
                      href="https://www.instagram.com/ariannyceleste/?utm_medium=copy_link"
                      className="instaIcon"
                      target="_blank"
                    >
                      <i className="fa fa-instagram"></i>
                    </a>
                  </div>
                </div>
                <div className="slideItems">
                  <div className="affiliates-group">
                    <div className="content-overlay"></div>
                    <img
                      src="./assets/img/affiliate/12.jpeg"
                      className="img-fluid"
                    />
                    <a
                      href="https://www.instagram.com/hannahgoldy/?utm_medium=copy_link"
                      className="instaIcon"
                      target="_blank"
                    >
                      <i className="fa fa-instagram"></i>
                    </a>
                  </div>
                  <div className="affiliates-group">
                    <div className="content-overlay"></div>
                    <img
                      src="./assets/img/affiliate/13.jpg"
                      className="img-fluid"
                    />
                    <a
                      href="https://www.instagram.com/tv/Cf4bTE0lHun/?igshid=YmMyMTA2M2Y%3D"
                      className="instaIcon"
                      target="_blank"
                    >
                      <i className="fa fa-instagram"></i>
                    </a>
                  </div>
                </div>
                <div className="slideItems">
                  <div className="affiliates-group">
                    <div className="content-overlay"></div>
                    <img
                      src="./assets/img/affiliate/14.jpg"
                      className="img-fluid"
                    />
                    <a
                      href="https://www.instagram.com/jessearnett/?hl=en"
                      className="instaIcon"
                      target="_blank"
                    >
                      <i className="fa fa-instagram"></i>
                    </a>
                  </div>
                  <div className="affiliates-group">
                    <div className="content-overlay"></div>
                    <img
                      src="./assets/img/affiliate/15.jpg"
                      className="img-fluid"
                    />
                    <a
                      href="https://www.instagram.com/chriscamozzimma/?hl=en"
                      className="instaIcon"
                      target="_blank"
                    >
                      <i className="fa fa-instagram"></i>
                    </a>
                  </div>
                </div>
                <div className="slideItems">
                  <div className="affiliates-group">
                    <div className="content-overlay"></div>
                    <img
                      src="./assets/img/affiliate/16.jpg"
                      className="img-fluid"
                    />
                    <a
                      href="https://www.instagram.com/milijancevic_nadja_13/?hl=en"
                      className="instaIcon"
                      target="_blank"
                    >
                      <i className="fa fa-instagram"></i>
                    </a>
                  </div>
                  <div className="affiliates-group">
                    <div className="content-overlay"></div>
                    <img
                      src="./assets/img/affiliate/17.jpg"
                      className="img-fluid"
                    />
                    <a
                      href="https://www.instagram.com/mma.mehdi.zeidvand"
                      className="instaIcon"
                      target="_blank"
                    >
                      <i className="fa fa-instagram"></i>
                    </a>
                  </div>
                </div>
                <div className="slideItems">
                  <div className="affiliates-group">
                    <div className="content-overlay"></div>
                    <img
                      src="./assets/img/affiliate/2.jpeg"
                      className="img-fluid"
                    />
                    <a
                      href="https://www.instagram.com/paigevanzant/?hl=en"
                      className="instaIcon"
                      target="_blank"
                    >
                      <i className="fa fa-instagram"></i>
                    </a>
                  </div>
                  <div className="affiliates-group">
                    <div className="content-overlay"></div>
                    <img
                      src="./assets/img/affiliate/19.jpg"
                      className="img-fluid"
                    />
                    <a
                      href="https://www.instagram.com/therealtarzann/?hl=en"
                      className="instaIcon"
                      target="_blank"
                    >
                      <i className="fa fa-instagram"></i>
                    </a>
                  </div>
                </div>
                <div className="slideItems">
                  <div className="affiliates-group">
                    <div className="content-overlay"></div>
                    <img
                      src="./assets/img/affiliate/1.jpeg"
                      className="img-fluid"
                    />
                    <a
                      // href="https://www.instagram.com/paigevanzant/?hl=en"
                      className="instaIcon"
                      target="_blank"
                    >
                      <i className="fa fa-instagram"></i>
                    </a>
                  </div>
                  <div className="affiliates-group">
                    <div className="content-overlay"></div>
                    <img
                      src="./assets/img/affiliate/22.jpg"
                      className="img-fluid"
                    />
                    <a
                      // href="https://www.instagram.com/therealtarzann/?hl=en"
                      className="instaIcon"
                      target="_blank"
                    >
                      <i className="fa fa-instagram"></i>
                    </a>
                  </div>
                </div>
                <div className="slideItems">
                  <div className="affiliates-group">
                    <div className="content-overlay"></div>
                    <img
                      src="./assets/img/affiliate/23.jpg"
                      className="img-fluid"
                    />
                    <a
                      // href="https://www.instagram.com/paigevanzant/?hl=en"
                      className="instaIcon"
                      target="_blank"
                    >
                      <i className="fa fa-instagram"></i>
                    </a>
                  </div>
                  <div className="affiliates-group">
                    <div className="content-overlay"></div>
                    <img
                      src="./assets/img/affiliate/24.jpg"
                      className="img-fluid"
                    />
                    <a
                      // href="https://www.instagram.com/therealtarzann/?hl=en"
                      className="instaIcon"
                      target="_blank"
                    >
                      <i className="fa fa-instagram"></i>
                    </a>
                  </div>
                </div>
                <div className="slideItems">
                  <div className="affiliates-group">
                    <div className="content-overlay"></div>
                    <img
                      src="./assets/img/affiliate/6.jpeg"
                      className="img-fluid"
                    />
                    <a
                      href="https://www.instagram.com/thejuggernauthunt/?utm_medium=copy_link"
                      className="instaIcon"
                      target="_blank"
                    >
                      <i className="fa fa-instagram"></i>
                    </a>
                  </div>
                  <div className="affiliates-group">
                    <div className="content-overlay"></div>
                    <img
                      src="./assets/img/affiliate/25.jpg"
                      className="img-fluid"
                    />
                    <a
                      // href="https://www.instagram.com/thejuggernauthunt/?utm_medium=copy_link"
                      className="instaIcon"
                      target="_blank"
                    >
                      <i className="fa fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>
      <section className="innrsec-spacing inner-topSpece">
        <div className="boxSkyblue-bg boxSkyblue-bg-arena">
          <div className="boxDark-bg boxDark-bg-arena">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="blocksText blockswhiteText blocksbtn-margin">
                    <h2 data-aos="zoom-in" data-aos-duration="1500">
                      Galaxy Map
                    </h2>
                    <p data-aos="zoom-in-up" data-aos-duration="1500">
                      Space is impossible to navigate without plotting a course.
                    </p>
                    <p data-aos="zoom-in-up" data-aos-duration="1500">
                      That’s why we’ve crafted the timeline below to detail our
                      funding and development goals:
                    </p>
                  </div>
                  <div className="text-center">
                    <Slider {...settings}>
                      <div className="slideItems">
                        <div className="demo">
                          <div className="content-overlay"></div>
                          <img
                            src="./assets/img/map/1.png"
                            className="img-fluid"
                          />
                        </div>
                      </div>
                      <div className="slideItems">
                        <div className="demo">
                          <div className="content-overlay"></div>
                          <img
                            src="./assets/img/map/2.png"
                            className="img-fluid"
                          />
                        </div>
                      </div>
                      <div className="slideItems">
                        <div className="demo">
                          <div className="content-overlay"></div>
                          <img
                            src="./assets/img/map/3.png"
                            className="img-fluid"
                          />
                        </div>
                      </div>
                      <div className="slideItems">
                        <div className="demo">
                          <div className="content-overlay"></div>
                          <img
                            src="./assets/img/map/4.png"
                            className="img-fluid"
                          />
                        </div>
                      </div>
                    </Slider>
                  </div>
                  {/* </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="blocksText blocksbtn-margin essence-newpage"
        id="tockenomics"
      >
        <div className="container">
          <div className="row">
            <div className="col-md-9 mx-auto">
              <div className=" essence-page-sec">
                <h2 data-aos="fade-left" data-aos-duration="1500">
                  TOKENOMICS
                </h2>
                <p data-aos="fade-right" data-aos-duration="1500">
                  Galaxy Arena Tokenomics
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="innrsec-spacing inner-topSpece">
        <div className="boxSkyblue-bg boxSkyblue-bg-arena">
          <div className="boxDark-bg boxDark-bg-arena">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="text-center">
                    <img
                      src="./assets/img/logo/table.png"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="text-center">
                    <img
                      src="./assets/img/tock.png"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="text-center">
                    <img
                      src="./assets/img/chart/tokenflowchart.png"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="text-center">
                    <img
                      src="./assets/img/chart/tokenflowchart2.png"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="innrsec-spacing pt-0">
        <div className="container">
          <div className="row">
            <div className="col-md-10 mx-auto">
              <div className="blocksText blocksbtn-margin">
                <h2 data-aos="zoom-in" data-aos-duration="1500">
                  Galaxy Arena
                </h2>
                <p data-aos="zoom-in-up" data-aos-duration="1500">
                  A new world arrives in…
                </p>
              </div>
            </div>
            <div className="col-md-8 mx-auto">
              <div className="boxDark-bg boxDark-bg-arena p-3 boxDark-bg-arena-border">
                <div className="boxSkyblue-bg boxSkyblue-bg-arena py-5 boxSkyblue-bg-arena-border">
                  <div className="countdownArena">
                    <div className="contdownArena-inner">
                      <ul>
                        <li
                          className=""
                          data-aos="flip-up"
                          data-aos-duration="2000"
                        >
                          <h2>{days}</h2>
                          <p>Day</p>
                        </li>
                        <li
                          className=""
                          data-aos="flip-down"
                          data-aos-duration="1900"
                        >
                          <h2>{hours}</h2>
                          <p>Hours</p>
                        </li>
                        <li
                          className=""
                          data-aos="flip-up"
                          data-aos-duration="3000"
                        >
                          <h2>{minutes}</h2>
                          <p>Minutes</p>
                        </li>
                        <li
                          className=""
                          data-aos="flip-down"
                          data-aos-duration="1900"
                        >
                          <h2>{seconds}</h2>
                          <p>Second’s</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <section
        className="innrsec-spacing inner-topSpece"
        style={{ backgroundColor: "#FF69B4" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-9 mx-auto">
              <div className="blocksText blocksbtn-margin">
                <h2
                  data-aos="zoom-in"
                  data-aos-duration="1500"
                  style={{ color: "white" }}
                >
                  Stay up to date with all the latest news and event
                </h2>
              </div>
            </div>
            <div className="blocksText blocksbtn-margin">
              <input type="text" id="ip2" placeholder="Your e-mail" />
              <div className="blocksText blocksbtn-margin" style={{marginTop:'15px'}}>
                <button className ="buttonstyle" type="submit">Subscribe Now</button>
              </div>
              <div className="blocksText blocksbtn-margin">
                <h4
                  data-aos="zoom-in"
                  data-aos-duration="1500"
                  style={{ color: "white" }}
                >
                  *By submitting your e-mail address, your agree with our
                  privacy policy
                </h4>
              </div>
            </div>

            {/* <div className="col-md-12">
              <div className="row">
                <div className="col-md-4">
                  <div
                    className="planet-sizedBox"
                    data-aos="zoom-in"
                    data-aos-duration="1500"
                  >
                    <div className="planet-sizedimg">
                      <img
                        src="./assets/img/yf.png"
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <div className="planet-sizedContent">
                      <small>By: Galaxy Arena</small>
                      <h6>Galaxy Arena Raises 717K in Private...</h6>
                      <p>
                        With the VR headset sales expected to triple by 2024,
                        shifting the future of workplaces, live events,
                        education...
                      </p>
                      <a href="#" className="more-Info webBtn">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div
                    className="planet-sizedBox"
                    data-aos="zoom-in"
                    data-aos-duration="1500"
                  >
                    <div className="planet-sizedimg">
                      <img
                        src="./assets/img/mw.png"
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <div className="planet-sizedContent">
                      <small>By: Galaxy Arena</small>
                      <h6>Galaxy Arena Raises 717K in Private...</h6>
                      <p>
                        With the VR headset sales expected to triple by 2024,
                        shifting the future of workplaces, live events,
                        education...
                      </p>
                      <a href="#" className="more-Info webBtn">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div
                    className="planet-sizedBox"
                    data-aos="zoom-in"
                    data-aos-duration="1500"
                  >
                    <div className="planet-sizedimg">
                      <img
                        src="./assets/img/wp.png"
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <div className="planet-sizedContent">
                      <small>By: Galaxy Arena</small>
                      <h6>Galaxy Arena Raises 717K in Private...</h6>
                      <p>
                        With the VR headset sales expected to triple by 2024,
                        shifting the future of workplaces, live events,
                        education...
                      </p>
                      <a href="#" className="more-Info webBtn">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;
