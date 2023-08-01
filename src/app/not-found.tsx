import Link from 'next/link'

// https://github.com/vercel/next.js/discussions/50732#discussioncomment-6080258
 
export default function NotFound() {
  return (
    <div>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <p>
        View <Link href="/">Home page</Link>
      </p>
    </div>
  )
}