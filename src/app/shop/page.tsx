import { CANNABIS_PRODUCTS } from "@/const/shopProducts"
export default function page() {
  return (
    <div className="min-h-min grow flex flex-col items-center overflow-y-auto">
      {
        CANNABIS_PRODUCTS.map(product=>(
          <div key={product.id} className="w-[70%]">
            <h3>{product.title}</h3>
            <picture className="w-full">
              <img src={product.url} alt={`photo ${product.title}`} className="w-full" />
            </picture>
            <div>

            </div>
          </div>
        ))
      }
    </div>
  )
}
