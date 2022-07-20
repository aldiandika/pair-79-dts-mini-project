import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import * as React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import ImageLogo from "../assets/logo/logo.png";
import { auth, logout } from "../authentication/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [user, loading] = useAuthState(auth);
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, [user]);

  const handleLogoutButton = async () => {
    await logout();
    navigate("/");
  };

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
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "nav-active" : "nav-inactive"
              }
            >
              Home
            </NavLink>

            {!loading &&
              (isLogin ? (
                <button
                  style={{
                    cursor: "pointer",
                    color: "white",
                    backgroundColor: "#141414",
                    borderColor: "white",
                    borderRadius: "12px",
                    paddingLeft: "8px",
                    paddingRight: "8px",
                    paddingTop: "4px",
                    paddingBottom: "4px",
                    marginLeft: "12px",
                  }}
                  onClick={handleLogoutButton}
                >
                  Logout
                </button>
              ) : (
                <>
                  <NavLink
                    to="/register"
                    className={({ isActive }) =>
                      isActive ? "nav-active" : "nav-inactive"
                    }
                  >
                    Register
                  </NavLink>
                  <NavLink
                    to="/login"
                    className={({ isActive }) =>
                      isActive ? "nav-active" : "nav-inactive"
                    }
                  >
                    Login
                  </NavLink>
                </>
              ))}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
