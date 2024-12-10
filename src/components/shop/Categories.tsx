import Link from "next/link"

export default function Categories() {
  return (
    <>
        <h2 className="text-4xl underline-offset-8 underline">Categories</h2>
        <ul className="space-y-4 ">
            <li>
              <Link href="/">Cannabis</Link>
            </li>
            <li>
              <Link href="/">Vapes</Link>
            </li>
            <li>
              <Link href="/">others</Link>
            </li>
        </ul>
    </>
  )
}
