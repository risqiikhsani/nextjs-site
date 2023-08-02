"use client"

import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Stack, Typography } from "@mui/material";
import { auth_api } from "@/api/auth";



interface FormData {
  username: string;
  password: string;
  password2: string;
  email: string;
}

export default function SignupForm() {

  const [formData, setFormData] = React.useState<FormData>({
    username: "",
    password: "",
    password2: "",
    email: ""
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const onSubmit = async () => {
    try {
      const response = await auth_api.signup(formData);
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
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
      }}
      noValidate
      autoComplete="off"
    >
      <Typography>REGISTER</Typography>
        <TextField
          id="outlined-username"
          label="Username"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
        <TextField
          id="outlined-password"
          label="Password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <TextField
          id="outlined-password2"
          label="Password Confirm"
          type="password"
          name="password2"
          value={formData.password2}
          onChange={handleChange}
        />
                <TextField
          id="outlined-email"
          label="Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />

        <Button variant="contained" onClick={onSubmit}>
          SIGN UP
        </Button>
 

    </Box>
  );
}
