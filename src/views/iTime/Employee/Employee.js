import React, { Component } from "react";
import { Button, Card, CardBody, CardHeader, Col, Row } from "reactstrap";

class Buttons extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" md="6">
            <Card>
              <CardHeader>
                <strong>Block Level Buttons</strong>
              </CardHeader>
              <CardBody>
                <p>
                  Add prop <code>block</code>
                </p>
                <Button color="secondary" size="lg" block>
                  Block level button
                </Button>
                <Button color="primary" size="lg" block>
                  Block level button
                </Button>
                <Button color="success" size="lg" block>
                  Block level button
                </Button>
                <Button color="info" size="lg" block>
                  Block level button
                </Button>
                <Button color="warning" size="lg" block>
                  Block level button
                </Button>
                <Button color="danger" size="lg" block>
                  Block level button
                </Button>
                <Button color="link" size="lg" block>
                  Block level button
                </Button>
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" md="6">
            <Card>
              <CardHeader>
                <strong>Block Level Buttons</strong>
              </CardHeader>
              <CardBody>
                <p>
                  Add prop <code>block</code>
                </p>
                <Button outline color="secondary" size="lg" block>
                  Block level button
                </Button>
                <Button outline color="primary" size="lg" block>
                  Block level button
                </Button>
                <Button outline color="success" size="lg" block>
                  Block level button
                </Button>
                <Button outline color="info" size="lg" block>
                  Block level button
                </Button>
                <Button outline color="warning" size="lg" block>
                  Block level button
                </Button>
                <Button outline color="danger" size="lg" block>
                  Block level button
                </Button>
                <Button color="ghost-info" size="lg" block>
                  Block level button
                </Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Buttons;
