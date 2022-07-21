import React, { useState, useEffect } from "react";
import "./style.scss";
import moment from "moment";
import { HashLink, NavHashLink } from "react-router-hash-link";
import "react-h5-audio-player/lib/styles.css";
import "../../styles.css";
import { Link } from "react-router-dom";
import Header from "../../components/header";
import Footer from "../../components/footer";
import teams from "../../data/team.json";

const Home = () => {
  // var today = new Date();
  // var date = +today.getDate();
  // const hour = today.getHours();
  // let minutes = today.getMinutes();
  // let seconds = today.getSeconds();
  // console.log(seconds);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [showSemicolon, setShowSemicolon] = useState(false);

  useEffect(() => {
    setInterval(() => {
      const now = moment();
      const then = moment("2022-04-25 12:12:12", "YYYY-MM-DD hh:mm:ss");
      const countdown = moment(then - now);
      setDays(countdown.format("D"));
      setHours(countdown.format("HH"));
      setMinutes(countdown.format("mm"));
      setSeconds(countdown.format("ss"));
    }, 1000);
  }, []);

  const togglePlay = () => {
    const myAudio = document.getElementById("myVideo");
    if (myAudio.muted == true) {
      myAudio.muted = false;
    } else {
      myAudio.muted = true;
    }
  };

  return (
    <>
      <Header />
      <div className="sound">
        <img src="images/sound.svg" onClick={togglePlay} />
      </div>
      <div className="home_social">
        <ul>
          <li>
            <a href="https://mobile.twitter.com/galaxyarena_io/">
              <i className="bi bi-twitter"></i>
            </a>
          </li>
          <li>
            <a
              target="_"
              href="https://instagram.com/galaxyarena.io?utm_medium=copy_link"
            >
              <i className="bi bi-instagram"></i>
            </a>
          </li>
          <li>
            <a href="https://discord.gg/rarhPDw5YT">
              <i className="bi bi-discord"></i>
            </a>
          </li>
          <li>
            <a href="https://t.me/galaxyarenatg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-send"
                viewBox="0 0 16 16"
              >
                <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" />
              </svg>
            </a>
          </li>
        </ul>
      </div>
      <section className="herovideo" id="home">
        <div className="video-section">
          <video
            playsInline
            // controls="{false}"
            autoPlay="{autoplay}"
            className="framevideo"
            loop
            muted
            id="myVideo"
          >
            <source
              src="https://verbio-cng-prod.s3.ap-south-1.amazonaws.com/galaxyarena.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </section>
      <section className="clearfixsection"></section>
      <section className="private_salebox light">
        <div className="">
          <div className="row align-items-center">
            <div className="col-12 col-md-6 col-lg-3 text-center">
              <Link to="privatesale">
                <button className="base_btn base_gradient">
                  Join Private Sale
                </button>
              </Link>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="listbox">
                <div className="row ">
                  <div className="col-6 col-6">
                    <p>Funds Raised: </p>
                  </div>
                  <div className="col-6 col-6">
                    {" "}
                    <p>$850,000 </p>
                  </div>
                  <div className="col-6 col-6">
                    <p> Soft Cap:</p>{" "}
                  </div>
                  <div className="col-6 col-6">
                    {" "}
                    <p>$500,000</p>
                  </div>
                  <div className="col-6 col-6">
                    <p> Target Goal:</p>{" "}
                  </div>
                  <div className="col-6 col-6">
                    {" "}
                    <p>1.200.000</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-12 col-lg-6">
              <p className="totalvalue">
                Total <span>$850,000</span>
              </p>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "75%" }}
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <div className="progress-range">
                <p className="startpoint">0</p>
                <p className="endpoint">$1.200.000</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="adventure_box light sec_padding">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-12">
              <h1 className="section_heading">
                Endless adventures in the Galaxy Arena metaverse
              </h1>
              <p className="section_para">
                Whatever you seek, you will find in Galaxy Arena . Boasting
                three behemoth sectors, each one more impressive than the other.
              </p>
              <HashLink to="/zoning/#arena">
                <h3 className="New">
                  Sector 1 – The Galaxy Arena entertainment venue
                </h3>
              </HashLink>
              <p className="section_para">
                Opening its doors in May of 2022, the alpha version of the arena
                will be available for the first metaverse pioneers to explore.
                The exterior, seating and ring areas will become the first
                sections available to tour, the heart of Galaxy Arena . Here,
                use of volumetric video capture technology, live streaming of
                fights or any type of events will be made possible. Watch your
                favourite events from unobstructed angles, without the hustle of
                waiting in long lines or fearing cancellation due to strict
                safety measures. Galaxy Arena offers reduced ticket prices and
                essentially zero travel time as virtual events become the norm.
              </p>
              <HashLink to="/zoning/#gym">
                <h3 className="New">Sector 2 – The Galaxy Arena gym</h3>
              </HashLink>
              <p className="section_para">
                Galaxy Arena is transforming traditional home workouts.. By
                putting our own twist on the “play-to-earn” model, we have come
                up with a new system we call “TRAIN-TO-EARN”. Financial
                incentives make rewards that much sweeter, so what better way to
                motivate people to work out than turning fitness into a game
                where you can earn money. Our state-of-the-art gym offers an
                array of health and fitness challenges incorporated into mini
                games, that will give you the ability to exercise and earn
                ESSENCE ($ESNC). Are you ready to get paid and stay fit? Gym
                doors open July 2022!
              </p>
              <HashLink to="/zoning/#tower">
                <h3 className="New">Sector 3 – Galaxy Tower</h3>
              </HashLink>
              <p className="section_para">
                Standing alongside the arena and the gym, the Galaxy Tower is a
                marvel on its own. While the top floor is reserved for our
                Celestial Casino, the rest of the tower will include a
                collection of 20,000 unique NFT units, divided into luxury
                suites, rooms and lounge areas. Each of these areas will be
                uniquely designed by our creative team, who will create each
                room with one-of-a-kind designs and exclusive furniture pieces
                in line with its respective use cases.
              </p>
              <p className="mt-3">
                Stay tuned for official updates on the Galaxy Tower grand
                opening.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="galaxyteam_box light sec_padding" id="team">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6">
              <h1>Galaxy Arena Team</h1>
              <p className="section_para">
                Meet the engineers and dreamers who make Galaxy Arena
                possible,one airlock at a time:
              </p>
            </div>
          </div>
          <div className="row mt-4 assist_team ">
            {teams.map((person) => (
              <div className="col-12 col-md-3  col-lg-2">
                <div className="gt_box">
                  <div className="imgbox">
                    <img src={person.image} />
                  </div>
                  <div className="content">
                    <div className="teamMembe_r">
                      <h4>{person.name}</h4>
                      <p>{person.role}</p>
                    </div>
                    <Link to={"/team_detail/" + person.id}>info</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="global_partner_box light sec_padding">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6">
              <h1>Partners</h1>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-12 col-md-3  p-0">
              <div className="pl_box">
                <a target="_blank" href="https://dehub.net/web/home">
                  <img src="images/dehub.png" />
                </a>
              </div>
            </div>
            <div className="pl_box">
              <a target="_blank" href="https://metafity.io">
                <img src="images/metafity.png" />
              </a>
            </div>
            <div className="col-12 col-md-3  p-0">
              <div className="pl_box">
                <a target="_blank" href="https://x-tech.am/website">
                  <img src="images/c21.png" />
                </a>
              </div>
            </div>
            <div className="col-12 col-md-3  p-0">
              <div className="pl_box">
                <a target="_blank" href="https://coinbound.io/">
                  <img src="images/c22.png" />
                </a>
              </div>
            </div>
            <div className="col-12 col-md-3  p-0">
              <div className="pl_box">
                <a target="_blank" href="https://arloopa.com/">
                  <img src="images/c23.png" />
                </a>
              </div>
            </div>
            <div className="col-12 col-md-3  p-0">
              <div className="pl_box each_four">
                <a
                  target="_blank"
                  href="https://www.instagram.com/crypto_wiener/?utm_medium=copy_link"
                >
                  <img src="images/c24.png" />
                </a>
              </div>
            </div>
            <div className="col-12 col-md-3  p-0">
              <div className="pl_box">
                <a target="_blank" href="https://www.simplex.com/">
                  <img src="images/c25.png" />
                </a>
              </div>
            </div>
            <div className="col-12 col-md-3  p-0">
              <div className="pl_box">
                <a target="_blank" href="https://polygon.technology/">
                  <img src="images/c26.png" />
                </a>
              </div>
            </div>
            <div className="col-12 col-md-3  p-0">
              <div className="pl_box">
                <a target="_blank" href="https://www.workitsocial.ca/">
                  <img src="images/c27.png" />
                </a>
              </div>
            </div>
            <div className="col-12 col-md-3  p-0">
              <div className="pl_box each_four">
                <a target="_blank" href="https://8i.com/">
                  <img src="images/c28.png" />
                </a>
              </div>
            </div>
            <div className="col-12 col-md-3  p-0">
              <div className="pl_box">
                <a target="_blank" href="https://ar-watches.com/">
                  <img src="images/c29.png" />
                </a>
              </div>
            </div>
            <div className="col-12 col-md-3  p-0">
              <div className="pl_box">
                <a target="_blank" href="https://www.firstroundmanagement.com/">
                  <img src="images/c31.png" />
                </a>
              </div>
            </div>
            <div className="col-12 col-md-3  p-0">
              <div className="pl_box">
                <a
                  target="_blank"
                  href="https://www.instagram.com/bullybynature.inc/?utm_medium=copy_link/"
                >
                  <img src="images/c32.png" />
                </a>
              </div>
            </div>
            <div className="col-12 col-md-3  p-0">
              <div className="pl_box each_four">
                <a target="_blank" href="https://360punch.ca//">
                  <img src="images/c33.png" />
                </a>
              </div>
            </div>
            <div className="col-12 col-md-3  p-0">
              <div className="pl_box">
                <a target="_blank" href="https://tristargymwestisland.com/">
                  <img src="images/c34.png" />
                </a>
              </div>
            </div>
            <div className="col-12 col-md-3  p-0">
              <div
                className="pl_box"
                // style={{ width: "230px", height: "220px" }}
              >
                <a target="_blank" href="https://www.unrealengine.com/en-US">
                  <img src="images/news12.png" />
                </a>
              </div>
            </div>
            <div className="col-12 col-md-3  p-0">
              <div
                className="pl_box"
                // style={{ width: "200px", height: "80px" }}
              >
                <a target="_blank" href="https://readyplayer.me/">
                  <img src="images/image.png" />
                </a>
              </div>
            </div>
            <div className="col-12 col-md-3  p-0">
              <div className="pl_box">
                <a target="_blank" href="https://metagait.am/">
                  <img src="images/MetaGait.png" />
                </a>
              </div>
            </div>
            <div className="col-12 col-md-3  p-0">
              <div className="pl_box">
                <a target="_blank" href="https://metagait.am/">
                  <img src="images/lasmeta.svg" />
                </a>
              </div>
            </div>
            <div className="col-12 col-md-3  p-0">
              <div className="pl_box">
                <a target="_blank" href="/">
                  <img src="images/Menzy.png" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="global_partner_box light sec_padding">
        <div className="container">
          <div className="row ">
            <div className="col-12 col-lg-6">
              <h1>Backers Investors</h1>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-12 col-md-3  p-0">
              <div className="pl_box">
                <a target="_blank" href="https://www.unicornventures.co.in/">
                  <img src="images/invester/unicorn.svg" />
                </a>
              </div>
            </div>
            <div className="col-12 col-md-3  p-0">
              <div className="pl_box">
                <a
                  target="_blank"
                  href="https://zephyruscapital.com/incubator/"
                >
                  <img src="images/invester/zc.svg" />
                </a>
              </div>
            </div>
            <div className="col-12 col-md-3  p-0">
              <div className="pl_box">
                <a target="_blank" href="https://kenzoventures.io/">
                  <img src="images/invester/kenzo.svg" />
                </a>
              </div>
            </div>
            <div className="col-12 col-md-3  p-0">
              <div className="pl_box">
                <a target="_blank" href="https://unitycapitalvc.com/#/">
                  <img src="images/unity.png" />
                </a>
              </div>
            </div>
            <div className="col-12 col-md-3  p-0">
              <div className="pl_box">
                <a target="_blank" href="https://twitter.com/DeproLabs2022">
                  <img src="images/invester/dlabs.svg" />
                </a>
              </div>
            </div>
            <div className="col-12 col-md-3  p-0">
              <div className="pl_box">
                <a target="_blank" href="#/">
                  <img src="images/invester/genesis.svg" />
                </a>
              </div>
            </div>
            <div className="col-12 col-md-3  p-0">
              <div className="pl_box">
                <a target="_blank" href="#/">
                  <img src="images/invester/zeba.svg" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="affiliateteam_box light sec_padding" id="affiliates">
        <div className="container">
          <div className="row ">
            <div className="col-12 col-lg-6">
              <h1>Affiliates</h1>
              <p className="section_para">Meet our Fighters</p>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-12 col-md-3">
              <div className="afteam_box">
                <img src="images/affiliate/1.jpeg" />
                <div className="social_m_box">
                  <a
                    target="_"
                    href="https://instagram.com/taywstarling?utm_medium=copy_link"
                  >
                    <i className="bi bi-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-3 ">
              <div className="afteam_box">
                <img src="images/affiliate/2.jpeg" />
                <div className="social_m_box">
                  <a
                    target="_"
                    href="https://instagram.com/brutalbostwick?utm_medium=copy_link"
                  >
                    <i className="bi bi-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-3">
              <div className="afteam_box">
                <img src="images/affiliate/3.jpeg" />
                <div className="social_m_box">
                  <a
                    target="_"
                    href="https://instagram.com/pearlgonzalez?utm_medium=copy_link"
                  >
                    <i className="bi bi-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-3  ">
              <div className="afteam_box">
                <img src="images/affiliate/4.jpeg" />
                <div className="social_m_box">
                  <a
                    target="_"
                    href="https://instagram.com/mikerashid?utm_medium=copy_link"
                  >
                    <i className="bi bi-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-3 ">
              <div className="afteam_box">
                <img src="images/affiliate/5.jpeg" />
                <div className="social_m_box">
                  <a
                    target="_"
                    href="https://instagram.com/thejuggernauthunt?utm_medium=copy_link"
                  >
                    <i className="bi bi-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-3 ">
              <div className="afteam_box">
                <img src="images/affiliate/6.jpeg" />
                <div className="social_m_box">
                  <a
                    target="_"
                    href="https://instagram.com/officialprimetime718?utm_medium=copy_link"
                  >
                    <i className="bi bi-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-3">
              <div className="afteam_box">
                <img src="images/affiliate/7.jpeg" />
                <div className="social_m_box">
                  <a
                    target="_"
                    href="https://instagram.com/tnt__mma?utm_medium=copy_link"
                  >
                    <i className="bi bi-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-3">
              <div className="afteam_box">
                <img src="images/affiliate/8.jpeg" />
                <div className="social_m_box">
                  <a
                    target="_"
                    href="https://instagram.com/samanthajerring?utm_medium=copy_link"
                  >
                    <i className="bi bi-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-3 ">
              <div className="afteam_box">
                <img src="images/affiliate/9.jpeg" />
                <div className="social_m_box">
                  <a
                    target="_"
                    href="https://instagram.com/supersodiq?utm_medium=copy_link"
                  >
                    <i className="bi bi-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-3">
              <div className="afteam_box">
                <img src="images/affiliate/10.jpeg" />
                <div className="social_m_box">
                  <a
                    target="_"
                    href="https://instagram.com/randy_costa?utm_medium=copy_link"
                  >
                    <i className="bi bi-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-3">
              <div className="afteam_box">
                <img src="images/affiliate/11.jpeg" />
                <div className="social_m_box">
                  <a
                    target="_"
                    href="https://instagram.com/ariannyceleste?utm_medium=copy_link"
                  >
                    <i className="bi bi-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-3">
              <div className="afteam_box">
                <img src="images/affiliate/12.jpeg" />
                <div className="social_m_box">
                  <a
                    target="_"
                    href="https://instagram.com/hannahgoldy?utm_medium=copy_link"
                  >
                    <i className="bi bi-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-3">
              <div className="afteam_box">
                <img src="images/affiliate/13.jpg" />
                <div className="social_m_box">
                  <a
                    target="_"
                    href="https://www.instagram.com/tv/Cf4bTE0lHun/?igshid=YmMyMTA2M2Y="
                  >
                    <i className="bi bi-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-3">
              <div className="afteam_box">
                <img src="images/affiliate/14.jpg" />
                <div className="social_m_box">
                  <a
                    target="_"
                    href="https://www.instagram.com/jessearnett/?hl=en"
                  >
                    <i className="bi bi-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-3">
              <div className="afteam_box">
                <img src="images/affiliate/16.jpg" />
                <div className="social_m_box">
                  <a
                    target="_"
                    href="https://www.instagram.com/milijancevic_nadja_13/?hl=en"
                  >
                    <i className="bi bi-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-3">
              <div className="afteam_box">
                <img src="images/affiliate/15.jpg" />
                <div className="social_m_box">
                  <a
                    target="_"
                    href="https://www.instagram.com/chriscamozzimma/?hl=en"
                  >
                    <i className="bi bi-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-3">
              <div className="afteam_box">
                <img src="images/affiliate/17.jpg" />
                <div className="social_m_box">
                  <a
                    target="_"
                    href="https://www.instagram.com/mma.mehdi.zeidvand"
                  >
                    <i className="bi bi-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-3">
              <div className="afteam_box">
                <img src="images/affiliate/18.jpg" />
                <div className="social_m_box">
                  <a
                    target="_"
                    href="https://www.instagram.com/accounts/login/?next=/michaeldufort.mma/"
                  >
                    <i className="bi bi-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="counter_box light sec_padding">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h1 className="section_heading">Galaxy Arena</h1>
              <p className="section_para">A new world arrives in…</p>
            </div>
            <div className="col-12  mt-4">
              <div className="time_counter">
                <div className="cal_box">
                  <h2 id="days">{days}</h2>
                  <p>Days</p>
                </div>
                <div className="cal_box">
                  <h2 id="hours">{hours}</h2>
                  <p>Hours</p>
                </div>
                <div className="cal_box">
                  <h2 id="mins">{minutes}</h2>
                  <p>Minutes</p>
                </div>
                <div className="cal_box">
                  <h2 id="secs">{seconds}</h2>
                  <p>Seconds</p>
                </div>
                <div className="date"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="future_box light sec_padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12  col-lg-8 text-center">
              <h1 className="section_heading">The Future Has Arrived</h1>
              <p className="section_para">
                The metaverse is a new way to experience life online parallel to
                the physical world. Galaxy Arena is poised to become the premium
                destination for entertainment experiences like concerts,
                fighting events, e-commerce, e-sports, health & fitness, unique
                VR experiences and much much more. Here, you can watch live
                events broadcast straight from earth to the arena, train-to-earn
                or own a piece of digital real estate within the Galaxy Tower.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="section_divider"></div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-lg-4">
              <div className="info_card">
                <div className="iconbox">
                  <img src="images/icon1.svg" />
                </div>
                <div className="content">
                  <h4>Reduced costs</h4>
                  <p>
                    Lower prices on event tickets and gym memberships due to the
                    elimination of travel time and limited spacing. Using
                    blockchain technology transaction fees are reduced
                    significantly.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-4 ">
              <div className="info_card">
                <div className="iconbox">
                  <img src="images/icon2.svg" />
                </div>
                <div className="content">
                  <h4>Metaverse AR/VR Integration</h4>
                  <p>
                    Instant access to events with unobstructed views is made
                    possible by utilising VR/AR technology. Take advantage of
                    working out in the comfort and safety of your own home.
                    Galaxy Arena is open 24/7, 365 days a year with no chance of
                    cancellation due to gym closures and strict safety measures.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-4 ">
              <div className="info_card">
                <div className="iconbox">
                  <img src="images/icon3.svg" />
                </div>
                <div className="content">
                  <h4>TRAIN-TO-EARN Rewards System</h4>
                  <p>
                    What’s the best way to motivate people to work out ? Turn
                    working out into a game where money is on the line. Visit
                    the Galaxy Arena gym to take advantage of a plethora of
                    health and fitness challenges, where you can exercise and
                    earn ESSENCE.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="adventure_box light sec_padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10 text-center ">
              <h1 className="section_heading">Planet-Sized Partnerships</h1>
              <p className="section_para">
                Galaxy Arena has partnered with Coinbound, The Crypto Marketing
                Agency, Arloopa Inc and X-TECH.
              </p>
              <p className="section_para">
                {" "}
                Notable Coinbound companies include: eToro, Metamask, Cosmos,
                Nexo, Voyager, ShapeShift, okcoin, CryptoDaily, Gods Unchained,
                Prime XBT, Stake, and BlockCard.
                <br />
              </p>{" "}
              <p className="section_para">
                Arloopa Inc has developed apps for notable companies like
                Coca-Cola, Cosmopolitan Armenia, Brussels Airlines, and others.
                Arloopa Inc works hand-in-hand with X-TECH to deliver innovative
                AR and VR storytelling for Galaxy Arena fans, bringing the magic
                of the metaverse into the real world for upcoming Easter Egg
                hunts worldwide.{" "}
              </p>
              <p className="section_para">
                {" "}
                X-TECH has developed apps and interactive storytelling
                experiences for some of the most innovative companies including
                Pepsi, Thrifty Car Rentals, American Express, and others. To
                date, it’s developed over 200 websites, 16 games, 24 mobile
                apps, and 12 kinetic-based games pushing the boundaries of how
                technology and media can reinvent the digital landscape and
                gameify brands.
              </p>
            </div>
            {/* <div className="col-12 col-lg-6">
                            <img src='images/media4.jpeg'/>
                        </div> */}
          </div>
        </div>
      </section>
      <section className="startmap_box light sec_padding">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h1>Galaxy Map</h1>
              <p className="section_para">
                Space is impossible to navigate without plotting a course.{" "}
                <br />
                That’s why we’ve crafted the timeline below to detail our
                funding and development goals:
              </p>
            </div>
          </div>
          <div className="col-12 mt-5">
            <div className="sm_timeline">
              <div className="row">
                <div className="col-12 col-lg-6"></div>
                <div className="col-12 col-lg-6">
                  <h4 className="text-first">Q2.2022</h4>
                  <ul>
                    <li>
                      Grow team from 3 to 35 members.{" "}
                      <img
                        src="images/checked.png"
                        style={{
                          width: "20px",
                          height: "20px",
                          display: "inline-block",
                        }}
                      />
                    </li>
                    <li>
                      Raise $730K in pre - seed round.{" "}
                      <img
                        src="images/checked.png"
                        style={{
                          width: "20px",
                          height: "20px",
                          display: "inline-block",
                        }}
                      />
                    </li>
                    <li>
                      Lay the foundations for our IDO.{" "}
                      <img
                        src="images/checked.png"
                        style={{
                          width: "20px",
                          height: "20px",
                          display: "inline-block",
                        }}
                      />
                    </li>
                    <li>
                      Implement the Simplex widget on our website.{" "}
                      <img
                        src="images/checked.png"
                        style={{
                          width: "20px",
                          height: "20px",
                          display: "inline-block",
                        }}
                      />
                    </li>
                  </ul>
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-lg-6">
                  <h4 className="text-first">Q3.2022</h4>
                  <ul>
                    <li>
                      Finalize Alpha version of the Metaverse.
                      <img
                        src="images/checked.png"
                        style={{
                          width: "20px",
                          height: "20px",
                          display: "inline-block",
                        }}
                      />
                    </li>
                    <li>
                      Partner with similar fitness & crypto companies.
                      <img
                        src="images/checked.png"
                        style={{
                          width: "20px",
                          height: "20px",
                          display: "inline-block",
                        }}
                      />
                    </li>
                    <li>
                      Scale our team to over 50 hard working members.
                      <img
                        src="images/checked.png"
                        style={{
                          width: "20px",
                          height: "20px",
                          display: "inline-block",
                        }}
                      />
                    </li>
                    <li>
                      Empower social media presence (Linkedin, Twitter)
                      <img
                        src="images/checked.png"
                        style={{
                          width: "20px",
                          height: "20px",
                          display: "inline-block",
                        }}
                      />
                    </li>
                    <li>
                      Gain VC interest and investment.
                      <img
                        src="images/checked.png"
                        style={{
                          width: "20px",
                          height: "20px",
                          display: "inline-block",
                        }}
                      />
                    </li>
                    <li>
                      Connect with fighters, trainers and MMA companies
                      globally.
                      <img
                        src="images/checked.png"
                        style={{
                          width: "20px",
                          height: "20px",
                          display: "inline-block",
                        }}
                      />
                    </li>
                    <li>Release alpha to the public.</li>
                    <li>Add the networking/socializing feature in GA.</li>
                    <li>
                      Establish ourselves as the Move to Earn & Fitness
                      Metaverse.
                    </li>
                    <li>Finalize and launch our IDO on top tier launchpads.</li>
                    <li> On board top tier advisors.</li>
                  </ul>
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-lg-6"></div>
                <div className="col-12 col-lg-6">
                  <h4>Q4.2022</h4>
                  <ul>
                    <li>List on Tier 1 CEX’s.</li>
                    <li>Release our Genesis NFT collection.</li>
                    <li>Release our first train to earn VR game.</li>
                    <li>
                      Release our first VR live event with global viewers.
                    </li>
                    <li>Expand the Galaxy Arena Metaverse.</li>
                    <li>
                      {" "}
                      Prepare for our massive VR live event (Celebrity TBA).
                    </li>
                    <li> Bring sponsorship companies into our Metaverse.</li>
                    <li>
                      {" "}
                      Scale our Metaverse to acquire more users and companies.
                    </li>
                    <li> Launch on one of the top 5 CEX’s.</li>
                    <li>Implementation of VR meetings in GA. </li>
                    <li>Throw a live party in the Metaverse. </li>
                  </ul>
                  <div className="col-12 col-lg-6"></div>
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-lg-6">
                  <h4>Q1.2023</h4>
                  <ul>
                    <li>
                      {" "}
                      Make Galaxy Arena into a hub for all fitness, training and
                      health related crypto projects.
                    </li>
                    <li>Scale our users to 10,000 users daily.</li>
                    <li>Expand our Metaverse into a multiverse.</li>
                    <li>Grow our team into 100+ people.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="adventure_box light sec_padding">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6">
              <h1 className="section_heading">Nowhere to Go But Up</h1>
              <p className="section_para">
                According to Bloomberg, metaverses will be an 800 billion dollar
                industry by 2024. Similarly, NFT transactions have risen from 15
                million in 2018 to 325 million in 2021 and are on-trend to
                continue exploding as blockchain digital assets become more
                common place.
                <br /> <br />
                With the VR headset sales expected to triple by 2024, shifting
                the future of workplaces, live events, education and other
                in-person interactions online, it’s a matter of time before
                digital life occupies a higher percentage of the average persons
                day. <br /> <br />
                With the top 10 metaverse projects claiming less than 2% of the
                total crypto market cap, galaxy arena has huge room for growth.{" "}
                <br /> <br />
                We aim to become the go to destination for live streaming
                events, online esports, e-commerce, fitness training and health.
              </p>
            </div>
            <div className="col-12 col-lg-6">
              <img src="images/1111.png" />
            </div>
          </div>
        </div>
      </section>
      <section className="news__section">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-4">
              <div className="news__card">
                <div className="news__card_img">
                  <img src="images/yaho.png" />
                </div>
                <div className="news__card_content">
                  <p className="author">By: Galaxy Arena</p>
                  <h4>
                    Galaxy Arena Raises 717K in Private Sale before Launching
                    IEO on Top Ten Exchange
                  </h4>
                  <p>
                    Galaxy Arena is proud to announce it has raised 717K in
                    private sale before launching IEO on top ten exchange. All
                    roads lead to the Galaxy Arena: a virtual play-to-earn
                    intergalactic coliseum where earthly and outer world
                    sporting events meet.
                  </p>
                  <a
                    className="readmore"
                    target="_"
                    href="https://finance.yahoo.com/news/galaxy-arena-raises-600k-private-025200343.html?guccounter=1&guce_referrer=aHR0cHM6Ly92Mi5nYWxheHlhcmVuYS5pby8&guce_referrer_sig=AQAAADSYKOJC_EyfV6sonUqaJbkyPciszDbb05WVa8SC1T9elsFcz3wZvROz_AnqKzOQtgppw8_MrZFXvTGXe4rNh-ceKWqwBvrCeFntn60pXvQYXXy3k8CFHSSkvhFEvGy5FBwBTXjDeBPLXruAtJgcJhVs-z14jwne5LKmdTOz44ZT"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-4">
              <div className="news__card">
                <div className="news__card_img">
                  <img src="images/markitwatch.png" />
                </div>
                <div className="news__card_content">
                  <p className="author">By: Galaxy Arena</p>
                  <h4>
                    Galaxy Arena Raises 600k in Private Sale before Launching
                    IEO on Top Ten Exchange
                  </h4>
                  <p>
                    TORONTO, May 13, May 13, 2022 (GLOBE NEWSWIRE via COMTEX) --
                    TORONTO, May 13, 2022 (GLOBE NEWSWIRE) -- Galaxy Arena is
                    proud to announce it has raised 600k in private sale before
                    launching IEO on top ten exchange. All roads lead to the
                    Galaxy Arena: a virtual play-to-earn intergalactic coliseum
                    where earthly and outer world sporting events meet.
                  </p>
                  <a
                    className="readmore"
                    target="_"
                    href="https://www.marketwatch.com/press-release/galaxy-arena-raises-600k-in-private-sale-before-launching-ieo-on-top-ten-exchange-2022-05-13"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-4">
              <div className="news__card">
                <div className="news__card_img">
                  <img src="images/benzingapro.png" />
                </div>
                <div className="news__card_content">
                  <p className="author">By: Galaxy Arena</p>
                  <h4>
                    Galaxy Arena raises 600K in private sale before launching
                    IEO on top ten exchange
                  </h4>
                  <p>
                    Galaxy Arena is tapping into the endless possibilities of
                    the virtual world, unlocked with the explosion of
                    advancement in broadcasting and blockchain technologies.
                    Through exclusive partnerships with major athletic and
                    entertainment affiliates, Galaxy Arena is on track to upend
                    the way people tune in to live events, workout and purchase
                    real estate. After the fully-doxxed team led a private sale
                    that garnered over half a million dollars, it is now using
                    its roaring momentum to reinvest in areas that make the
                    metaverse one-of-a-kind.
                  </p>
                  <a
                    className="readmore"
                    target="_"
                    href="https://www.benzinga.com/pressreleases/22/05/ab27224318/galaxy-arena-raises-600k-in-private-sale-before-launching-ieo-on-top-ten-exchange"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
export default Home;
