import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

class Welltops extends Component {
  state = {
    welltops: [],
    welltopsinc: [],
    welltopid: 0,
    wellname: "",
    surface: "",
    depth: 0,
    remarks: ""
  };

  componentDidMount() {
    this.loadWelltops();
  }

  loadWelltops = () => {
    API.getWelltops()
      .then(res =>
        this.setState({ welltops: res.data, welltopid: 0, wellname: "", surface: "", depth: 0, remarks: "" })
      )
      .catch(err => console.log(err));

      API.getWelltopsinc()
      .then(res =>
        this.setState({ welltopsinc: res.data, welltopid: 0, wellname: "", surface: "", depth: 0, remarks: "" })
      )
      .catch(err => console.log(err));

  };

  deleteWelltop = id => {
    API.deleteWelltop(id)
      .then(res => this.loadWelltops())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.wellname && this.state.surface) {
      API.saveWelltop({
        wellname: this.state.wellname,
        surface: this.state.surface,
        depth: this.state.depth,
        remarks: this.state.remarks
      })
        .then(res => this.loadWelltops())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>What Welltops Should I Read?</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.wellname}
                onChange={this.handleInputChange}
                name="wellname"
                placeholder="Well Name (required)"
              />
              <Input
                value={this.state.surface}
                onChange={this.handleInputChange}
                name="surface"
                placeholder="Surface (required)"
              />
              <Input
                value={this.state.depth}
                onChange={this.handleInputChange}
                name="depth"
                placeholder="Depth (required)"
              />
              <TextArea
                value={this.state.remarks}
                onChange={this.handleInputChange}
                name="remarks"
                placeholder="Remarks (Optional)"
              />
              <FormBtn
                disabled={!(this.state.surface && this.state.wellname)}
                onClick={this.handleFormSubmit}
              >
                Submit Welltop
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Welltops need attention!</h1>
            </Jumbotron>
            <h3>Missing Welltops</h3>
            {this.state.welltops.length ? (
              <List>
                {this.state.welltops.map(welltop => (
                  <ListItem key={welltop._id}>
                    <Link to={"/welltops/" + welltop._id}>
                      <strong>
                       Well Name: {welltop.wellname} Surface: {welltop.surface} Depth: {welltop.depth}m
                      </strong>
                    </Link>
                    
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}

            <h3>Incorrect Depth</h3>
            {this.state.welltopsinc.length ? (
              <List>
                {this.state.welltopsinc.map(welltopinc => (
                  <ListItem key={welltopinc.welltopid}>
                    <Link to={"/welltopsinc/wid/" + welltopinc.welltopid}>
                      <strong>
                       Well Name: {welltopinc.wellname} Surface: {welltopinc.surface} Depth: {welltopinc.depth}m
                      </strong>
                    </Link>
                    
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Welltops;
