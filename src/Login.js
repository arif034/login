import { Component } from "react";
import Navbar from "./Navbar";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: ""
    };
  }

  changeFirstNameHandler = (event) => {
    this.setState({
      firstName: event.target.value
    });
  };

  onChange = (event) => {
    alert(this.state.firstName);
    event.preventDefault();
  };

  render() {
    return (
      <div>
        <Navbar />
        <form>
          <label>FirstName</label>
          <br />
          <br />
          <input
            value={this.state.firstName}
            onChange={this.changeFirstNameHandler}
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
