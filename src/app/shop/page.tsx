import { CANNABIS_PRODUCTS } from "@/const/cannabisProducts"
import ProductCard from "@/components/shop/ProductCard"

export default function page() {
  
  return (
    <div className="min-h-min grow flex flex-col gap-12 items-center overflow-y-auto">
      {
        CANNABIS_PRODUCTS.map(product=>(
          <ProductCard key={product.id} product={product}/>
        ))
      }
    </div>
  )
}
