import { Component, useReducer } from "react";
import Navbar from "./Navbar";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      gender: "",
      password: "",
      confirm_password: ""
    };
  }

  onChangeConfirmPassword = (event) => {
    this.setState({
      confirm_password: event.target.value.confirm_password
    });
  };

  onChangePassword = (event) => {
    this.setState({
      password: event.target.value.password
    });
  };

  onChangeConfirmGender = (event) => {
    this.setState({
      gender: event.target.value.gender
    });
  };

  onChangeFirstName = (event) => {
    this.setState({
      firstName: event.target.value.firstName
    });
  };

  onChangeLastName = (event) => {
    this.setState({
      firstName: event.target.value.lastName
    });
  };

  onChangeConfirmPassword = (event) => {
    this.setState({
      confirm_password: event.target.value.confirm_password
    });
  };

  onSubmit = () => {
    if (localStorage.getItem("user"))
      localStorage.setItem("user", [localStorage.getItem("user"), this.state]);
    else localStorage.setItem("user", this.state);
  };

  render() {
    return (
      <div>
        <Navbar />
        <form>
          <label>First Name</label>
          <br />
          <input
            type="text"
            placeholder="First Name"
            value={this.state.firstName}
            onChange={this.onChangeFirstName}
          />
          <br />
          <label>Last Name</label>
          <br />
          <input
            type="text"
            placeholder="Last Name"
            value={this.state.lastName}
            onChange={this.onChangeLastName}
          />
          <br />
          <label>Gender</label>
          <br />
          <input
            type="text"
            placeholder="Gender"
            value={this.state.gender}
            onChange={this.onChangeGender}
          />
          <br />
          <label>Password</label>
          <br />
          <input
            type="text"
            placeholder="Password"
            value={this.state.password}
            onChange={this.onChangePassword}
          />
          <br />
          <label>Confirm Password</label>
          <br />
          <input
            type="text"
            placeholder="Confirm Password"
            value={this.state.confirm_password}
            onChange={this.onChangeConfirmPassword}
          />
          <br />
          <br />
          <button onClick={this.onSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}
export default Login;
