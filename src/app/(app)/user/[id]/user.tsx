interface User {
  id: string;
  name: string;
}

export default function User(props: { data: User }) {
  const { data } = props; // Corrected the destructuring here
  return (
    <>
      <p>User id = {data.id}</p>
      <p>User name = {data.name}</p>
    </>
  );
}
