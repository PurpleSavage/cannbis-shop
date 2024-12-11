import { CANNABIS_PRODUCTS } from "@/const/cannabisProducts"
export default function page() {
  return (
    <div className="min-h-min grow flex flex-col gap-12 items-center overflow-y-auto">
      {
        CANNABIS_PRODUCTS.map(product=>(
          <div key={product.id} className="w-[70%] space-y-4 p-4 border border-slate-600/50 rounded-lg"> 
            <div className="flex items-center justify-between">
              <h3>{product.title}</h3>
              <span>{product.typeStrain}</span>
            </div>
            <picture className="w-full block">
              <img src={product.url} alt={`photo ${product.title}`} className="w-full" />
            </picture>
            <div className="flex items-center justify-between">
              <span>{product.type}</span>
              <span>{product.geneticOrigin}</span>
            </div>
            <div>
              <span className="block">{product.effect}</span>
              <span className="block">{product.aroma}</span>
            </div>
            <div className="flex items-center justify-between">
              <span>20$</span>
              <button className="px-4 py-1 bg-cyan-500 shadow-lg shadow-cyan-500/50 rounded-lg">Add to cart</button>
            </div>
          </div>
        ))
      }
    </div>
  )
}
