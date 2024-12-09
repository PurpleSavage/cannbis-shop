
import styles from '../../css/landing/bestproducts.module.css'
import { BEST_PRODUCTS } from '@/const/productsArray'
import CardBestProduct from './CardBestProduct'
export default function BestProducts() {
  return (
    <section className={`w-full relative flex flex-col gap-10 justify-center items-center  py-24`}>
        <div className={`absolute -z-10  left-[5%] right-[5%] bottom-[11%]  top-[5%] rounded-t-[20%]
              ${styles.gradien180Green} shadow-lg shadow-cyan-500/50 `}></div>
        <h3 className='text-6xl italic font-bold'>Best-selling products</h3>
        <div className={`w-[90%] py-4 relative z-20  border border-slate-800/50  rounded-md flex justify-evenly items-center
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
