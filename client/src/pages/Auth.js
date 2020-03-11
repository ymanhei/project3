import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";

class Auth extends Component {
  state = {
    username: "",
    password: "",
    apiusername: "",
    apipassword: ""
  };

  componentDidMount() {
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
   console.log(this.state.username );
   console.log(this.state.apiusername );
   console.log(this.state.password );
   console.log(this.state.apipassword );
    if(this.state.username == this.state.apiusername && this.state.password == this.state.apipassword) {

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
          <form >
    <div>
        <label>Username: (admin)</label>
        <input type="text" name="username" onChange={this.handleInputChange}/>
    </div>
    <div>
        <label>Password: (admin)</label>
        <input type="password" name="password" onChange={this.handleInputChange}/>
    </div>
    <div>
        <input type="submit" value="Log In" onClick={this.handleFormSubmit}/>
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