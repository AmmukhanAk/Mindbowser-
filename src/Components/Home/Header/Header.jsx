import React from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";

export const Header = () => {
  return (
    <div>
      <Row className="headerC">
        <Col md={3}>
          <Link to="/Add">
            <Button className="addbtn">+ Add Record</Button>
          </Link>
        </Col>
        <Col md={6}></Col>
        <Col md={3}>
          <Form.Control type="text" />
        </Col>
      </Row>
    </div>
  );
};
