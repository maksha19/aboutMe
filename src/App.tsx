import React from "react";
import "./App.css";
import { Card, Container } from "react-bootstrap";

function App() {
  return (
    <div>
      <Container className="center-screen">
        <div style={{ width: "90vw", marginTop: "5vh" }}>
          <Card
            style={{
              backgroundColor: "#1793bb",
              height: "100%",
            }}
          >
            <Card.Body>
              <div style={{ height: "20%" }}>
                <div className="text-end">Email: test@example.com</div>
                <div className="text-end">phone: +65-1111 1111</div>
              </div>
              <div style={{ height: "70%" }} className="row">
                <div className="col-sm-10 col-md-3 col-ls-5  text-center">
                  <div className="profile-circle "></div>
                  <div style={{ height: "10%" }} className="">
                    Manikandan Shanmugam
                  </div>
                </div>
                <div className=" align-self-center col-sm-9 col-md-9 col-ls-9">
                  <div className="profile-text  text-wrap">
                    about me
                    njknjsndcjdncjdfnjfknnnnnnnnnncscnsjdncjsdncshjnchsdcnhsdx
                    sc sdkc ds cd cd csdnjcknskjdc xsjkc sjkc
                    sdjkcnxajsnxjasnxhsnhjcsnhcn
                    xmsxmksjnxcjsncehdhwynjasxmaixanxhanxhjbbdwdqwndhjwbhxbhc
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>
      </Container>
      <div className="d-flex bd-highlight">
        <div className="p-2 flex-grow-1 bd-highlight">Flex item</div>
        <div className="p-2 bd-highlight">Flex item</div>
        <div className="p-2 bd-highlight">Third flex item</div>
      </div>
    </div>
  );
}

export default App;
