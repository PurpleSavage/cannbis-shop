'use client'
import { create } from 'zustand';
import { devtools, persist, createJSONStorage } from 'zustand/middleware';
import { type CartProduct } from '@/models/cartproduct.model';

interface CartState {
  listCart: CartProduct[];
  products: {
    totalAmount: number;
    totalProducts: number;
  };

  addToCart: (product: CartProduct) => void;
  removeProduct: (id: string) => void;
  checkProductInList: (product: CartProduct) => boolean;
  getTotalAmount:(list:CartProduct[])=>number
}

export const useCartStore = create<CartState>()(
  devtools(
    persist(
      (set, get) => ({
        listCart: [],
        products: {
          totalAmount: 0,
          totalProducts: 0,
        },



        getTotalAmount:(list)=>{
          return list.reduce((total, item)=>total+item.price,0)
        },


        addToCart: (product) =>
          set((state) => {
            const porductExist = get().checkProductInList(product)
            if(!porductExist){
              const updatedCart = [...state.listCart, {...product,quantity:0}];
              const updatedTotalAmount = get().getTotalAmount(updatedCart);
              const updatedTotalProducts = updatedCart.length;

              return {
                listCart: updatedCart,
                products: {
                  totalAmount: updatedTotalAmount,
                  totalProducts: updatedTotalProducts,
                },
              }
            }
            return state
          }),



        removeProduct: (id) =>
          set((state) => {
            const updatedCart = state.listCart.filter(
              (product) => product.id && product.id !== id 
            );
            const updatedTotalAmount = get().getTotalAmount(updatedCart);
            const updatedTotalProducts = updatedCart.length;

            return {
              listCart: updatedCart,
              products: {
                totalAmount: updatedTotalAmount,
                totalProducts: updatedTotalProducts,
              },
            };
        }),

        checkProductInList: (product) =>get().listCart.some((element) => element.id === product.id),
      }),
      {
        name: 'cartStore',
        storage: createJSONStorage(() => sessionStorage),
      }
    )
  )
);
