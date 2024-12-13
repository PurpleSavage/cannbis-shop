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
              <Link href="/shop" className="flex items-center">
                <span className=" w-8 h-5 flex items-center justify-center">{pathname==='/shop'? "🔥":""}</span> 
                <span className={`underline-offset-4
                ${pathname ==='/shop'?"underline decoration-green-600":""}`}>Cannabis</span>
              </Link>
            </li>
            <li>
              <Link href="/shop/others" className="flex items-center">
                <span className="w-8 h-5 flex items-center justify-center">{pathname==='/shop/others'? "🔥":""}</span> 
                <span className={`underline-offset-4
                ${pathname ==='/shop/others'?"underline decoration-green-600":""}`}>Vapes</span>
              </Link>
            </li>
            <li>
              <Link href="/shop/vapes" className="flex items-center">
                <span className="w-8 h-5 flex items-center justify-center">{pathname==='/shop/vapes'? "🔥":""}</span>
                <span className={`underline-offset-4
                ${pathname ==='/shop/vapes'?"underline decoration-green-600":""}`}>Others</span>
              </Link>
            </li>
        </ul>
    </>
  )
}
