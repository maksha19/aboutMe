import React from "react";
import { Card, Container } from "react-bootstrap";
import { IconContext } from "react-icons";
import {
  FaGraduationCap,
  FaLaptop,
  FaDotCircle,
  FaStarOfLife,
} from "react-icons/fa";
import { GiCargoShip, GiShakingHands } from "react-icons/gi";

const Body = () => {
  return (
    <Container>
      <div style={{ marginTop: "2rem" }}>
        <div className="row body-row-center">
          <div
            style={{ marginBottom: "2rem" }}
            className=" col-sm-12 col-md-6 col-6 col-11 "
          >
            <Card
              style={{
                backgroundColor: "#1793bb",
                height: "100%",
              }}
            >
              <Card.Body>
                <IconContext.Provider
                  value={{
                    size: "4rem",
                    style: { marginRight: ".5rem", color: "white" },
                  }}
                >
                  <FaLaptop />
                </IconContext.Provider>
                <div>working Experience</div>
                <div>
                  <div>Government Technology Agency(GovTech-Singapore) </div>
                </div>
                <div>
                  <div>
                    Genting International Gaming & Resort Technology PTE
                    LTD(GIGRT)
                  </div>
                </div>
                <div>
                  <div>Systems on Silicon Manufacturing(SSMC) </div>
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
                backgroundColor: "#1793bb",
                height: "100%",
              }}
            >
              <Card.Body>
                <div>Skill</div>
                <IconContext.Provider
                  value={{
                    size: "4rem",
                    style: { marginRight: ".5rem", color: "white" },
                  }}
                >
                  <GiCargoShip />
                </IconContext.Provider>
              </Card.Body>
            </Card>
          </div>
          <div
            style={{ marginBottom: "2rem" }}
            className=" col-sm-12 col-md-6  col-6 col-11"
          >
            <Card
              style={{
                backgroundColor: "#1793bb",
                height: "100%",
              }}
            >
              <Card.Body>
                <div>Education</div>
                <IconContext.Provider
                  value={{
                    size: "4rem",
                    style: { marginRight: ".5rem", color: "white" },
                  }}
                >
                  <FaGraduationCap />
                </IconContext.Provider>
                <div>
                  <div>
                    National University of Singapore Post graduate in system
                    analysis ( 2018-2019) With 4/5 CGP
                  </div>
                </div>
                <div>
                  <div>
                    ANNA University Bachelor of Mechanical Engineering (2012-
                    2016) with 7.78/10 CGP.
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
                backgroundColor: "#1793bb",
                height: "100%",
              }}
            >
              <Card.Body>
                <div>Activity</div>
                <IconContext.Provider
                  value={{
                    size: "4rem",
                    style: { marginRight: ".5rem", color: "white" },
                  }}
                >
                  <GiShakingHands />
                </IconContext.Provider>
                <div className="row">
                  <div className="activity-list-wrapper">
                    <IconContext.Provider
                      value={{
                        size: "1rem",
                        style: { marginRight: ".5rem", color: "white" },
                      }}
                    >
                      <FaDotCircle />
                    </IconContext.Provider>
                    Executive committee member in Tampines Tamil Toastmaster
                    club.
                    <div className="my-club-role">
                      <div>
                        <IconContext.Provider
                          value={{
                            size: ".7rem",
                            style: { marginRight: ".5rem", color: "white" },
                          }}
                        >
                          <FaStarOfLife />
                        </IconContext.Provider>
                        President 2021-2022
                      </div>
                      <div>
                        <IconContext.Provider
                          value={{
                            size: ".7rem",
                            style: { marginRight: ".5rem", color: "white" },
                          }}
                        >
                          <FaStarOfLife />
                        </IconContext.Provider>
                        Vice President 2020-2021
                      </div>
                      <div>
                        <IconContext.Provider
                          value={{
                            size: ".7rem",
                            style: { marginRight: ".5rem", color: "white" },
                          }}
                        >
                          <FaStarOfLife />
                        </IconContext.Provider>
                        Secretary 2019-2020
                      </div>
                    </div>
                  </div>
                  <div className="activity-list-wrapper">
                    <IconContext.Provider
                      value={{
                        size: "1rem",
                        style: { marginRight: ".5rem", color: "white" },
                      }}
                    >
                      <FaDotCircle />
                    </IconContext.Provider>
                    Volunteering in District-80 Toastmaster International Event.
                  </div>
                  <div className="activity-list-wrapper">
                    <IconContext.Provider
                      value={{
                        size: "1rem",
                        style: { marginRight: ".5rem", color: "white" },
                      }}
                    >
                      <FaDotCircle />
                    </IconContext.Provider>
                    Volunteer in chess event organized by Tampines CC Singapore
                  </div>
                  <div className="activity-list-wrapper">
                    <IconContext.Provider
                      value={{
                        size: "1rem",
                        style: { marginRight: ".5rem", color: "white" },
                      }}
                    >
                      <FaDotCircle />
                    </IconContext.Provider>
                    Volunteering in kids event organized by Indian.SG Singapore
                  </div>
                  <div>
                    <IconContext.Provider
                      value={{
                        size: "1rem",
                        style: { marginRight: ".5rem", color: "white" },
                      }}
                    >
                      <FaDotCircle />
                    </IconContext.Provider>
                    Volunteering in youth event organized by Tamil Language and
                    Cultural Society Singapore
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
