import "./styles.css";
import { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Contacts from "./Contacts.js";
import Home from "./Home.js";
import About from "./About.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Routes>
          <Route exact path="/contacts" element={<Contacts />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
      </div>
    );
  }
}
export default App;
