import React from "react";
import "./App.css";
import { IconContext } from "react-icons";
import { Card, Container } from "react-bootstrap";
import { SiMinutemailer, SiWhatsapp } from "react-icons/si";

function App() {
  return (
    <div>
      <Container className="center-screen">
        <div className="customize-container">
          <Card
            style={{
              backgroundColor: "#1793bb",
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
                      src={process.env.PUBLIC_URL + "/random.jpg"}
                      alt="test"
                    />
                  </div>
                  <div className="profile-name">Manikandan Shanmugam</div>
                </div>
                <div className=" align-self-center col-sm-12 col-md-9 col-ls-9">
                  <div className="profile-text text-wrap">
                    Strong engineering professional with a Post Graduate in
                    Systems Analysis from National University of Singapore. As a
                    Software Engineer with experience in the Manufacturing and
                    Gaming industry.
                  </div>
                  <div className="profile-tags">
                    Software Engineer | Bookworm | Author | Public Speaker |
                    Innovators | Volunteer
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>
      </Container>
      <Container>
        <div style={{ marginTop: "2rem" }}>
          <div className="row">
            <div style={{ marginBottom: "2rem" }} className="col-md-3 col-6">
              <Card
                style={{
                  backgroundColor: "#1793bb",
                  height: "100%",
                }}
              >
                <Card.Body>
                  <div>working Experience</div>
                </Card.Body>
              </Card>
            </div>
            <div style={{ marginBottom: "2rem" }} className="col-md-3 col-6">
              <Card
                style={{
                  backgroundColor: "#1793bb",
                  height: "100%",
                }}
              >
                <Card.Body>
                  <div>Skill</div>
                </Card.Body>
              </Card>
            </div>
            <div style={{ marginBottom: "2rem" }} className="col-md-3  col-6">
              <Card
                style={{
                  backgroundColor: "#1793bb",
                  height: "100%",
                }}
              >
                <Card.Body>
                  <div>Education</div>
                </Card.Body>
              </Card>
            </div>
            <div style={{ marginBottom: "2rem" }} className="col-md-3  col-6">
              <Card
                style={{
                  backgroundColor: "#1793bb",
                  height: "100%",
                }}
              >
                <Card.Body>
                  <div>Activity</div>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default App;
