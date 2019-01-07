import React from "react";
import { Container, Row, Col } from "reactstrap";
import { WeeksWeather } from "./WeeksWeather";

class Main extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col xs="6">.col-6</Col>
          <Col xs="6">
            <WeeksWeather />
          </Col>
        </Row>
      </Container>
    );
  }
}

export { Main };
