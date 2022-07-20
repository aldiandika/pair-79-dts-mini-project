import { Box, Typography, Button } from "@mui/material";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import LoginPic from "../assets/ProfilePicture.png";
import Rectangle from "../assets/Rectangle33.png";

const LoginOrRegister = ({ loginOrRegister }) => {
  const navigate = useNavigate();

  const [credential, setCredential] = useState({
    email: "",
    password: "",
  });

  const textFieldEmailOnChangeHandler = (event) => {
    setCredential({
      ...credential,
      email: event.target.value,
    });
  };

  const textFieldPasswordOnChangeHandler = (event) => {
    setCredential({
      ...credential,
      password: event.target.value,
    });
  };

  const loginHandler = () => {};
  const registerHandler = () => {};

  const buttonLoginOrRegisterOnClickHandler = () => {
    if (loginOrRegister === "login") {
      loginHandler();
    } else {
      registerHandler();
    }
  };

  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "100vh",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-end",
          backgroundColor: "black",
        }}
      >
        <img src={LoginPic} alt="loginpic" className="login-img" />
        <img src={Rectangle} alt="rect" className="login-rec" />
        <div className="login-form">
          <Box
            sx={{
              width: "32em",
              height: "100vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: 2,
            }}
          >
            <input
              type="email"
              placeholder="Email"
              className="txt-field"
              value={credential.email}
              onChange={textFieldEmailOnChangeHandler}
            />

            <input
              type="password"
              placeholder="Password"
              className="txt-field"
              value={credential.password}
              onChange={textFieldPasswordOnChangeHandler}
            />

            <Button
              variant="outlined"
              className="btn"
              onClick={buttonLoginOrRegisterOnClickHandler}
            >
              {loginOrRegister === "login" ? "Login" : "Register Account"}
            </Button>

            {loginOrRegister === "login" ? (
              <Link to="/register" className="txt-link">
                <Typography variant="body1">
                  or do you want Register ?
                </Typography>
              </Link>
            ) : (
              <Link to="/login" className="txt-link">
                <Typography variant="body1">or do you want Login ?</Typography>
              </Link>
            )}
          </Box>
        </div>
      </Box>
    </>
  );
};

export default LoginOrRegister;
