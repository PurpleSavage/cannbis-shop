import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { type CartProduct } from '@/models/product.model'
interface BearState {
  listCart: CartProduct[]
  addToCart: (product:CartProduct) => void
  getTotalAmount:()=>number
  removeProduct:(id:string)=>void
  totalProducts:()=>number
  checkProductInList:(product:CartProduct)=>boolean
}

export const useBearStore = create<BearState>()(
  devtools(
    persist(
      (set,get) => ({
        listCart: [],
        addToCart: (product) => set((state) => ({ listCart:[...state.listCart,product] })),

        getTotalAmount:()=>get().listCart.reduce((total, product) => total + product.price, 0),

        removeProduct:(id)=>set((state)=>({listCart:state.listCart.filter(product =>product.id && product.id !== id) })),

        totalProducts:()=>get().listCart.length,

        checkProductInList:(product)=>get().listCart.some(element =>element.id ===product.id),
      }),
      { name: 'cartStore' },
    ),
  ),
)