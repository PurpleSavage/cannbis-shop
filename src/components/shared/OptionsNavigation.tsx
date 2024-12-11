'use client'
import Link from "next/link"
import { usePathname } from 'next/navigation'
export default function OptionsNavigation() {
    const pathname = usePathname()
  return (
    <div className="grow flex gap-10 items-center justify-center ">
        <Link href="/" className={`${pathname ==='/'? "text-green-600":" text-white"} hover:text-green-600 font-medium`}
        >Home</Link>
        <Link href="/shop" className={`${pathname ==='/shop'? "text-green-600":" text-white"} hover:text-green-600 font-medium`}
        >Shop</Link>
        <Link href="/cart" className={`${pathname ==='/cart'? "text-green-600":" text-white"} hover:text-green-600 font-medium`}
        >Shopping cart</Link>
    </div>
  )
}
