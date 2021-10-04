import React from "react";
import { Card, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./NavBar.css";

export const NavBar = () => {
  return (
    <div>
      <Card>
        <Row className="navbar">
          <Col md={2}>
            <b>Task</b>
          </Col>
          <Col md={8}></Col>

          <Col md={2}>
            <Link to="/RecordSheet">
              <Button className="addbtn">Home</Button>
            </Link>
          </Col>
        </Row>
      </Card>
    </div>
  );
};
