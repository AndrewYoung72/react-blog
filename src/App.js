import React, { useState } from "react";
import Home from "./pages/Home";
import Navbar from "./pages/Navbar";
import User from "./pages/User";
import Login from "./pages/Login";
import { Box } from "@mui/material";



function App() {
  const [currentPage, setCurrentPage] = useState("Home");

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === "Home") {
      return <Home />;
    }
    if (currentPage === "User") {
      return <User />;
    }
    return <Login />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="App">
      <Box bgcolor="info.main">
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
      </Box>
      <div className="content">{renderPage()}</div>
    </div>
  );
}

export default App;
