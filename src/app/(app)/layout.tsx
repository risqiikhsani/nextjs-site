

import { useAuth } from "@/context/Auth";
import NavbarMUI from "@/ui/NavbarMUI";
import { redirect } from "next/navigation";
import { useEffect, useState } from 'react';

export interface Props {
  children: React.ReactNode;
}

export default async function Layout(props: Props) {



  return <NavbarMUI>{props.children}</NavbarMUI>;
}
