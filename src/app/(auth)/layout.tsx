

import { useAuth } from "@/context/Auth";
import { Box, CssBaseline, Paper, Stack, Typography } from "@mui/material";
import { redirect } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from 'react';
export interface Props {
  children: React.ReactNode;
}

export default async function Layout(props: Props) {



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
            background:
              "linear-gradient(to right, #2980b9, #6dd5fa, #ffffff)",
            p: "20px",
            borderRadius: "20px",
            opacity: "0.9",
          }}
        >
          {props.children}
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="flex-end"
            spacing={2}
            sx={{my:'20px'}}
          >
          <Link href="/login">Login</Link>
          <Link href="/signup">Signup</Link>
          <Link href="/forgot-password">Forgot password ?</Link>
          </Stack>
          <Typography variant="body2" gutterBottom>
            Copyright © Your Website 2022.
          </Typography>
        </Paper>
      </Box>
    </>
  );
}
