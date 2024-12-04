import styles from '../../css/landing/bestproducts.module.css'
import { ProductI } from '@/models/product.model'
interface CardBEstProductProps{
    product:ProductI
}
export default function CardBestProduct({product}:CardBEstProductProps) {
  return (
    <div className={`w-[380px] h-[600px] relative  z-20 ${styles.firstBackgroundImage} rounded-lg`}>
        <div className={`absolute z-10 bottom-0 left-0 right-0 top-0 brightness-50 ${styles.gradient} rounded-lg`}></div>
        <div className='absolute z-20 bottom-0 left-0 right-0 top-0 border border-slate-700/50 flex flex-col rounded-lg'>
            <div className='border-b border-slate-700/50 py-4 px-4 w-full'>
                <span>{product.title}</span>
            </div>
            <div className='h-[300px] w-full  flex items-center justify-center'>
                <img src={product.url} className={`h-full w-[250px] ${styles.maskImage}`} alt=" critical kush" />
            </div>
            <div className={`px-4 w-[90%] ${styles.radialgradient} rounded-tr-lg border-t border-r border-slate-700/50
                     grow py-4 space-y-2`}>
                <span className='block'>Type of Strain: {product.typeStrain}</span>
                <span className='block'>Genetic Origin: {product.geneticOrigin}</span>
                <span className='block'>Type: {product.type}</span>
                <span className='block'>Effect: {product.effect}</span>
                <span className='block'>Aroma: {product.aroma}</span>
            </div>
        </div>
    </div>
  )
}
