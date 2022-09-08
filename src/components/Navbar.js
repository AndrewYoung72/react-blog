// import React, { useState, useEffect } from "react";
import { Tabs, Tab } from "@mui/material";

export default function Navbar() {
  return (
    <Tabs textColor="#2196f3" centered>
      <Tab label="Home"  href="/"/>
      <Tab label="User"  href="/user" />
    </Tabs>
  );
}
