import "./styles.css";
import { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Contacts from "./Contacts.js";
import Home from "./Home.js";
import About from "./About.js";
import SignUp from "./SignUp.js";
import Login from "./Login.js";
import history from "./history.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      userName: "",
      password: ""
    };
    this.onLogin = this.onLogin.bind(this);
    //this.onSignUp = this.onSignUp.bind(this);
  }

  onLogin = () => {
    console.log(this.props.history);
    this.props.history.push("/login");
  };

  // onSignUp = () => {
  //   console.log(this.props.history);
  //   this.props.history.push("/signUp");
  // };

  render() {
    return (
      <div className="App">
        <Routes>
          <Route exact path="/contacts" element={<Contacts />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signUp" element={<SignUp />} />
          <Route exact path="/" component={<App />} />
        </Routes>
        <button onClick={this.onLogin}>Login</button>
        <br />
        <br />
        <button onClick={() => history.push("/signUp")}>SignUp</button>
      </div>
    );
  }
}
export default App;
