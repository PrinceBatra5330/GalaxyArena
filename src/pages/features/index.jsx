import React from "react";
import "./style.scss";

import Header from "../../components/header";
import Footer from "../../components/footer";
const Features = () => {
  return (
    <>
      <Header />
      <section className="ftitlebox light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="section_divider"></div>
            </div>
            <div className="col-12  col-lg-8 text-center">
              <h1>Features</h1>
            </div>
            <div className="col-12">
              <div className="section_divider res_divider "></div>
            </div>
          </div>
        </div>
      </section>
      <section className="welcome_box light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10">
              <h1>Welcome to Galaxy Arena</h1>
              <p>
                Galaxy Arena’s 30,000 square meters of explorable digital space
                are divided into floors, each with its own unique amenities,
                attractions, and functionality.
              </p>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-12 ">
              <div className="pointerimage">
                <img src="images/pointerimage.png" />
                <div className="pointer area1">
                  <i className="bi bi-plus"></i>
                </div>
                <div className="pointer area2">
                  <i className="bi bi-plus"></i>
                </div>
                <div className="pointer area3">
                  <i className="bi bi-plus"></i>
                </div>
                <div className="pointer area4">
                  <i className="bi bi-plus"></i>
                </div>
                <div className="pointer area5">
                  <i className="bi bi-plus"></i>
                </div>
                <div className="pointer area6">
                  <i className="bi bi-plus"></i>
                </div>
                <div className="pointer area7">
                  <i className="bi bi-plus"></i>
                </div>
                <div className="pointer area8">
                  <i className="bi bi-plus"></i>
                </div>
                <div className="pointer area9">
                  <i className="bi bi-plus"></i>
                </div>
                <div className="floorcontent floor1">
                  <h3>Resort</h3>
                  <p>
                    {" "}
                    Hit the links, try a game of tennis, or test your skill at
                    the archery range. When you’re ready to unwind, take
                    advantage of the many pools, lounges, gardens, office
                    spaces, shops, private booths, art galleries, and more.{" "}
                  </p>
                </div>
                <div className="floorcontent floor2">
                  <h3> Floor -2: Exhibition Floor </h3>
                  <p>
                    {" "}
                    4,500 digital square feet of exhibition hall and gallery
                    space for residents to show off their items, collectibles,
                    and artifacts from the Galaxy Arena universe.
                  </p>
                </div>
                <div className="floorcontent floor3">
                  <h3> Floor-3: Andromeda Aquarium </h3>
                  <p>
                    {" "}
                    Swim with the dolphins and try not to look directly into the
                    eyes of the Turtle of Time. Our futures are best left
                    unknown.
                  </p>
                </div>
                <div className="floorcontent floor4">
                  <h3> Floor -1: Milky Way Promenade (Extended) </h3>
                  <p>
                    {" "}
                    Outfit your resident with the latest gear, train up for your
                    next fight, or treat yourself to something nice for the real
                    world. Stay tuned as plots become available to purchase.
                  </p>
                </div>
                <div className="floorcontent floor5">
                  <h3> Storefronts </h3>
                  <p>
                    {" "}
                    Design, build, and sell your services or wares to your
                    fellow residents. Start a dojo and train the next legendary
                    warrior, open a weapon shop and peddle the latest gadgetry,
                    or rent out some ad space to earn a little coin on the side.
                  </p>
                </div>
                <div className="floorcontent floor6">
                  <h3>
                    {" "}
                    Floor 1: Arena Floor, Milky Way Promenade, Cosmic Zoo,
                    Botanical Garden{" "}
                  </h3>
                  <p>
                    {" "}
                    Watch fights beside the Arena. Shop for in-game gear,
                    real-life merch, services, and more on the Milky Way
                    Promenade. Blow your mind and see what wonders await at the
                    edge of the universe when you step into our Cosmic Zoo or
                    Botanical Garden.
                  </p>
                </div>
                <div className="floorcontent floor7">
                  <h3> Floor 2: Stadium Seating </h3>
                  <p>
                    {" "}
                    Watch the fight or other live event, cheer on your fighter,
                    place your bets, grab a snack, and try not to spill your
                    drink on your seatmate.
                  </p>
                </div>
                <div className="floorcontent floor8">
                  <h3> Floor 3: VIP Area </h3>
                  <p>
                    {" "}
                    Take in the Arena floor from the best seat in the house,
                    impress your guests, and mingle among your fellow Galaxy
                    Arena elite.
                  </p>
                </div>
                <div className="floorcontent floor9">
                  <h3> Floor 6: Galaxy Tower </h3>
                  <p>
                    {" "}
                    Feeling lucky? Earn your fortune via our array of classic
                    casino games. Gaze at worlds beyond our own and plan future
                    adventures in the Galactic Planetarium.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="media_section light">
        <div className="container">
          <div className="row ">
            <div className="col-12 mb-5 ">
              <img src="images/media11.jpeg" />
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-12 col-md-4 ">
              <h1>Highlights:</h1>
              <p>
                Play to earn. Amass Essence by interacting with the Galaxy Arena
                world. If you can dream it, you can sell it on the Milky Way
                Promenade. In-game or real life. Watch and bet on live PPV
                events. Explore the world and earn in-game cash by interacting
                with daily, weekly, and monthly rotating challenges. Scalability
                to other sports and events beyond fighting.
              </p>
            </div>
            <div className="col-12 col-md-4 mb-3">
              <img src="images/media12.jpeg" />
            </div>
            <div className="col-12 col-md-4 mb-3">
              <img src="images/media13.jpeg" />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
export default Features;
