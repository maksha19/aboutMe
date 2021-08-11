import React from "react";
import { Card, Container } from "react-bootstrap";
import { IconContext } from "react-icons";
import {
  FaGraduationCap,
  FaLaptop,
  FaDotCircle,
  FaStarOfLife,
  FaHandPointRight,
  FaReact,
  FaJava,
  FaAdobe,
} from "react-icons/fa";
import {
  GiCargoShip,
  GiShakingHands,
  GiBookshelf,
  GiWhiteBook,
} from "react-icons/gi";
import { BsGearWideConnected } from "react-icons/bs";
import { FcIphone } from "react-icons/fc";
import { GoBrowser } from "react-icons/go";
import { RiQuillPenFill } from "react-icons/ri";
import { IoLogoNodejs } from "react-icons/io";

const Body = () => {
  return (
    <Container style={{ color: "white" }}>
      <div style={{ paddingTop: "2rem" }}>
        <div className="row body-row-center">
          <div
            style={{ marginBottom: "2rem" }}
            className=" col-sm-12 col-md-6 col-6 col-11 "
          >
            <Card
              style={{
                height: "100%",
                backgroundColor: "#455c86",
              }}
            >
              <div className="activity-header-wrapper">
                <IconContext.Provider
                  value={{
                    size: "4rem",
                    style: { marginRight: ".5rem", color: "white" },
                  }}
                >
                  <FaLaptop />
                </IconContext.Provider>
                <div className="activity-header">working Experience</div>
              </div>
              <Card.Body>
                <div className="row">
                  <div className="activity-row-wrapper">
                    <div className="activity-body-icon">
                      <IconContext.Provider
                        value={{
                          size: "2rem",
                        }}
                      >
                        <FcIphone />
                      </IconContext.Provider>
                    </div>
                    <div className="activity-body-text">
                      Government Technology Agency(GovTech-Singapore)
                    </div>
                  </div>
                  <div className="activity-row-wrapper">
                    <div className="activity-body-icon">
                      <IconContext.Provider
                        value={{
                          size: "2rem",
                        }}
                      >
                        <GoBrowser />
                      </IconContext.Provider>
                    </div>
                    <div className="activity-body-text">
                      Genting International Gaming & Resort Technology PTE
                      LTD(GIGRT)
                    </div>
                  </div>
                  <div className="activity-row-wrapper">
                    <div className="activity-body-icon">
                      <IconContext.Provider
                        value={{
                          size: "2rem",
                        }}
                      >
                        <BsGearWideConnected />
                      </IconContext.Provider>
                    </div>
                    <div className="activity-body-text">
                      Systems on Silicon Manufacturing(SSMC)
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div
            style={{ marginBottom: "2rem" }}
            className=" col-sm-12 col-md-6 col-6 col-11"
          >
            <Card
              style={{
                height: "100%",
                backgroundColor: "#455c86",
                color: "#fff",
              }}
            >
              <div
                style={{ backgroundColor: "#455c86" }}
                className="activity-header-wrapper"
              >
                <IconContext.Provider
                  value={{
                    size: "4rem",
                    style: { marginRight: ".5rem", color: "#fff" },
                  }}
                >
                  <GiCargoShip />
                </IconContext.Provider>
                <div className="activity-header">Skill</div>
              </div>
              <Card.Body>
                <div className="row">
                  <div className="activity-row-wrapper">
                    <div className="activity-body-icon">
                      <IconContext.Provider
                        value={{
                          size: "2rem",
                        }}
                      >
                        <IoLogoNodejs />
                      </IconContext.Provider>
                    </div>
                    <div className="activity-body-text">
                      Node.js, Serverless architecture, Amazon Web Services(
                      Lambda, DynamoDB, S3)
                    </div>
                  </div>
                  <div className="activity-row-wrapper">
                    <div className="activity-body-icon">
                      <IconContext.Provider
                        value={{
                          size: "2rem",
                        }}
                      >
                        <FaReact />
                      </IconContext.Provider>
                    </div>
                    <div className="activity-body-text">
                      React Expo, React Js
                    </div>
                  </div>
                  <div className="activity-row-wrapper">
                    <div className="activity-body-icon">
                      <IconContext.Provider
                        value={{
                          size: "2rem",
                        }}
                      >
                        <FaJava />
                      </IconContext.Provider>
                    </div>
                    <div className="activity-body-text">
                      Java 8, SQL Server, MySQL, Apache Kafka
                    </div>
                  </div>
                  <div className="activity-row-wrapper">
                    <div className="activity-body-icon">
                      <IconContext.Provider
                        value={{
                          size: "2rem",
                        }}
                      >
                        <RiQuillPenFill />
                      </IconContext.Provider>
                    </div>
                    <div className="activity-body-text">
                      Figma, Adobe Illustrator, Adobe XD
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div
            style={{ marginBottom: "2rem" }}
            className=" col-sm-12 col-md-6  col-6 col-11"
          >
            <Card
              style={{
                height: "100%",
                backgroundColor: "#455c86",
                color: "#fff",
              }}
            >
              <div
                style={{ backgroundColor: "#455c86" }}
                className="activity-header-wrapper"
              >
                <IconContext.Provider
                  value={{
                    size: "4rem",
                    style: { marginRight: ".5rem", color: "#fff" },
                  }}
                >
                  <FaGraduationCap />
                </IconContext.Provider>
                <div className="activity-header">Education</div>
              </div>
              <Card.Body>
                <div className="row">
                  <div className="activity-row-wrapper">
                    <div className="activity-body-icon">
                      <IconContext.Provider
                        value={{
                          size: "2rem",
                        }}
                      >
                        <GiBookshelf />
                      </IconContext.Provider>
                    </div>
                    <div className="activity-body-text">
                      Post graduate in system analysis from National University
                      of Singapore (2018-2019)
                    </div>
                  </div>
                  <div className="activity-row-wrapper">
                    <div className="activity-body-icon">
                      <IconContext.Provider
                        value={{
                          size: "2rem",
                        }}
                      >
                        <GiWhiteBook />
                      </IconContext.Provider>
                    </div>
                    <div className="activity-body-text">
                      Bachelor of Mechanical Engineering from Anna University,
                      chennai (2012- 2016)
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div
            style={{ marginBottom: "2rem" }}
            className=" col-sm-12 col-md-6  col-6 col-11"
          >
            <Card style={{ height: "100%", backgroundColor: "#455c86" }}>
              <div className="activity-header-wrapper">
                <IconContext.Provider
                  value={{
                    size: "4rem",
                    style: { marginRight: ".5rem", color: "white" },
                  }}
                >
                  <GiShakingHands />
                </IconContext.Provider>
                <div className="activity-header">Activity</div>
              </div>
              <Card.Body>
                <div className="row">
                  <div className="activity-row-wrapper">
                    <div className="activity-body-icon">
                      <IconContext.Provider
                        value={{
                          size: "2rem",
                        }}
                      >
                        <FaHandPointRight />
                      </IconContext.Provider>
                    </div>
                    <div className="activity-body-text">
                      Executive committee member in Tampines Tamil Toastmaster
                      club.
                    </div>
                  </div>
                  <div className="my-club-role">
                    <div className="activity-row-wrapper">
                      <div className="activity-body-icon">
                        <IconContext.Provider
                          value={{
                            size: "1rem",
                          }}
                        >
                          <FaStarOfLife />
                        </IconContext.Provider>
                      </div>
                      <div className="activity-body-text">
                        President 2021-2022
                      </div>
                    </div>
                    <div className="activity-row-wrapper">
                      <div className="activity-body-icon">
                        <IconContext.Provider
                          value={{
                            size: "1rem",
                          }}
                        >
                          <FaStarOfLife />
                        </IconContext.Provider>
                      </div>
                      <div className="activity-body-text">
                        Vice President 2020-2021
                      </div>
                    </div>
                    <div className="activity-row-wrapper">
                      <div className="activity-body-icon">
                        <IconContext.Provider
                          value={{
                            size: "1rem",
                          }}
                        >
                          <FaStarOfLife />
                        </IconContext.Provider>
                      </div>
                      <div className="activity-body-text">
                        Secretary 2019-2020
                      </div>
                    </div>
                  </div>

                  <div className="activity-row-wrapper">
                    <div className="activity-body-icon">
                      <IconContext.Provider
                        value={{
                          size: "2rem",
                        }}
                      >
                        <FaHandPointRight />
                      </IconContext.Provider>
                    </div>
                    <div className="activity-body-text">
                      Volunteering in District-80 Toastmaster International
                      Event.
                    </div>
                  </div>
                  <div className="activity-row-wrapper">
                    <div className="activity-body-icon">
                      <IconContext.Provider
                        value={{
                          size: "2rem",
                        }}
                      >
                        <FaHandPointRight />
                      </IconContext.Provider>
                    </div>
                    <div className="activity-body-text">
                      Volunteer in chess event organized by Tampines CC
                      Singapore
                    </div>
                  </div>
                  <div className="activity-row-wrapper">
                    <div className="activity-body-icon">
                      <IconContext.Provider
                        value={{
                          size: "2rem",
                        }}
                      >
                        <FaHandPointRight />
                      </IconContext.Provider>
                    </div>
                    <div className="activity-body-text">
                      Volunteering in kids event organized by Indian.SG
                      Singapore
                    </div>
                  </div>
                  <div className="activity-row-wrapper">
                    <div className="activity-body-icon">
                      <IconContext.Provider
                        value={{
                          size: "2rem",
                        }}
                      >
                        <FaHandPointRight />
                      </IconContext.Provider>
                    </div>
                    <div className="activity-body-text">
                      Volunteering in youth event organized by Tamil Language
                      and Cultural Society Singapore
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Body;
