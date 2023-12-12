import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import DessertCard from "./DessertCard";
import { data } from "../helper/data.js";
import { useState } from "react";

const CardContainer = () => {
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const filteredData = data.filter((item) => item.name.toLowerCase().trim().includes(search.toLowerCase().trim()));

  return (
    <>
      <Form.Control
        type="search"
        placeholder="Search a desserts..."
        className="w-50 m-auto"
        onChange={handleChange}
      />
      <Container className="rounded-4 my-4 p-3 card-container">
        <Row className="justify-content-center g-4 text-center">
          {filteredData.map((desserts, i) => (
            <Col xl={3} lg={4} md={6} sm={12} key={i}>
              {/* <DessertCard {...desserts}/> */}
              <DessertCard desserts={desserts} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default CardContainer;
