import React, { Component } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBIcon,
} from "mdbreact";
import '../../assets/login/login.css'
import ReactFormValidation from "react-form-input-validation";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Zoom from "react-reveal/Zoom";
ReactFormValidation.register(
  "custompassword",
  function (value, requirement, attribute) {
    return value.match(
      /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/
    );
  },
  "The password must contain atleast 1 speacial character and digit and alphabet."
);
class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userdetail: [],
      fields: {
        name: "",
        password: "",
      },
      errors: {},
    };
    this.form = new ReactFormValidation(this);
    this.form.useRules({
      name: "required|alpha",
      password: "required|custompassword",
    });
    this.form.onformsubmit = (fields) => {
      let flag = false;
const data=JSON.parse(localStorage.getItem('userinfo'))
      if (fields.name === data.name && fields.password === data.password) {
        flag = true;
        localStorage.setItem("userId", fields.name);
        this.props.history.push({
          pathname: "/dashboard",
        });
      } else {
        alert("credentials are not valid", fields);
      }
    };
  }

 
  render() {
    return (
   
  <React.Fragment>
        <MDBContainer>
          <MDBRow className="flex-center" style={{ paddingTop: "10vh" }}>
            <MDBCol md="6">
              <MDBCard>
                <MDBCardHeader style={{ backgroundColor: "#74b1d4" }}>
                  <p className="h4 text-center py-4">Login</p>
                </MDBCardHeader>
                <MDBCardBody>
                  <form noValidate onSubmit={this.form.handleSubmit}>
                    <div className="grey-text">
                      <MDBInput
                        label="Your name"
                        icon="user"
                        group
                        type="text"
                        onChange={this.form.handleChangeEvent}
                        onBlur={this.form.handleBlurEvent}
                        value={this.state.fields.name}
                        name="name"
                      />
                      <label className="error">
                        {this.state.errors.name ? this.state.errors.name : ""}
                      </label>

                      <MDBInput
                        label="Your password"
                        icon="lock"
                        group
                        type="password"
                        onChange={this.form.handleChangeEvent}
                        onBlur={this.form.handleBlurEvent}
                        value={this.state.fields.password}
                        name="password"
                      />
                      <label className="error">
                        {this.state.errors.password
                          ? this.state.errors.password
                          : ""}
                      </label>
                    </div>
 
                   <div className="text-center">
                   <button type="submit" class="btn btn-primary">Submit</button>
                    </div>
                      
                    <h5 className="text-center"></h5>
                    <div className="text-center mt-2"></div>

                    <h5 className="text-center">-----OR-----</h5>
                    <p className="text-center">
                      Dont Have an Account???{" "}
                      <Link to="/register">Register here</Link>
                    </p>
                  </form>
                 
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        </React.Fragment>
    
    );
  }
}


export default Login;
