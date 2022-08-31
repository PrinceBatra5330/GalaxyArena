import React, { useEffect } from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Zoning = () => {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div>
      <Header />
      <section class="zoning-page-top-section"></section>
      <section class="innrsec-spacing inner-topSpece">
        <div class="container">
          <div class="row">
            <div class="col-md-9 mx-auto">
              <div class="blocksText ">
                <h2 data-aos="zoom-in" data-aos-duration="1500">
                  Galaxy Arena Metaverse Zoning
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="innrsec-spacing inner-topSpece">
        <div class="boxSkyblue-bg boxSkyblue-bg-arena">
          <div class="boxDark-bg boxDark-bg-arena">
            <div class="container">
              <div class="row">
                <div class="col-md-9 mx-auto">
                  <div class="blocksText blockswhiteText blocksbtn-margin mb-0 pb-0">
                    <h2 data-aos="zoom-in" data-aos-duration="1500">
                      The Arena
                    </h2>
                    <p data-aos="zoom-in-up" data-aos-duration="1500">
                      30.000 square meters of explorable digital space divided
                      into 6 action packed floors with the arena at its focal
                      point. Every floor will have its own unique amenities,
                      attractions, functionalities and experiences. The arena
                      will boast a virtual reality space for real world
                      celebrity concerts, fighting events and for various types
                      of performances. We plan to unlock new revenue streams by
                      acquiring volumetric video capture technology and further
                      monetizing already existing events, offering a brand-new
                      way to directly connect with their fanbase.
                    </p>
                  </div>
                </div>
                <div class="col-md-12">
                  <div
                    class="zoning-gym innersec"
                    data-aos="fade-up"
                    data-aos-anchor-placement="bottom-bottom"
                  >
                    <div class="zoning-gymslider">
                      <Slider {...settings}>
                        <div class="gymslider-img">
                          <img src="./assets/img/entertainment1.jpg" />
                        </div>
                        <div class="gymslider-img">
                          <img src="./assets/img/entertainment2.jpg" />
                        </div>
                        <div class="gymslider-img">
                          <img src="./assets/img/entertainment3.jpg" />
                        </div>
                        <div class="gymslider-img">
                          <img src="./assets/img/entertainment4.jpg" />
                        </div>
                        <div class="gymslider-img">
                          <img src="./assets/img/entertainment5.jpg" />
                        </div>
                        <div class="gymslider-img">
                          <img src="./assets/img/entertainment4.jpg" />
                        </div>
                        <div class="gymslider-img">
                          <img src="./assets/img/entertainment3.jpg" />
                        </div>
                        <div class="gymslider-img">
                          <img src="./assets/img/entertainment2.jpg" />
                        </div>
                      </Slider>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="innrsec-spacing inner-topSpece">
        <div class="container">
          <div class="row">
            <div class="col-md-9 mx-auto">
              <div class="blocksText blocksbtn-margin">
                <h2 data-aos="zoom-in" data-aos-duration="1500">
                  The Gym
                </h2>
                <p class="">
                  A state of the art facility that provides an array of
                  interactive virtual reality health and fitness movement mini -
                  games.{" "}
                  <b>
                    This is the first Move to Earn game in VR, where players can
                    stay fit and get paid
                  </b>
                  . With our own twist to the very popular play to earn model
                  “train to earn” promises to keep users coming back for more.
                </p>
                <p>
                  A wide range of fully immersive fitness studios connecting
                  celebrities, world renowned athletes and trainers to users
                  while offering courses & classes online in VR. Enjoy
                  stretching, yoga, fitness movements, refloxology, and other
                  exercise activities in group or private sessions from the
                  comfort of your own home.{" "}
                </p>
                <h6>
                  <b>MOVE TO EARN APPS</b>
                </h6>
                <p>
                  Galaxians will be able to reap rewards by participating in VR
                  mini games found in the exclusive spaces of their favorite
                  move to earn apps placed strategically within the Galaxy gym.
                  These include big names such as Menzy, Dotmoovs & Fitevo.{" "}
                </p>
              </div>
            </div>
            <div class="col-md-12">
              <div
                class="zoning-gym innersec"
                data-aos="fade-up"
                data-aos-anchor-placement="bottom-bottom"
              >
                <div class="zoning-gymslider">
                  <Slider {...settings}>
                    <div class="gymslider-img">
                      <img src="./assets/img/arenagym/1.jpg" />
                    </div>
                    <div class="gymslider-img">
                      <img src="./assets/img/arenagym/2.jpg" />
                    </div>
                    <div class="gymslider-img">
                      <img src="./assets/img/arenagym/3.jpg" />
                    </div>
                    <div class="gymslider-img">
                      <img src="./assets/img/arenagym/4.jpg" />
                    </div>
                    <div class="gymslider-img">
                      <img src="./assets/img/arenagym/5.jpg" />
                    </div>
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="zoning-page-the-tower-section">
        <div class="container">
          <div class="row">
            <div class="col-md-10 mx-auto">
              <div class="blocksText blocksbtn-margin thetower-section">
                <h2
                  data-aos="fade-down"
                  data-aos-easing="linear"
                  data-aos-duration="1500"
                  class="the-tower-text"
                >
                  The Tower <small class="comingSoont">(Coming Soon)</small>
                </h2>
                <p class="text-white">
                  Standing alongside the arena and the gym, the Galaxy Tower is
                  a marvel on its own. While the top floor is reserved for our
                  Sky lounge social nightclub & celestial casino, the rest of
                  the tower will include a collection of 20,000 unique NFT
                  units, divided into luxury suites, lounges, office spaces, and
                  digital real estate. Each of these areas will be uniquely
                  designed by our creative team, who will build each space with
                  one-of-a-kind styles and exclusive decorative pieces in line
                  with its respective use case.
                </p>
              </div>
            </div>

            <div class="col-md-12">
              <div
                class="zoning-gym"
                data-aos="zoom-in-down"
                data-aos-duration="1500"
              >
                <div class="zoning-gymslider">
                  <Slider {...settings}>
                    <div class="gymslider-img">
                      <img src="./assets/img/galexytower1.jpg" />
                    </div>
                    <div class="gymslider-img">
                      <img src="./assets/img/galexytower5.jpg" />
                    </div>
                    <div class="gymslider-img">
                      <img src="./assets/img/galexytower3.jpg" />
                    </div>
                    <div class="gymslider-img">
                      <img src="./assets/img/galexytower4.jpg" />
                    </div>
                    <div class="gymslider-img">
                      <img src="./assets/img/galexytower5.jpg" />
                    </div>
                    <div class="gymslider-img">
                      <img src="./assets/img/galexytower6.jpg" />
                    </div>
                    <div class="gymslider-img">
                      <img src="./assets/img/galexytower7.jpg" />
                    </div>
                    <div class="gymslider-img">
                      <img src="./assets/img/galexytower3.jpg" />
                    </div>
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Zoning;
