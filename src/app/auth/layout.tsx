
import { Box, CssBaseline, Divider, Paper, Stack, Typography } from "@mui/material";
import { cookies } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useState } from "react";
export interface Props {
  children: React.ReactNode;
}

export default async function Layout(props: Props) {


  const cookiesList = cookies()
  const hasAuthenticated = cookiesList.has('authenticated')

  if(hasAuthenticated){
    return redirect("/")
  }

  return (
    <>
      <Box
        sx={{
          background: "linear-gradient(to right, #12c2e9, #c471ed, #f64f59)",
          // for centering child vertically and horizontally
          height: "100vh",
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <CssBaseline />
        <Paper elevation={3}
          sx={{
            minWidth:'30%',
            background:
              "linear-gradient(to right, #2980b9, #6dd5fa, #ffffff)",
            p: "20px",
            borderRadius: "20px",
            opacity: "0.9",
          }}
        >
          {props.children}
          <Divider variant="middle" sx={{my:'20px'}} />
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="flex-end"
            spacing={2}
            sx={{my:'20px'}}
          >
          <Link href="/auth/login">Login</Link>
          <Link href="/auth/signup">Signup</Link>
          <Link href="/auth/forgot-password">Forgot password ?</Link>
          </Stack>
          <Typography variant="body2" gutterBottom>
            Copyright © Your Website 2022.
          </Typography>
        </Paper>
      </Box>
    </>
  );
}
