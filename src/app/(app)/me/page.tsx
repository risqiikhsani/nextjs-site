import { cookies } from "next/headers";

async function getData() {
    const cookieStore = cookies();
    const access_token: { name: string, value: string } | undefined = cookieStore.get("access_token");
    const authorization = `Bearer ${access_token?.value ?? ''}`;
    const res = await fetch(`http://127.0.0.1:8000/api/my/profile`, {
      headers: {
        'Authorization': authorization
      }
    });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Page() {

  const data = await getData();

  return (
    <main>
      <p>profile</p>
      {JSON.stringify(data)}
    </main>
  );
}
