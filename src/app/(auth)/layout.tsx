
export interface Props {
  children: React.ReactNode;
}

export default async function Layout(props: Props) {
  return(
    <>
        Authentication
        {props.children}
    </>
  );
}
