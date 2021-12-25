import { Component } from "react";
import Navbar from "./Navbar.js";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      age: 0,
      password: "",
      confirmPassword: "",
      togglePassword: 0
    };
  }

  changeFirstNameHandler = (event) => {
    this.setState({
      firstName: event.target.value
    });
  };

  changeLastNameHandler = (event) => {
    this.setState({
      lastName: event.target.value
    });
  };

  changeAgeHandler = (event) => {
    this.setState({
      age: event.target.value
    });
  };

  changePasswordHandler = (event) => {
    this.setState({
      password: event.target.value
    });
  };

  changeConfirmPasswordHandler = (event) => {
    this.setState({
      confirmPassword: event.target.value
    });
  };

  onChange = (event) => {
    alert(
      this.state.firstName +
        " " +
        this.state.lastName +
        " " +
        this.state.age +
        " " +
        this.state.password +
        " " +
        this.state.confirmPassword
    );
    event.preventDefault();
  };

  onTogglePassword = (event) => {
    this.setState((prevState) => {
      return {
        togglePassword: this.modulus(
          prevState.togglePassword - 1
        )
      };
    });
    event.preventDefault();
  };

  modulus = (value) => {
    if (value <= 0) return -value;
  };

  render() {
    return (
      <div>
        <Navbar />
        <form>
          <label>First Name</label>
          <br />
          <input
            value={this.state.firstName}
            onChange={this.changeFirstNameHandler}
          />
          <br />
          <br />
          <label>Last Name</label>
          <br />
          <input
            value={this.state.lastName}
            onChange={this.changeLastNameHandler}
          />
          <br />
          <br />
          <label>Age</label>
          <br />
          <input
            value={this.state.age}
            onChange={this.changeAgeHandler}
          />
          <br />
          <br />
          <label>Password</label>
          <br />
          <input
            value={this.state.password}
            type={
              this.state.togglePassword === 0
                ? "password"
                : "text"
            }
            onChange={this.changePasswordHandler}
          />
          <br />
          <br />
          <label>Confirm Password</label>
          <br />
          <input
            value={this.state.confirmPassword}
            type={
              this.state.togglePassword === 0
                ? "password"
                : "text"
            }
            onChange={this.changeConfirmPasswordHandler}
          />
          <br />
          <br />
          <button onClick={this.onChange}>Submit</button>
          <br />
          <br />
          <button onClick={this.onTogglePassword}>
            Show Password
          </button>
        </form>
      </div>
    );
  }
}
export default Login;
