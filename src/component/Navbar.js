import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import * as React from "react";
import { Link, NavLink } from "react-router-dom";
import ImageLogo from "../assets/logo/logo.png";

const navItems = [
  { text: "Home", link: "/" },
  { text: "Series", link: "/series" },
  { text: "Movies", link: "/movies" },
  { text: "New and Popular", link: "/popular" },
];

const Navbar = () => {
  return (
    <Box
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <AppBar
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        style={{ background: "#141414" }}
      >
        <Toolbar className="navbar">
          <Box
            sx={{
              flexGrow: 1,
              display: "block",
            }}
          >
            <Link
              style={{ color: "inherit", textDecoration: "inherit" }}
              to="/"
            >
              <img src={ImageLogo} alt="logo" />
            </Link>
          </Box>

          <Box
            sx={{
              display: "block",
              justifyContent: "center",
              alignItems: "space-between",
            }}
          >
            {navItems.map((item) => (
              <NavLink
                to={item.link}
                key={item.text}
                className={({ isActive }) =>
                  isActive ? "nav-active" : "nav-inactive"
                }
              >
                {item.text}
              </NavLink>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
