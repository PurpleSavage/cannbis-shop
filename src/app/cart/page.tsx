import ListCardOrder from "@/components/shop/ListCardOrder"
import AmountCard from "@/components/shop/AmountCard"
export default function page() { 
  return (
    <div className={`grow flex  px-8`}>
      <ListCardOrder/>
      <section className="sticky w-1/4  top-24  self-start shadow-inner shadow-gray-500/50 py-8 px-10 
            rounded-lg space-y-4">
          <AmountCard/>
        </section>
    </div>
  )
}
