import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Card, Container, Button } from "react-bootstrap";

function App() {
  return (
    <div>
      <Container className="center-screen">
        <Card style={{ width: "18rem", backgroundColor: "#17a2b8" }}>
          <Card.Body>
            <Card.Title className="text-center">about Me</Card.Title>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default App;
