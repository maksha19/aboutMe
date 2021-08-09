import React from "react";
import "./App.css";
import { IconContext } from "react-icons";
import { Card, Container } from "react-bootstrap";
import { SiMinutemailer, SiWhatsapp } from "react-icons/si";
import { BiHash } from "react-icons/bi";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const Header = () => {
  return (
    <Container className="center-screen">
      <div className="customize-container">
        <Card
          style={{
            backgroundColor: "#b04b42",
            height: "100%",
          }}
        >
          <Card.Body>
            <div style={{ height: "20%", marginBottom: "1rem" }}>
              <div className="text-end">
                <IconContext.Provider
                  value={{ size: "1.5rem", style: { marginRight: ".5rem" } }}
                >
                  <SiMinutemailer />
                </IconContext.Provider>
                maksha19@outlook.com
              </div>
              <div className="text-end">
                <IconContext.Provider
                  value={{ size: "1.5rem", style: { marginRight: ".5rem" } }}
                >
                  <SiWhatsapp />
                </IconContext.Provider>
                +65-8313 5769
              </div>
            </div>
            <div style={{ height: "70%" }} className="row">
              <div className="col-sm-12 col-md-3 col-ls-5  text-center">
                <div className="profile-circle ">
                  <img
                    className="profile-circle "
                    src={process.env.PUBLIC_URL + "/profile.jpeg"}
                    alt="test"
                  />
                </div>
                <div className="profile-name">Manikandan Shanmugam</div>
              </div>
              <div className=" align-self-center col-sm-12 col-md-9 col-ls-9">
                <div className="profile-text text-wrap">
                  <IconContext.Provider
                    value={{
                      size: "2rem",
                      style: { marginRight: ".5rem" },
                    }}
                  >
                    <FaQuoteLeft />
                  </IconContext.Provider>
                  A strong engineering professional with a Post Graduate in
                  Systems Analysis from National University of Singapore. Has a
                  Software Engineering experience in the Manufacturing, Gaming
                  industry and Government Technology Agency Singapore
                  <IconContext.Provider
                    value={{
                      size: "2rem",
                      style: { marginLeft: ".5rem" },
                    }}
                  >
                    <FaQuoteRight />
                  </IconContext.Provider>
                </div>
                <div className="profile-tags">
                  <IconContext.Provider
                    value={{
                      size: "2rem",
                      style: { marginRight: ".1rem" },
                    }}
                  >
                    <BiHash />
                  </IconContext.Provider>
                  Software Engineer | Bookworm | Author | Public Speaker |
                  Innovator | Volunteer
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
};

export default Header;
