"use client"

import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { auth_api } from "@/api/auth";

interface FormData {
  username: string;
  password: string;
}

export default function LoginForm() {
  const [formData, setFormData] = React.useState<FormData>({
    username: "",
    password: "",
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
      const response = await auth_api.login(formData);
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
      }}
      noValidate
      autoComplete="off"
    >
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

      <Button variant="contained" onClick={onSubmit}>
        LOG IN
      </Button>
    </Box>
  );
}
