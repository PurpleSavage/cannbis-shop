'use client'
import { CannabisProductI} from '@/models/product.model'
import styles from '../../css/shop/shop.module.css'
import { formatCurrency } from '@/utils/formatCurrency'
import { useCartStore } from '@/stores/cart.store'


interface ProductCardProps {
    product : CannabisProductI
}
export default function ProductCard({product}:ProductCardProps) {
    const addToCart= useCartStore(state=>state.addToCart)
    const addProduct =()=>{
        addToCart({...product, quantity:0})
    }
    
  return (
    <div  className={`w-[70%] space-y-4 pb-4 border border-slate-600/50 rounded-lg ${styles.radialGradient}`}> 
            <div className="flex items-center justify-between p-4 border-b border-slate-500/50">
              <h3 className="text-2xl">{product.title}</h3>
              <span className="text-2xl">{product.typeStrain}</span>
            </div>
            <picture className="w-full flex items-center justify-center">
              <img src={product.url} alt={`photo ${product.title}`} className="w-[60%]" />
            </picture>
            <div className="px-4 ">
              <span className="block text-lg">
                <span className="text-green-600">Type: </span> 
                {product.type}
              </span>
              <span className="block text-lg">
                <span className="text-green-600">Genetic: </span>
                {product.geneticOrigin}
              </span>
            </div>
            <div className="px-4 ">
              <span className="block text-lg">
                <span className="text-green-600">Effect: </span>
                {product.effect}
              </span>
              <span className="block text-lg">
                <span className="text-green-600">Aroma: </span>
                {product.aroma}
              </span>
            </div> 
            <div className="flex items-center justify-between px-4 ">
              <span className="text-lg">{formatCurrency('en-US','USD',product.price)}</span>
              <button className={`px-6 py-2 shadow-lg border border-slate-600/50 
                 rounded-lg ${styles.buttonAddtoCart} transition-colors`} onClick={addProduct}>Add to cart</button>
            </div>
        </div>
  )
}
