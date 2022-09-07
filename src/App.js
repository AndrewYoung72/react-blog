import React, { useState } from "react";
import Home from "./pages/Home";
import Navbar from "./pages/Navbar";
import User from "./pages/User";
import Login from "./pages/Login";
import { Box } from "@mui/material";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  // const [currentPage, setCurrentPage] = useState("Home");

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  // const renderPage = () => {
  //   if (currentPage === "Home") {
  //     return <Home />;
  //   }
  //   if (currentPage === "User") {
  //     return <User />;
  //   }
  //   return <Login />;
  // };

  // const handlePageChange = (page) => setCurrentPage(page);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Link>
            <Route path="/">
              <Home />
            </Route>
          </Link>
        </div>
      </div>
    </Router>
  );
}

export default App;
