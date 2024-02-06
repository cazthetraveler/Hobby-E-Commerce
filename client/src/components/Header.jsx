import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const Header = () => {
  //TODO
  return (
    <Container>
      <Row>
        <Col className="text-center">
          <h1>Store Name</h1>
        </Col>
        <Col className="ml-auto">
          <Button>
            <i>user icon</i>
          </Button>
          <Button>
            <i>cart icon</i>
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
