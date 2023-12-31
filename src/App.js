import CardContainer from "./components/CardContainer";
import Header from "./components/Header";
import Container from "react-bootstrap/Container";

function App() {
  return (
    <Container className="text-center mt-4">
      <Header />
      <CardContainer/>
    </Container>
  );
}

export default App;
