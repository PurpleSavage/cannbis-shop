
import styles from '../../css/landing/bestproducts.module.css'
import { BEST_PRODUCTS } from '@/const/productsArray'
import CardBestProduct from './CardBestProduct'
export default function BestProducts() {
  return (
    <section className="w-full flex flex-col gap-10 justify-center items-center">
        <h3 className='text-6xl italic font-bold'>Best-selling products</h3>
        <div className={`w-[90%] py-4 relative  border border-slate-800/50  rounded-md flex justify-evenly items-center
            ${styles.secondBackgroundImage}`}>
            <div className={`${styles.gradien90} absolute z-10 bottom-0 left-0 right-0 top-0`}></div> 
            {
                BEST_PRODUCTS.map(product =>(
                    <CardBestProduct key={product.id} product={product}/>
                ))
            }
        </div>
    </section>
  )
}
