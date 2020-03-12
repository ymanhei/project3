import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
const login = require ('../components/utils');

class Auth extends Component {
  state = {
    username: "",
    password: "",
    apiusername: "",
    apipassword: ""
  };

  componentDidMount() {
    //login.logout();
    API.getuserpw()
    .then(res => this.setState({ apiusername: res.data.username, apipassword: res.data.password }))
    .catch(err => console.log(err));
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    console.log("Login TEST!");
    
 
    if(this.state.username === this.state.apiusername && this.state.password === this.state.apipassword) {
      //login.login();
      console.log("Login Sucessful!");
      window.location.href = "/welltops"; 
    }
    else {
      alert("Incorrect Username/Password " );
    }
    
  }

render()  {
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron>
          <form>
            <div>
              <label>Username: (admin)</label>
              <input type="text" name="username" onChange={this.handleInputChange}/>
            </div>
            <div>
              <label>Password: (admin)</label>
              <input type="password" name="password" onChange={this.handleInputChange}/>
          </div>
          <div>
              <input type="submit" value="Log In"  onClick={this.handleFormSubmit} />
          </div>
          </form>

          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
}
}

export default Auth;