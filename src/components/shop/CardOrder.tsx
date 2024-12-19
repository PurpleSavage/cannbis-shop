'use client'
import { FiPlus,FiMinus } from "react-icons/fi";
import { CartProduct } from "@/models/cartproduct.model"
import styles from '../../css/shop/shop.module.css'
import { useCartStore } from "@/stores/cart.store";


interface CardOrderProps{
  product: CartProduct
}
export default function CardOrder({product}:CardOrderProps) {
  const addQuantity = useCartStore(state=>state.addQuantity)
  const removeProduct = useCartStore(state=>state.removeProduct)
  return (
    <div className={`${styles.radialGradient} p-4 border border-slate-600/50 rounded-lg w-3/5`}>
      <div className="flex">
        <div className="w-1/2 flex flex-col justify-between">
          <span className="block text-xl">Product: {product.title}</span>
          <span className="block text-lg">Category: {product.category}</span>
          <span className="block text-lg">Price: {product.price}</span> 
          <div className="flex items-center ">
            <span className="block text-lg">
              Quantity
            </span>
            <div className="flex gap-4 grow items-center justify-center">
              <button
                onClick={()=>addQuantity(product,'@decrease')} 
                className="px-4 py-1 rounded-lg border border-slate-500/50 hover:border-slate-800 hover:text-slate-800">
                <FiMinus size={20}/>
              </button>
              <div>
                {product.quantity}
              </div>
              <button 
                onClick={()=>addQuantity(product,'@increase')} 
                className="px-4 py-1 rounded-lg border border-slate-500/50 hover:border-slate-800 hover:text-slate-800">
                <FiPlus size={20}/>
              </button>
            </div>
          </div>
          <div className="w-full px-2">
            <button className={`px-5 flex items-center justify-center text-md text-white
            border border-slate-500/50 rounded-lg ${styles.radialGradient} py-2
             hover:border-slate-800 hover:text-slate-400`} onClick={()=>removeProduct(product.id)}>remove product</button>
          </div>
        </div>
        <div className="w-1/2 flex items-center justify-center">
          <img src={product.url} className="w-full " alt={`image ${product.title}`} />
        </div>
      </div>
    </div>
  )
}
