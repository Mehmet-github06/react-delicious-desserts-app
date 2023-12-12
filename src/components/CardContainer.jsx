import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import DessertCard from "./DessertCard";
import {data} from "../helper/data.js"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const CardContainer = () => {
    console.log(data)
  return (
    <>
        <Form.Control
      type="email"
      placeholder="Search a desserts..."
      className="w-50 m-auto"
    />
    <Container>
        <Row>
      {data.map((desserts,i)=>(
           <Card style={{ width: '18rem' }}>
           <Card.Img variant="top" src="holder.js/100px180" />
           <Card.Body>
             <Card.Title>Card Title</Card.Title>
             <Card.Text>
               Some quick example text to build on the card title and make up the
               bulk of the card's content.
             </Card.Text>
             <Button variant="primary">Go somewhere</Button>
           </Card.Body>
         </Card>
      ))}
        </Row>
      {/* <DessertCard/> */}
    </Container>

    </>

  );
};

export default CardContainer;
