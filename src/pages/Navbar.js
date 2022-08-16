// import React, { useState, useEffect } from "react";
import {Tabs, Tab} from "@mui/material"
 



export default function Navbar() {



  return(
    <Tabs textColor="blueGrey"centered>
  <Tab label="Home" />
  <Tab label="User" />
  <Tab label="LogIn" />
</Tabs>
  );
}