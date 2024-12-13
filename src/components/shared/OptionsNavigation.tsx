'use client'
import Link from "next/link"
import { usePathname } from 'next/navigation'
import { BsCartPlusFill } from "react-icons/bs";
import styles from '../../css/shared/optionnavigation.module.css'
import { useCartStore } from "@/stores/cart.store";
export default function OptionsNavigation() {
  const pathname = usePathname()
  const totalProducts= useCartStore(state=>state.products.totalProducts)
  return (
    <div className="grow flex gap-10 items-center justify-center ">
        <Link href="/" className={`${pathname ==='/'? "text-green-600":" text-white"} hover:text-green-600 font-medium`}
        >Home</Link>
        <Link href="/shop" className={`${pathname ==='/shop'? "text-green-600":" text-white"} hover:text-green-600 font-medium`}
        >Shop</Link>
        <Link href="/cart" className={`p-2 rounded-lg relative  ${styles.radialGradient} border
         border-slate-600/50 ${pathname ==='/cart'? "text-green-600":" text-white"} hover:text-green-600 font-medium`}
        >
          <BsCartPlusFill size={20}/>
          <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">
            {totalProducts}
          </div>
        </Link>
    </div>
  )
}
