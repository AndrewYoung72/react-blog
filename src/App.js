
import {BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import User from "./pages/User";
import Profile from "./pages/Profile";
import "./App.css"



function App() {

 
  return (
    <Router>
      <nav>
        <Link to="/" >Home</Link>
        <Link to="/user">User</Link>
        <Link to="/profile">Profile</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<User />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
 
  );
}

export default App;
