import React from "react";
import logo from "./random.jpg";
import "./App.css";
import { Card, Container, Button } from "react-bootstrap";
//const logo = require("../public/logo512.png");

function App() {
  return (
    <div>
      <Container className="center-screen">
        <Card style={{ width: "18rem", backgroundColor: "#17a2b8" }}>
          <Card.Body>
            <Card.Title className="text-center">about Me</Card.Title>
          </Card.Body>
        </Card>
        <div style={{ height: "100px", width: "100px" }}>
          <img src={logo} alt="logo" />
        </div>
      </Container>
    </div>
  );
}

export default App;
