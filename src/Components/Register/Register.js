import React from "react";
import { connect } from "react-redux";
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

import { BrowserRouter } from "react-router-dom";
import ReactFormValidation from "react-form-input-validation";
import {  Link } from "react-router-dom";
import Zoom from 'react-reveal/Zoom';
ReactFormValidation.register(
  "custompassword",
  function(value, requirement, attribute) {
    return value.match(
      /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/
    );
  },
  "The password must contain atleast 1 speacial character and digit and alphabet."
);
class Register extends React.Component {
  constructor() {
    super();

    this.state = {
      fields: {
        name: "",
        email: "",
        designation: "",
        contactno: "",
        password:''
      },
      errors: {},
    };
    this.form = new ReactFormValidation(this);
    this.form.useRules({
      name: "required|alpha",
      designation: "required|alpha",
      contactno: "required|numeric|digits_between:10,12",
      email: "required|email",
      password:'required|custompassword'
    });

    this.form.onformsubmit = (fields) => {
      alert("registration done successfully");
      localStorage.setItem('userinfo',
          JSON.stringify(fields)
      )
      this.props.history.push({ pathname: "/"});
    };
  }
  render() {
    return (
      <Zoom>
      <MDBContainer>
        <MDBRow className="flex-center" style={{ paddingTop: "10vh" }}>
          <MDBCol md="7">
            <MDBCard>
              <MDBCardHeader style={{ backgroundColor: "#74b1d4" }}>
                <p className="h4 text-center py-4">Register</p>
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
                      label="Your email"
                      icon="envelope"
                      group
                      type="email"
                      onChange={this.form.handleChangeEvent}
                      onBlur={this.form.handleBlurEvent}
                      value={this.state.fields.email}
                      name="email"
                    />{" "}
                    <label className="error">
                      {this.state.errors.email ? this.state.errors.email : ""}
                    </label>

                    <MDBInput
                      label="Your designation"
                      icon="user-plus"
                      group
                      type="text"
                      onChange={this.form.handleChangeEvent}
                      onBlur={this.form.handleBlurEvent}
                      value={this.state.fields.designation}
                      name="designation"
                    />{" "}
                    <label className="error">
                      {this.state.errors.designation
                        ? this.state.errors.designation
                        : ""}
                    </label>
                    <MDBInput
                      label="Your contactno"
                      icon="phone"
                      group
                      type="text"
                      onChange={this.form.handleChangeEvent}
                      onBlur={this.form.handleBlurEvent}
                      value={this.state.fields.contactno}
                      name="contactno"
                    />{" "}
                    <label className="error">
                      {this.state.errors.contactno
                        ? this.state.errors.contactno
                        : ""}
                    </label>
                    <MDBInput
                      label="Your password"
                      icon="password"
                      group
                      type="password"
                      onChange={this.form.handleChangeEvent}
                      onBlur={this.form.handleBlurEvent}
                      value={this.state.fields.password}
                      name="password"
                    />{" "}
                    <label className="error">
                      {this.state.errors.password ? this.state.errors.password : ""}
                    </label>
                  </div>
                  <div className="text-center">
                   <button type="submit" class="btn btn-primary">Submit</button>
                    </div>
                  <h5 className="text-center">-----OR-----</h5>
                  <p className="text-center">
                    Already have an account ??? <Link to="/">Login here</Link>
                  </p>
                </form>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      </Zoom>
    );
  }
}

export default Register;
