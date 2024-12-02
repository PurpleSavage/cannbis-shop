'use client'
import { Suspense } from "react";
import dynamic from 'next/dynamic';
import styles from '../../css/landing/head.module.css'
import TextFlip from "./TextFlip";

const ModelHeader =dynamic(() => import('./Model3d'), {
    ssr: false,
})
export default function Head() {
  return (
    <div className="h-[700px]  relative flex justify-end ">
        <div className={`z-20 absolute bottom-0 b left-0 right-0 top-0 px-12 py-10 justify-center flex flex-col gap-4`}>
            <div className="flex items-center justify-start">
                <span className="rounded-full border border-green-500 block py-2 px-4 text-green-500">
                    100% Quality
                </span>
            </div>
            <div className="flex justify-start  w-1/2">
                <TextFlip/>
            </div>
            <h1 className="text-8xl text-white font-semibold w-1/2">The Essence of <br />  Wellness</h1>
            <h2 className="text-2xl text-white font-semibold w-1/2">
                Discover a unique experience in medicinal and recreational cannabis. Quality, 
                trust, and wellness in every choice.
            </h2>
        </div>
        <div className={`${styles.gradient} bottom-0 right-0 left-0 top-0 absolute z-10`}></div>
        <div className=" h-full w-1/2 flex justify-center items-center relative">
            <Suspense fallback={<p className="text-white">cargando....</p>}>
                <ModelHeader/>
            </Suspense>
        </div>
        
    </div>
  )
}
