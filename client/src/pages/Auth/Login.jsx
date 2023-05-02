import {
  Alert,
  Button,
  CircularProgress,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import WHiteSpace from "../../components/App/whitespac/WHiteSpace";

const Login = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = () => {
    const user = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    console.log(user);
  };

  return (
    <Stack>
      <Stack
        sx={{
          width: "40%",
          height: "auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "auto",
          borderRadius: "5px",
          my: 4,
          boxShadow: 2,
        }}
      >
        <Stack
          direction="column"
          spacing={2}
          sx={{
            width: "60%",
            textAlign: "center",
          }}
          pt={5}
        >
          <h2>Login</h2>

          <TextField
            label="Email"
            type="email"
            variant="outlined"
            inputRef={emailRef}
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            inputRef={passwordRef}
          />
          <WHiteSpace height={10} />

          <Button variant="contained" onClick={handleSubmit}>
            {/* {isLoading ? (
              <CircularProgress size={25} color="warning" />
            ) : (
              "Login"
            )} */}
            Login
          </Button>

          <Typography variant="p">
            Forgot Password?
            <Typography
              sx={{
                textDecoration: "underline",
                display: "inline-block",
                marginLeft: "5px",
              }}
            >
              <Link to="/forgot-password">Forgot Password</Link>
            </Typography>
          </Typography>

          <Typography variant="p">
            Don&#39;t have an account?
            <Typography
              sx={{
                textDecoration: "underline",
                display: "inline-block",
                marginLeft: "5px",
              }}
            >
              <Link to="/register">Register</Link>
            </Typography>
          </Typography>
          <WHiteSpace height={50} />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Login;
