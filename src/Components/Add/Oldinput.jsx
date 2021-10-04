import React, { useState, useEffect } from "react";
import { Form, Row, Col, Button, Card, Dropdown } from "react-bootstrap";
import { useHistory } from "react-router";
import Select from 'react-select';
import "./InputForm.css";
import axios from "axios";

export const Oldinput = ({ collagedata, handleSubmit, handleIsNew }) => {
  let history = useHistory();
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [bday, setBday] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("");
  const [city, setCity] = useState("Pune");
  const [hobbies, setHobbies] = useState("");
  const [data, setData] = useState([]);
  const [collData, setCollData] = useState();
  const [selectedOption, setSelectedOption] = useState({});

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
    console.log(`Option selected:`, selectedOption);
  };

  const getDataSearch = (e) => {
    axios
      .get(`http://universities.hipolabs.com/search?name=${e.target.value}`)
      .then((res) => {
        setCollData([...res.data.map(d => ({ ...d, "value": d.name, "label": d.name }))]);
      });
  };

  useEffect(() => {
    setCollData([...collagedata]);
  }, [])


  return (
    <div>
      <Card className="inputcard">
        <Row className="inputrow">
          <Col></Col>
          <Col md={2}>
            <Form.Label><b> Name</b></Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => setName(e.target.value)}
              required={true}
            />
          </Col>
          <Col md={2}>
            <Form.Label><b>Birth date</b></Form.Label>
            <Form.Control
              type="date"
              onChange={(e) => setBday(e.target.value)}
              required={true}
            />
          </Col>
          <Col md={2}>
            <Form.Label><b>Address</b></Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => setAddress(e.target.value)}
              required={true}
            />
          </Col>
          <Col></Col>
        </Row>
        <Row>
          <Col></Col>
          <Col md={2}>
            <Select
              value={selectedOption}
              onChange={handleChange}
              options={collData}
            />
            <Col>
              <Form.Control type="text" id="searchText" onBlur={getDataSearch}></Form.Control>
            </Col>
          </Col>
          <Col md={2}>
            <Form.Label><b>Gender</b></Form.Label>
            <Form.Check
              type="radio"
              value="male"
              label="male"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            />
            <Form.Check
              type="radio"
              value="female"
              label="female"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            />
          </Col>
          <Col md={2}>
            <Form.Label><b>Hobbies</b></Form.Label>
            <Form.Check
              type="checkbox"
              label="Reading"
              onChange={(e) => setHobbies(e.target.value)}
              required={true}
            />
            <Form.Check
              type="checkbox"
              label="Gaming"

              onChange={(e) => setHobbies(e.target.value)}
              required={true}
            />
            <Form.Check
              type="checkbox"
              label="Travelling"

              onChange={(e) => setHobbies(e.target.value)}
              required={true}
            />
            <Form.Check
              type="checkbox"
              label="Drawing"

              onChange={(e) => setHobbies(e.target.value)}
              required={true}
            />
          </Col>
          <Col></Col>
        </Row>
        <br />
        <Row>
          <Col md={4}></Col>
          <Col md={4}>
            <Button variant="dark" type="submit" handleIsNew={handleIsNew} onClick={() => handleSubmit(id, name, bday, selectedOption, gender, city, "8766")}>
              Submit
            </Button>
          </Col>
          <Col md={4}></Col>
        </Row>
      </Card>
      {/* ))} */}
    </div>
  );
};
