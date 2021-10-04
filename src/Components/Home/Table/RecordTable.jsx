import React, { useState, useEffect } from "react";
import { Row, Col, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import "./RecordTable.css";
import { Oldinput } from "../../Add/Oldinput";

export const RecordTable = () => {
  const [apiData, setApiData] = useState([]);
  const [tblData, setTblData] = useState([]);
  const [isnew, setIsnew] = useState(false);
  const [srcText, setSrcText] = useState("");
  const handleIsNew = () => {
    setIsnew(!isnew);
  }
  const handleSearchText = (e) => {
    setSrcText(e.target.value);
  }
  const setData = (data) => {
    let { id, firstName, bday, college, gender, city, hobbies } = data;
    localStorage.setItem("ID", id);
    localStorage.setItem("First Name", firstName);
    localStorage.setItem("bday", bday);
    localStorage.setItem("college", college);
    localStorage.setItem("states", gender);
    localStorage.setItem("city", city);
    localStorage.setItem("hobbies", hobbies);
  };

  // const getData = () => {
  //   axios
  //     .get(`http://universities.hipolabs.com/search`)
  //     .then((res) => {
  //       setApiData([...res.data.slice(0, 10).map(d => ({ ...d, "value": d.name, "label": d.name }))]);
  //     });
  // };

  const handleSubmit = (id, name, bday, college, gender, city, pincode) => {
    const studentData = {
      id, name, bday, college, gender, city, pincode
    }
    console.log("studentData===>", studentData);
    setTblData([studentData, ...tblData])
  }


  // const onDelete = (id) => {
  //   axios
  //     .delete(`http://universities.hipolabs.com/search/fakeData/${id}`)
  //     .then(() => {
  //       getData();
  //     });
  // };

  // useEffect(() => {
  //   getData();
  // }, [])

  return (
    <div>
      <Row className="headerC">
        <Col md={3}>
          <Button className="addbtn" onClick={handleIsNew}>+ Add Record</Button>
        </Col>
        <Col md={6}></Col>
        <Col md={3}>
          <Form.Control type="text" />
        </Col>
      </Row>
      {isnew && <Oldinput collagedata={apiData} handleSubmit={handleSubmit} />}
      <Row className="recordheader">
        <Col>#</Col>
        <Col>First Name</Col>
        <Col>Birthdate</Col>
        <Col md={2}>College</Col>
        <Col md={2}>Gender</Col>
        <Col>City</Col>
        <Col>Hobbies</Col>
        <Col md={3}>Action</Col>
      </Row>
      <div>

        {tblData &&
          tblData.map((data) =>
          (
            <Row className="recordlist">
              <Col>{data.id}</Col>
              <Col>{data.name}</Col>
              <Col>{data.bday}</Col>
              <Col md={2}>{data.college.name}</Col>
              <Col md={2}>{data.gender}</Col>
              <Col>{data.city}</Col>
              <Col>{data.pincode}</Col>
              <Col md={3}>
                <Row>
                  <Col>
                    <Link to="/Edit">
                      <Button onClick={() => setData(data)}>Edit</Button>
                    </Link>
                  </Col>
                  <Col>
                    <Button>Delete</Button>
                  </Col>
                </Row>
              </Col>
              <hr />
            </Row>
          ))}
      </div>
    </div>
  );
};
