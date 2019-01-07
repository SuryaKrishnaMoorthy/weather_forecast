import React, { Component } from "react";
import {
  Card,
  Button,
  CardHeader,
  CardFooter,
  CardBody,
  CardTitle,
  CardText
} from "reactstrap";

class WeatherADay extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Card className="flex-row">
          <CardHeader>Sunday</CardHeader>
          <CardBody>
            <img
              src={require("../../assets/sunny-weather.png")}
              alt="Sunny Weather image"
              width="200px"
              height="100px"
            />
          </CardBody>
          <CardFooter>78</CardFooter>
        </Card>
      </div>
    );
  }
}

export { WeatherADay };
