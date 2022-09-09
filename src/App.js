import HomeIcon from "@mui/icons-material/Home";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import {
  Typography,
  AppBar,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Toolbar,
  Link, Grid
} from "@mui/material";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link as RouterLink,
} from "react-router-dom";
import Home from "./pages/Home";
import User from "./pages/User";
import SignUp from "./pages/SignUp";
import "./App.css";
import { padding } from "@mui/system";
import { blue } from "@mui/material/colors";


function App() {
 
  return (
    <>
      <Router>
        <CssBaseline />

        <AppBar position="relative" component="div">
          <Toolbar>
            <HomeIcon />
            <Link
              component={RouterLink}
              to="/"
              underline="none"
              variant="h6"
              color="white"
              padding={2}
            >
              Home
            </Link>
            <AccountBoxIcon />
            <Link
              component={RouterLink}
              to="/user"
              underline="none"
              variant="h6"
              color="white"
              padding={2}
            >
              User
            </Link>
            <PersonAddIcon />
            <Link
              component={RouterLink}
              to="/signup"
              underline="none"
              variant="h6"
              color="white"
              padding={2}
            >
              Sign Up
            </Link>
          </Toolbar>
        </AppBar>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user" element={<User />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Router>
      <Grid container>
      
      </Grid>
    </>
  );
}

export default App;
