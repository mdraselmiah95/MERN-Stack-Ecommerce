import { Stack } from "@mui/material";
import React from "react";

const Login = () => {
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
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Login;
