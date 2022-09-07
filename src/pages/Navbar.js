import React, { useState } from "react";
import { Tabs, Tab } from "@mui/material";
import Home from "./Home";
import  Login  from "./Login";
import User from "./User"

export default function Navbar() {
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
    <div>
      <Tabs value={currentPage} onChange={handlePageChange} centered>
        <Tab label="Item One" />
        <Tab label="Item Two" />
        <Tab label="Item Three" />
      </Tabs>
      {renderPage()}
    </div>
  );
}
