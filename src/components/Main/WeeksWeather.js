import React, { Component } from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { WeatherADay } from "../WeatherADay/";

class WeeksWeather extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <ListGroup>
              <ListGroupItem>
                <WeatherADay />
              </ListGroupItem>
              <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
              <ListGroupItem>Morbi leo risus</ListGroupItem>
              <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
              <ListGroupItem>Vestibulum at eros</ListGroupItem>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    );
  }
}

export { WeeksWeather };
