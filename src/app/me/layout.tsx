"use client"

import { useAuth } from "@/context/Auth";
import React from "react";


export default function Layout({children}:{children:React.ReactNode}){

    const {authenticated} = useAuth();

    return(
        <>
            <p>authenticated = {authenticated ? "true" : "false"}</p>
            {children}
        </>
    )
}