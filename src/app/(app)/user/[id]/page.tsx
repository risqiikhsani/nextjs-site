import { cookies } from "next/headers";
import User from "./user";

// export async function generateStaticParams() {
//     return [{id:'1'},{id:'2'},{id:'3'},{id:'4'},{id:'5'}]
//   }

async function getPost(id: string) {
  const cookieStore = cookies();
  const access_token: { name: string; value: string } | undefined =
    cookieStore.get("access_token");
  const authorization = `Bearer ${access_token?.value ?? ""}`;
  const res = await fetch(`http://127.0.0.1:8000/api/user/${id}`, {
    headers: {
      Authorization: authorization,
    },
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

export default async function Page({ params }: { params: { id: string } }) {
  const data = await getPost(params.id);

  return <User data={data} />;
}
