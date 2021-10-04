import React, { useState, useEffect } from "react";
import { Form, Row, Col, Button, Card } from "react-bootstrap";
import "./EditRecord.css";
import axios from "axios";
import { useHistory } from "react-router";

export const EditRecord = () => {
  let history = useHistory();
  const [id, setID] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [bday, setBday] = useState("");
  const [adress, setAdress] = useState("");
  const [gender, setGender] = useState("");
  const [city, setCity] = useState("");
  const [College, setCollege] = useState("");
  

  useEffect(() => {
    setID(localStorage.getItem("ID"));
    setFirstName(localStorage.getItem("First Name"));
    setBday(localStorage.getItem("bday"));
    setAdress(localStorage.getItem("adress"));
    setGender(localStorage.getItem("gender"));
    setCity(localStorage.getItem("city"));
    setCollege(localStorage.getItem("college"));
  }, []);

  const updateAPIData = () => {
    axios
      .put(`https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData/${id}`, {
        firstName,
        bday,
       adress,
        gender,
        city,
        College,
      })
      .then(() => {
        history.push("/RecordSheet");
      });
  };

  return (
    <div>
      <Card className="inputcard">
        <Row className="inputrow">
          <Col></Col>
          <Col md={2}>
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </Col>
          <Col md={2}>
            <Form.Label>Birth date</Form.Label>
            <Form.Control
              type="date"
              value={bday}
              onChange={(e) => setBday(e.target.value)}
            />
          </Col>
          <Col md={2}>
            <Form.Label>adress</Form.Label>
            <Form.Control
              type="text"
              value={adress}
              onChange={(e) => setAdress(e.target.value)}
              
            />
          </Col>
          <Col></Col>
        </Row>
        <Row>
          <Col></Col>
          <Col md={2}>
          
          </Col>
          <Col md={2}>
            <Form.Label>City</Form.Label>
            <Form.Control
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </Col>
          <Col md={2}>
            <Form.Label>college</Form.Label>
            <Form.Control
              type="text"
              value={College}
              onChange={(e) => setCollege(e.target.value)}
            />
          </Col>
          <Col></Col>
        </Row>
        <br />
        <Row>
          <Col md={4}></Col>
          <Col md={4}>
            <Button type="submit" onClick={updateAPIData}>
              Update
            </Button>
          </Col>
          <Col md={4}></Col>
        </Row>
      </Card>
    </div>
  );
};
