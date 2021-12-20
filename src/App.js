import logo from "./logo.svg";
import "./App.css";
import {
  Button,
  Col,
  Container,
  FormControl,
  InputGroup,
  Nav,
  Navbar,
  Row,
} from "react-bootstrap";
import List from "./component/List";

function App() {
  return (
    <Container>
      <Row>
        <Col>
          <Navbar bg="light">
            <Container className="nav">
              <Nav.Link className="link1">Home</Nav.Link>
              <Nav.Link className="link1">Home</Nav.Link>
              <InputGroup className="link1">
                <FormControl
                  placeholder="Recipient's username"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
                <Button variant="outline-secondary" id="button-addon2">
                  Button
                </Button>
              </InputGroup>
            </Container>
          </Navbar>
        </Col>
      </Row>
      <Container>
        <List/>
      </Container>
    </Container>
  );
}

export default App;
