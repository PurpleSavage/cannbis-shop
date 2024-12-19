'use client'
import { create } from 'zustand';
import { devtools, persist, createJSONStorage } from 'zustand/middleware';
import { type CartProduct } from '@/models/cartproduct.model';
import { CartActions } from '@/models/cartproduct.model';
interface CartState {
  listCart: CartProduct[];
  products: {
    totalAmount: number;
    totalProducts: number;
  };

  addToCart: (product: CartProduct) => void;
  removeProduct: (id: string) => void;
  checkProductInList: (product: CartProduct) => boolean;
  getTotalAmount:(list:CartProduct[])=>number;
  addQuantity:(product:CartProduct,action:CartActions)=>void
  getTotalProducts:(list:CartProduct[])=>number
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
          return list.reduce((total, item)=>total+item.price*item.quantity,0)
        },

        getTotalProducts:(list)=>{
        
          return list.reduce((total,item)=>total+item.quantity,0)
        },
        addToCart: (product) =>
          set((state) => {
            const porductExist = get().checkProductInList(product)
            if(!porductExist){
              const updatedCart = [...state.listCart, {...product,quantity:1}];
              const updatedTotalAmount = get().getTotalAmount(updatedCart);
              const updatedTotalProducts = get().getTotalProducts(updatedCart)

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


        addQuantity:(product,action)=>set((state)=>{
          let newList:CartProduct[]
          if(action==='@increase'){
            newList=get().listCart.map(item=>{
              if(item.id===product.id){
                return { ...item, quantity: item.quantity + 1 };
              }
              return item
            })
          }else if(action==='@decrease'){
            newList=get().listCart.map(item=>{
              if(item.id===product.id && item.quantity>1){
                return { ...item, quantity: item.quantity - 1 };
              }
              return item
            })
          }else{
            newList = state.listCart;
          }
          const updatedTotalAmount = get().getTotalAmount(newList);
          const updatedTotalProducts =  get().getTotalProducts(newList)
          return {
            listCart: newList, 
            products: {
              totalAmount: updatedTotalAmount, 
              totalProducts: updatedTotalProducts, 
            },
          }
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
