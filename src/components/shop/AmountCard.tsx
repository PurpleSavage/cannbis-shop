'use client'
import { useCartStore } from "@/stores/cart.store"
import { formatCurrency } from "@/utils/formatCurrency"
import { getAllTags } from "@/utils/getAllTags"
export default function AmountCard() {
  const totalAmount= useCartStore(state=>state.products.totalAmount)
  const totalProducts=useCartStore(state=>state.products.totalProducts)
  const listCart = useCartStore(state=>state.listCart)
  return (
    <>
        <h2 className="text-4xl underline-offset-8 underline">Products</h2> 
        <div className="space-y-4">
            <span>Total products: {totalProducts}</span>
            <div className="flex items-center justify-start">
                <span className="text-white">categories: {getAllTags(listCart)}</span> 
            </div>
            <div>Total amount: {formatCurrency('en-US','USD',totalAmount)}</div>
        </div>
    </>
  )
}
