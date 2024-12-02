'use client'
import { motion } from "motion/react"
import styles from '../../css/landing/marquee.module.css'
interface MarqueeItemProps{
    images:string[]
    from:number | string
    to:number | string
}

export default function MarqueeItem({images,from,to}:MarqueeItemProps) {
  return (
    <div className={`flex ${styles.MyGradient}`}>
    <motion.div
      initial={{ x: `${from}` }}
      animate={{ x: `${to}` }}
      transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      className="flex flex-shrink-0"
    >
      {images.map((image, index) => {
        return <img className="h-40 w-56 pr-20" alt="brand image" src={image} key={index} />;
      })}
    </motion.div>

    <motion.div
      initial={{ x: `${from}` }}
      animate={{ x: `${to}` }}
      transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      className="flex flex-shrink-0"
    >
      {images.map((image, index) => {
        return <img className="h-40 w-56 pr-20" alt="brand image" src={image} key={index} />;
      })}
    </motion.div>
  </div>
  )
}
