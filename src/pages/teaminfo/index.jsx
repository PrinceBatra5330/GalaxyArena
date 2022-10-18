import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "../../components/header";
import Footer from "../../components/footer";
import teams from "../../data/team.json";
import { useParams } from "react-router-dom";

const TeamInfo = () => {
  const { id } = useParams();
  const [personInfo, setPersonInfo] = useState({});
  useEffect(() => {
    const person = teams.find((person) => person.id == id);
    setPersonInfo(person);
  }, [id]);
  console.log("informations", personInfo);
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Header />
      <section className="innrsec-spacing">
        <div className="container">
          <div className="row">
            <div className="col-md-9 mx-auto">
              <div className="blocksText blockswhiteText blocksbtn-margin blocksTextblack blackblock-top-sectext">
                <h2 data-aos="fade-up-right">{personInfo.name}</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="innrsec-spacing info-bg-image" pt-0>
        <div className="container">
          <div className="row">
            <div className="col-md-12 mx-auto">
              <div
                className="info-blackimg-section"
                data-aos="flip-left"
                data-aos-duration="1500"
              >
                <div className="info-team-img">
                  <img src={"../" + personInfo.image} />
                </div>
                <div className="linkWrap">
                  {personInfo?.social_links?.map((link) => (
                    <a target="_" href={link.link}>
                      {link.type == "upwork" ? (
                        <img
                          src="images/upwork.png"
                          style={{ height: "20px", width: "20px" }}
                        />
                      ) : (
                        <i className={"bi bi-" + link.type} style={{color:"skyblue"}}> </i>
                      )}
                    </a>
                  ))}
                </div>
                <h3>{personInfo.name}</h3>
                <small>{personInfo.role}</small>
                <p>{personInfo.about}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default TeamInfo;
