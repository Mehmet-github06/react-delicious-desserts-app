import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Logo  from "../assets/food.png";

const Header = () => {
  return (
    <Container fluid>
      <Image src={Logo} width={"250px"}></Image>
      <h1 className="my-3 font-monospace display-4 fw-bold " >Delicious Desserts</h1>
    </Container>
  );
};

export default Header;