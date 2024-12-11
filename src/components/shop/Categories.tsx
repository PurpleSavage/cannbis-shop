'use client'
import Link from "next/link"
import { usePathname } from 'next/navigation'
export default function Categories() {
  const pathname = usePathname()
  return (
    <>
        <h2 className="text-4xl underline-offset-8 underline">Categories</h2>
        <ul className="space-y-4 ">
            <li>
              <Link href="/shop" className={`underline-offset-4
                ${pathname ==='/shop'?"underline decoration-green-600":""}`}>Cannabis</Link>
            </li>
            <li>
              <Link href="/shop/others" className={`underline-offset-4
                ${pathname ==='/shop/others'?"underline decoration-green-600":""}`}>Vapes</Link>
            </li>
            <li>
              <Link href="/shop/vapes" className={`underline-offset-4
                ${pathname ==='/shop/vapes'?"underline decoration-green-600":""}`}>others</Link>
            </li>
        </ul>
    </>
  )
}
