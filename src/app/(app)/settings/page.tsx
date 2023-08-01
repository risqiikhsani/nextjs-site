import { cookies } from "next/headers";

export default function Page() {
  const cookieStore = cookies();
  return (
    <>
      <p>settings</p>
      {cookieStore.getAll().map((cookie) => (
        <div key={cookie.name}>
          <p>Name: {cookie.name}</p>
          <p>Value: {cookie.value}</p>
        </div>
      ))}
      <p>test</p>
    </>
  );
}
