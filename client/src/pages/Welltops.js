import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import Plot from 'react-plotly.js';
const login = require ('../components/utils');

class Welltops extends Component {
  
  state = {
    welltops: [],
    welltopsinc: [],
    allwelltops: [],
    allsources: [],
    allsurfaces:[],
    surfacearr:[],
    countarr:[],
    userarr:[],
    usercountarr:[],
    latarr:[],
    lonarr:[],
    bhnamearr:[],
    wtcountarr:[],
    WELLTOPID: 0,
    BOREHOLE_NAME: "",
    STRAT_UNIT_ID: "",
    PICK_DEPTH: 0,
    MA_AGE: ""
    
  };

  componentDidMount() {
    login.login();
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
    //console.log("this.state.allsurfaces:    " + this.state.allsurfaces.length);
  };

  returnidarr = (data) => {
    var arr = [];
    data.forEach(function (d) {
      arr.push(d._id);
    })
    //console.log(arr);
   return arr
   };  

   returnlatarr = (data) => {
    var arr = [];
    data.forEach(function (d) {
      arr.push(d._id.LATITUDE);
    })
    //console.log(arr);
   return arr
   };

   returnlonarr = (data) => {
    var arr = [];
    data.forEach(function (d) {
      arr.push(d._id.LONGTITUDE);
    })
    //console.log(arr);
   return arr
   };

   returnbhnamearr = (data) => {
    var arr = [];
    data.forEach(function (d) {
      arr.push(d._id.BOREHOLE_NAME);
    })
    //console.log(arr);
   return arr
   };

   returncountarr = (data) => {
    var arr = [];
    data.forEach(function (d) {
      arr.push(d.count);
    })
   // console.log(arr);
   return arr
   }; 

    populatesurfacearr = () => {
   API.finddistinctsurfaces()
   .then(res => 
    this.setState({surfacearr: this.returnidarr(res.data),countarr: this.returncountarr(res.data)}) 
      )
      API.finddistinctusers()
   .then(res => 
    this.setState({userarr: this.returnidarr(res.data),usercountarr: this.returncountarr(res.data)}) 
      )
      API.finddistinctboreholes()
   .then(res => 
    this.setState({latarr: this.returnlatarr(res.data),lonarr: this.returnlonarr(res.data),bhnamearr: this.returnbhnamearr(res.data),wtcountarr: this.returncountarr(res.data)}) 
      )
  };  

  loadWelltops = () => {
    API.getWelltops()
      .then(res =>
        this.setState({ welltops: res.data })
      )
      .catch(err => console.log(err));

      API.getWelltopsinc()
      .then(res =>
        this.setState({ welltopsinc: res.data})
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
   
    API.saveWelltop(this.state.welltops)
    .then(res => this.loadWelltops())
    .catch(err => console.log(err));
    
    this.state.welltopsinc.forEach(welltop =>
     /*  this.setState({
        WELLTOPID: welltop.WELLTOPID,
        BOREHOLE_NAME: welltop.BOREHOLE_NAME,
        STRAT_UNIT_ID: welltop.STRAT_UNIT_ID,
        PICK_DEPTH: welltop.PICK_DEPTH,
        MA_AGE: welltop.MA_AGE}) */
        //console.log("welltop: " + welltop.WELLTOPID)
        API.updateWelltopinc(welltop.WELLTOPID)
        .then(res => 
          this.loadWelltops())
          .catch(err => console.log(err))
    )
    alert("Copied " + this.state.welltops.length + "  & updated " + this.state.welltopsinc.length + " welltops.")
  }

        
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
          <Jumbotron>
          {this.state.allwelltops.length == this.state.allsources.length ? 
            (<section>
              <h3>Welltops Numbers Matched:</h3>
              <p className="text-success">{this.state.allwelltops.length} out of {this.state.allsources.length}</p>
              <span className="display-3 text-success">{Math.round(this.state.allwelltops.length/this.state.allsources.length*100,2)}% </span>
              </section>             
               ):
              (
              <section>
                <h3>Welltops Are Missing!</h3>   
              <p className="text-danger">{this.state.allsources.length-this.state.allwelltops.length} out of {this.state.allsources.length}</p>
              <span className="display-3 text-danger">{(this.state.allwelltops.length/this.state.allsources.length*100).toFixed(3)}% </span>
              </section>
              )}

            {this.state.welltopsinc.length == 0 ? (
              <section>
              <h3>Welltops Depth Matched:</h3>
                 <p className="text-success">{this.state.allwelltops.length-this.state.welltopsinc.length} out of {this.state.allwelltops.length}</p>
                 <span className="display-3 text-success">{Math.round((this.state.allwelltops.length-this.state.welltopsinc.length)/this.state.allwelltops.length*100,2)}% </span>
                 </section>
            ):
            (<section>
              <h3>Welltops Depth Not Matched:</h3>
              <p className="text-danger">{this.state.welltopsinc.length} out of {this.state.allwelltops.length}</p>
              <span className="display-3 text-danger">{((this.state.allwelltops.length-this.state.welltopsinc.length)/this.state.allwelltops.length*100).toFixed(3)}% </span>   
              </section>    )}
            
   
          </Jumbotron>
          <div id='myDiv1' className="position-absolute">
          <Plot className="border border-secondary rounded"
        data={[
          {
            y: this.state.countarr,
            x: this.state.surfacearr,
            type: 'bar'
          },
        ]}
        layout={ {width: 940, height: 400, title: 'Surfaces Ditribution'} }
      />
         
          </div>
          <Jumbotron className="position-relative">
 
          </Jumbotron>
            <div className="border border-secondary rounded p-3">
            <h3>Missing Welltops</h3>
            {this.state.welltops.length ? (
              <List>
                {this.state.welltops.map(welltop => (
                  <ListItem key={welltop.WELLTOPID}>
                    <Link to={"/welltops/wid/" + welltop.WELLTOPID}>
                      <strong>
                       Well Name: {welltop.BOREHOLE_NAME}   |  Surface: {welltop.STRAT_UNIT_ID}   |  Depth: {welltop.PICK_DEPTH}m
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
            values: this.state.usercountarr,
            labels: this.state.userarr,
            type: 'pie'
          },
        ]}
        layout={ {width: 940, height: 400, title: 'Users Contribution'} }
      />
         
          </div>
          <Jumbotron className="position-relative">
 
          </Jumbotron>
          <div id='myDiv' className="position-absolute">
          <Plot className="border border-secondary rounded"
        data={[{type: 'densitymapbox', lon: this.state.lonarr, lat: this.state.latarr, z: this.state.wtcountarr, text:this.state.bhnamearr}]}
        layout={ {width: 940, height: 400 , mapbox: {style: 'stamen-terrain' ,center: {lat: -20, lon:120} ,zoom: 3} , width: 940, height: 400 ,margin: {t: 0, b: 0, r:0, l:0}} }
      />
         
          </div>
          <Jumbotron className="position-relative">
 
          </Jumbotron>
              
           
            <div className="border border-secondary rounded p-3">
            <h3>Incorrect Depth</h3>
            {this.state.welltopsinc.length ? (
              <List>
                {this.state.welltopsinc.map(welltopinc => (
                  <ListItem key={welltopinc.WELLTOPID}>
                    <Link to={"/welltopsinc/wid/" + welltopinc.WELLTOPID}>
                      <strong>
                       Well Name: {welltopinc.BOREHOLE_NAME}  |  Surface: {welltopinc.STRAT_UNIT_ID}  |  Depth: {welltopinc.PICK_DEPTH}m
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

          <div className="container-fluid">
          <form>
              <FormBtn
                
                onClick={this.handleFormSubmit}
              >
                One Click Fix!
              </FormBtn>
            </form>
</div>
       

        </Row>

      </Container>
      
    );
  }
}

export default Welltops;
