import React,{useEffect} from "react";
import "./style.scss";
import Header from "../../components/header";
import { Link } from "react-router-dom";
import Footer from "../../components/footer";
import analytics from "../../firebase";
import ReactGA from "react-ga";
const EssenceTokenomics = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  
  analytics
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      {/* <section className="ettitlebox light"> */}
      <section className="btitlebox light zoning_psudeo">
        <div className="container">
       
          <div className="row justify-content-center">
          <div className="col-12  col-lg-8 text-center">
              <h1>Essence Tokenomics</h1>
            </div>
            <div className="col-12">
              {/* <div className="section_divider"></div> */}
              <div className="section_divider zoning_divide_top"></div>
            </div>
           
            <div className="col-12">
              {/* <div className="section_divider zoning_divide_bottom es_section_divide "></div> */}
              <div className="section_divider zoning_divide_bottom "></div>
            </div>
          </div>
        </div>
      </section>
      <section className="tokenwelcome_box light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 ">
              <div className="pointerimage">
                <img src="images/media14.jpg" />
              </div>
            </div>
            <div className="col-12 mt-5">
              <h3>
                We are excited to announce the Galaxy Arena Essence token sale
                is now live!!
              </h3>
              <p>
                Galaxy arena's is a multi-use metaverse combined with VR
                technology where users can do everything available in a typical
                metaverse, with an extra special touch! Galaxy arena's focus on
                training, fighting and delivering amazing VR experiences by
                bringing in world renowned fighters on board.
              </p>
            </div>
          </div>
          <div className="row mt-4 align-items-center">
            <div className="col-12 col-md-6">
              <div className="row mt-4">
                <div className="col-12">
                  <h3>The token sale takes place in three phases :</h3>
                  <h4> 1. Private Sale</h4>
                  <h4> – Supply : 7.5%. 75,000,000 ESNC</h4>
                  <h4> – Price : $0.01</h4>
                  <h4> – Date : 03/02/2022</h4>
                  <h4> – Target : $750,000</h4>
                </div>
              </div>
              <div className="row mt-5">
                <div className="col-12">
                  <Link to="/privatesale">
                    <button className="base_btn base_primary">
                      Join Private Sale
                    </button>
                  </Link>
                </div>
              </div>
              <div className="row mt-5">
                <div className="col-12 mb-4">
                  <h4>
                    Two phases will follow, dates will be announced after our
                    private sale!
                  </h4>
                </div>
                <div className="col-12 col-lg-6">
                  <p> 2. Pre sale 1</p>
                  <p> – Supply : 7.5%. 75,000,000 ESNC</p>
                  <p> – Price : $0.015</p>
                  <p> – Date :TBA</p>
                  <p> – Target : $1,125,000</p>
                </div>
                <div className="col-12 col-lg-6">
                  <p> 2. Pre sale 2</p>
                  <p> – Supply :5%. 50,000,000 </p>
                  <p> – Price : $0.02</p>
                  <p> – Date :TBA</p>
                  <p> – Target : $1,000,000</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="">
                <img src="images/coin.gif" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="media_section light">
        <div className="container">
          <div className="row  justify-content-center align-items-center">
            <div className="col-12 col-md-6 mb-5 ">
              <img src="images/media15.png" />
            </div>
            <div className="col-12 col-md-6 mb-5">
              <img src="images/media16.webp" className="img-fluid" />
            </div>
          </div>
          <div className="row ">
            <div className="col-12 mb-5 ">
              <p>
                Galaxy Arena is a virtual reality play-to-earn metaverse that
                uses groundbreaking motion- capture metacast technology to give
                users an experience unlike any other. With the Arena being the
                focal point of our world, players can watch real, live
                profesional fighters duke it out, all mapped with cutting edge
                technology. Spectators can watch pay-per-view broadcasts from
                every conceivable angle—more detailed than if they were
                ringside. The sports potential of the arena extends beyond
                boxing matches, as this intergalactic arena can accommodate any
                earthly competition.
              </p>
              <p>
                Galaxy Arena will also host exclusive events as well, providing
                a variety of entertainment in addition to the pay-per-view
                broadcasts. Advertisers have limitless opportunities to gain
                exposure, from the Arena’s Jumbotron to other in-world
                billboards and unique ad space on users’ holographic Hub
                Watches.
              </p>
              <p>
                Let instinct earn you your fortune as you bet on fights, amass
                enough wealth to carve out a piece of Galaxy Arena’s real estate
                footprint and vie for control, or become an arena combatant and
                rise through the ranks of your own gladiator story. Need a break
                from having a target on your back as you ascend the ladder?
                There’s limitless fun to be had in Galaxy Arena’s
                ultra-immersive shops, Celestial Casino, Cosmic Zoo, and other
                attractions.
              </p>
              <p>
                Built on the blockchain where every character and item in the
                Galaxy Arena Metaverse is its own unique user-owned NFT, we’ve
                designed a platform as addictive as it is infinite. In Galaxy
                Arena, the world is your stage, and your destiny is your own to
                make. How will you spend your time? Building your character and
                perfecting your digital space? Training in the art of real-world
                fighting styles? Or maybe you’re enterprising enough to start
                your own Dojo and teach others for free or for-profit?
              </p>
            </div>
          </div>
          <div className="row ">
           
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
export default EssenceTokenomics;
