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
    allwelltops: [],
    allsources: [],
    welltopid: 0,
    wellname: "",
    surface: "",
    depth: 0,
    remarks: ""
    
  };

  componentDidMount() {
    this.forceUpdate();
    this.loadWelltops();
    this.getall();
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

  getall = () => {
    API.getallwelltops()
      .then(res =>
        this.setState({ allwelltops: res.data})
      )
      .catch(err => console.log(err));

      API.getallsources()
      .then(res =>
        this.setState({ allsources: res.data})
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

    this.state.allsources.forEach(function(welltop) {
    
    API.updateWelltop(welltop.welltopid,{depth: parseInt(welltop.depth)})
    .then(res => this.loadWelltops())
    .catch(err => console.log(err));
  })

  API.saveWelltop(this.state.welltops)
    .then(res => this.loadWelltops())
    .catch(err => console.log(err));

    alert("Fixed!");
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>What Welltops Should I Read?</h1>
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
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Welltops need attention!</h1>
              <p>Total number of welltops: {this.state.allwelltops.length}</p>
              <p>Total number of sources: {this.state.allsources.length}</p>
            </Jumbotron>
           

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
          <form>
              <FormBtn
                
                onClick={this.handleFormSubmit}
              >
                One Click Fix!
              </FormBtn>
            </form>
        </Row>
      </Container>
    );
  }
}

export default Welltops;
