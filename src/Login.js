import { Component } from "react";
import Navbar from "./Navbar";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      age: 0,
      password: "",
      confirmPassword: ""
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
            onChange={this.changePasswordHandler}
          />
          <br />
          <br />
          <label>Confirm Password</label>
          <br />
          <input
            value={this.state.confirmPassword}
            onChange={this.changeConfirmPasswordHandler}
          />
          <br />
          <br />
          <button onClick={this.onChange}>Submit</button>
        </form>
      </div>
    );
  }
}
export default Login;
