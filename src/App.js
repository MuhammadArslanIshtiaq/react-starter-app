import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import { NavLink } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>React Starter App</h1>

      <NavLink exact to="/" className="App-link">
        Home
      </NavLink>
      <NavLink exact to="/about" className="App-link">
        About
      </NavLink>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route exact path="/about" element={<About />}></Route>
      </Routes>
    </div>
  );
}

export default App;
