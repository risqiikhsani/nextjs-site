"use client"

import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, Stack, Typography } from "@mui/material";
import { auth_api } from "@/api/auth";
import { setCookie } from "@/api/cookies";
import { useAuth } from "@/context/Auth";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
interface FormData {
  username: string;
  password: string;
}

export default function LoginForm() {
  const { authenticated, handleLoginSuccess } = useAuth()
  const [formData, setFormData] = React.useState<FormData>({
    username: "",
    password: "",
  });
  const [showPassword, setShowPassword] = React.useState(false);
  const ChangeShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleMouseDownPassword = (event: any) => {
    event.preventDefault();
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const onSubmit = async () => {
    try {
      const response = await auth_api.login(formData);
      setCookie("access_token", response.data.access_token, 7)
      setCookie("refresh_token", response.data.refresh_token, 30)
      if (!authenticated) {
        handleLoginSuccess()
      }
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      noValidate
      autoComplete="off"
    >
      <Typography>LOGIN</Typography>
      <TextField
        id="outlined-username"
        label="Username"
        name="username"
        value={formData.username}
        onChange={handleChange}
      />

      <FormControl sx={{ m: 1 }} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-password">
          Password
        </InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          type={showPassword ? "text" : "password"}
          value={formData.password}
          onChange={handleChange}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={ChangeShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          name="password"
          label="Password"
        />
      </FormControl>

      <Button variant="contained" onClick={onSubmit}>
        LOG IN
      </Button>




    </Box>
  );
}
