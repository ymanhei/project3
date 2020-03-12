import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import SourceCard from "../components/SourceCard";
import WelltopCard from "../components/WelltopCard";
import API from "../utils/API";

class Detail extends Component {
  state = {
    welltop: {},
    welltopalt: {}
  };
  // When this component mounts, grab the welltop with the _id of this.props.match.params.id
  // e.g. localhost:3000/welltops/599dcb67f0f16317844583fc
  componentDidMount() {
    let str = document.location.href;
    let n = str.includes("welltopsinc");
    //console.log(n);
    if(n){
      API.getWelltopincwid(this.props.match.params.wid)
      .then(res => this.setState({ welltop: res.data }))
      .catch(err => console.log(err));
      //console.log(this.state.welltop.depth);
      API.getWelltopwid(this.props.match.params.wid)
      .then(res => this.setState({ welltopalt: res.data }))
      .catch(err => console.log(err))
    }
    
    else{
      API.getWelltopswid(this.props.match.params.wid)
      .then(res => this.setState({ welltop: res.data }))
      .catch(err => console.log(err))
    };

  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <SourceCard header={this.state.welltop.BOREHOLE_NAME}>
              <section>Source:
                <ul>
                  <li> Surface: {this.state.welltop.STRAT_UNIT_ID}</li>
                  <li> Depth: {this.state.welltop.PICK_DEPTH}m </li>
                  <li> Interpreter: {this.state.welltop.INTERP_ID}</li>
                  <li> Geological Age: {this.state.welltop.MA_AGE}</li>
                  <li> Last Updated Date: {this.state.welltop.ROW_CHANGED_DATE}</li>
                  <li> Updated By: {this.state.welltop.MODIFIED_BY}</li>
                  <li> Welltop ID: {this.state.welltop.WELLTOPID}</li>
                  <li> UBHI: {this.state.welltop.UBHI} </li>
                  </ul>
              </section>
            </SourceCard>
          </Col>
          <Col size="md-6">
            <WelltopCard header={this.state.welltopalt.BOREHOLE_NAME}>
              <section>Welltoplist:
                <ul>
                  <li> Surface: {this.state.welltopalt.STRAT_UNIT_ID}</li>
                  <li> Depth: {this.state.welltopalt.PICK_DEPTH}m </li>
                  <li> Interpreter: {this.state.welltopalt.INTERP_ID}</li>
                  <li> Geological Age: {this.state.welltopalt.MA_AGE}</li>
                  <li> Last Updated Date: {this.state.welltopalt.ROW_CHANGED_DATE} </li>
                  <li> Updated By: {this.state.welltopalt.MODIFIED_BY}</li>
                  <li> Welltop ID: {this.state.welltopalt.WELLTOPID}</li>
                  <li> UBHI: {this.state.welltopalt.UBHI} </li>
                  </ul>
              </section>
            </WelltopCard>
          </Col>
        </Row>

        <Row>
          <Col size="md-2">
            <Link to="/welltops">← Back to Surfaces</Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Detail;
