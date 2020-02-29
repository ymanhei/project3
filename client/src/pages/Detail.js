import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";

class Detail extends Component {
  state = {
    welltop: {}
  };
  // When this component mounts, grab the welltop with the _id of this.props.match.params.id
  // e.g. localhost:3000/welltops/599dcb67f0f16317844583fc
  componentDidMount() {
    API.getWelltop(this.props.match.params.id)
      .then(res => this.setState({ welltop: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>
                <ul>
                  <li> Well Name: {this.state.welltop.wellname}</li>
                  <li> Surface: {this.state.welltop.surface}</li>
                  <li> Depth: {this.state.welltop.depth}m</li>
                  </ul>
              </h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <h1>Remarks</h1>
              <p>
                {this.state.welltop.remarks}
              </p>
            </article>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/">← Back to Surfaces</Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Detail;
