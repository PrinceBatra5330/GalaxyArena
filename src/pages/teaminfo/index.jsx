import React, { useState, useEffect } from "react";
import ".";
import "./style.scss";
import Header from "../../components/header";
import Footer from "../../components/footer";
import teams from "../../data/team.json";
import { useParams } from "react-router-dom";
const Teaminfo = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { id } = useParams();
  // console.log(id);
  const [personInfo, setPersonInfo] = useState({});
  useEffect(() => {
    const person = teams.find((person) => person.id == id);
    setPersonInfo(person);
  }, [id]);
  // console.log("informations", personInfo);

  return (
    <>
      <Header />
      <div>
        <section className="tititlebox light ">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12">
                {/* <div className="section_divider"></div> */}
                <div className="section_divider zoning_divide_top"></div>
              </div>
              <div className="col-12  col-lg-8 text-center">
                <h1>{personInfo.name}</h1>
              </div>
              <div className="col-12">
                {/* <div className="section_divider d-none d-lg-block"></div> */}
                <div className="section_divider zoning_divide_bottom d-none d-lg-block"></div>
              </div>
            </div>
          </div>
        </section>
        <section className="teaminfo_box light">
          <div className="container">
            <div className="row">
              <div className="col-12  col-md-4">
                <div className="team_media">
                  <img src={"../" + personInfo.image} />
                  <div className="linkWrap">
                    {personInfo?.social_links?.map((link) => (
                      <a target="_" href={link.link}>
                        {link.type == "upwork" ? (
                          <img src="images/upwork2.png" style={{height:'20px',width:"50px"}}/> 
                        ) : (
                          <i className={"bi bi-" + link.type}> </i>
                        )}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-8">
                <p>{personInfo.role}</p>
                <p>{personInfo.about}</p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};
export default Teaminfo;
