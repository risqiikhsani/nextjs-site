"use client";

// or 
// https://blog.bitsrc.io/adding-nextauth-to-nextjs-13-and-authenticating-with-github-40539ca6a81c

import { SessionProvider } from "next-auth/react";


export interface AuthContextProps {
  children: React.ReactNode;
}

export default function AuthContext({ children }: AuthContextProps) {
  return <SessionProvider>{children}</SessionProvider>;
}