import { CANNABIS_PRODUCTS } from "@/const/cannabisProducts"
import styles from '../../css/shop/shop.module.css'
import { formatCurrency } from "@/utils/formatCurrency"

export default function page() {
  return (
    <div className="min-h-min grow flex flex-col gap-12 items-center overflow-y-auto">
      {
        CANNABIS_PRODUCTS.map(product=>(
          <div key={product.id} className={`w-[70%] space-y-4 pb-4 border border-slate-600/50 rounded-lg ${styles.radialGradient}`}> 
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
              <button className="px-4 py-1 bg-cyan-500 shadow-lg shadow-cyan-500/50 rounded-lg">Add to cart</button>
            </div>
          </div>
        ))
      }
    </div>
  )
}
