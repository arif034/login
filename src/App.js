import "./styles.css";
import { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Contacts from "./Contacts.js";
import Home from "./Home.js";
import About from "./About.js";
import SignUp from "./SignUp.js";
import Login from "./Login.js";
import ParentComponent from "./ParentComponent";
//learn jest for testing in react and component pattern for react interview
class App extends Component {
  render() {
    return (
      <div className="App">
        <Routes>
          <Route exact path="/contacts" element={<Contacts />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/sign-up" element={<SignUp />} />
          <Route exact path="/" element={<ParentComponent />} />
        </Routes>
      </div>
    );
  }
}
export default App;
