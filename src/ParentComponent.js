import { Component } from "react";
import history from "./history.js";

class ParentComponent extends Component {
  render() {
    return (
      <div>
        <button onClick={() => history.push("/login")}>Login</button>
        <br />
        <br />
        <button onClick={() => history.push("/sign-up")}>SignUp</button>
      </div>
    );
  }
}

export default ParentComponent;
