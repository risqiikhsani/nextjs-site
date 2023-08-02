

import NavbarMUI from "@/ui/NavbarMUI";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export interface Props {
  children: React.ReactNode;
}

export default async function Layout(props: Props) {

  const cookiesList = cookies()
  const hasAuthenticated = cookiesList.has('authenticated')

  if(!hasAuthenticated){
    return redirect("/auth/login")
  }

  return <NavbarMUI>{props.children}</NavbarMUI>;
}
