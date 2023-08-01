import NavbarMUI from "@/ui/NavbarMUI";

export interface Props {
  children: React.ReactNode;
}

export default async function Layout(props: Props) {
  return <NavbarMUI>{props.children}</NavbarMUI>;
}
