import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import Plot from 'react-plotly.js';

class Welltops extends Component {
  
  state = {
    welltops: [],
    welltopsinc: [],
    allwelltops: [],
    allsources: [],
    allsurfaces:[],
    surfacearr:[],
    countarr:[],
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
    this.getallsurfaces();
    this.populatesurfacearr();
  }

  getallsurfaces = () => {
    API.finddistinctsurfaces()
    .then(res =>
      this.setState({ allsurfaces: res.data})
    )
    .catch(err => console.log(err));
    console.log("this.state.allsurfaces:    " + this.state.allsurfaces.length);
  };

  returnsurfacearr = (data) => {
    var arr = [];
    data.forEach(function (d) {
      arr.push(d._id);
    })
    console.log(arr);
   return arr
   };  


   returncountarr = (data) => {
    var arr = [];
    data.forEach(function (d) {
      arr.push(d.count);
    })
    console.log(arr);
   return arr
   }; 

    populatesurfacearr = () => {
    
   API.finddistinctsurfaces()
   .then(res => 
    this.setState({surfacearr: this.returnsurfacearr(res.data),countarr: this.returncountarr(res.data)}) 
      )
  };  

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

 /*  showpie = () => {
    var data = [{
      values: [19, 26, 55],
      labels: ["Residential", "Non-Residential", "Utility"],
      type: "pie"
    }];
    
    var layout = {
      height: 400,
      width: 500
    };
    
    Plotly.newPlot("myDiv", data, layout);
    console.log("Plotly!")
  }; */

 

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
          {this.state.allwelltops.length == this.state.allsources.length ? 
            (<Jumbotron>
              <h1 className="text-success">Welltops Numbers Matched</h1>
              <p className="display-1 text-success">{this.state.allwelltops.length} out of {this.state.allsources.length}</p>
            </Jumbotron>):  
            (<Jumbotron className="bg-danger">
              <h1 className="text-danger">Welltops Are Missing!</h1>          
              <p className="display-1 text-danger">{this.state.allwelltops.length} out of {this.state.allsources.length}</p>

          </Jumbotron>)}
            
            <div className="border border-secondary rounded p-3">
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
            </div>
          </Col>
          <Col size="md-6 sm-12">
          <div id='myDiv' className="position-absolute">
          <Plot className="border border-secondary rounded"
        data={[
          {
            values: this.state.countarr,
            labels: this.state.surfacearr,
            type: 'pie'
          },
        ]}
        layout={ {width: 790, height: 400, title: 'Welltop Surfaces'} }
      />
         
          </div>
          <Jumbotron className="position-relative">
 
 </Jumbotron>
              
           
            <div className="border border-secondary rounded p-3">
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
            </div>
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
