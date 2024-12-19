'use client'

import styles from '../../css/shop/shop.module.css'
import { BsCartXFill } from "react-icons/bs";
import { useCartStore } from "@/stores/cart.store"
import CardOrder from './CardOrder';

export default function ListCardOrder() {
    const listCart =useCartStore(state=>state.listCart)
  return (
    <div className={`grow flex flex-col items-center pt-4 ${listCart.length ? "":"justify-center"}`}>
        {
            listCart.length !== 0? 
                listCart.map(product=>(
                    <CardOrder key={product.id} product={product}/>
                )):
                <div className={`flex gap-4 flex-col items-center p-12 ${styles.radialGradient} border border-slate-600/50 rounded-lg`}> 
                    <BsCartXFill size={50}/>
                    <p className='text-white text-4xl'>Your cart is currently empty.</p>
                </div>
        }
    </div>
  )
}
