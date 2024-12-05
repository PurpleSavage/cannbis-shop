import styles from '../../css/landing/collagegrid.module.css'
import Image from 'next/image'
import leavesStyle from '../../css/landing/leaves.module.css'
export default function CollageGrid() {
  return (
    <section className="w-full flex flex-col gap-10 justify-center items-center">
        <h3 className='text-6xl italic font-bold'>Do you want some good zaza?</h3>
        <div className="grid grid-rows-10 grid-cols-4 w-[80%] h-[600px] gap-2">
            <div className={`col-span-2 row-span-3 ${styles.firstGrid}  rounded-md border border-slate-700/50`}>
              <div className='h-full w-full flex justify-center items-center bg-[rgba(0,0,0,.5)]'>
                <span className='text-4xl text-center font-bold text-white mix-blend-lighten'
                >Try our most potent <span className='text-lime-600'>marijuana </span> strain.</span>
              </div>
            </div>
            <div className={`col-span-2 row-span-3 ${styles.secondGrid} rounded-md border flex justify-center 
            items-center border-slate-700/50 relative`}>
              <div className='absolute top-0 left-0 bottom-0 right-0 flex items-center justify-center'>
                <span className='text-4xl font-bold text-white'>The best cannabis vapes</span>
              </div>
              <Image 
                src="/img/cannabis-vapes.png" 
                alt="cannabis vapes" 
                width={140}
                height={140} 
                className='w-[140px]'
              />
            </div>
            <div className={`row-span-4 col-span-4  rounded-md flex justify-center items-end relative
              shadow-inner ${styles.radialgradient} border border-slate-700/50 overflow-hidden`}>
              <Image 
                src="/img/bird-2.png" 
                width={150}
                height={150} 
                className={`w-[150px] ${styles.maskImage}`} 
                alt="image bird high as a kite" 
              />
                <div className={leavesStyle.leaves}>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              <div className="absolute  bottom-0 right-0 left-0 top-0 flex items-end justify-center p-2">
                <span className={`text-6xl font-bold  mix-blend-difference text-center`}
                >Get lit and float on cloud nine with our top-shelf strains!</span> 
              </div>
            </div>
            <div className={`col-span-2 row-span-3 ${styles.fourthGrid} relative rounded-md border border-slate-700/50`}>
                <div className='absolute top-0 bottom-0 left-0 right-0 bg-[rgba(0,0,0,.5)] flex'>
                  <Image 
                    src="/img/pipe.png" 
                    width={150}
                    height={150} 
                    className={`w-[150px] ${styles.maskImage}`} 
                    alt="marijuana pipe" 
                  />
                  <div className='grow flex items-center justify-center'>
                    <span className='text-4xl font-bold text-white'>
                      New model &ldquo;Hammelin Pipe&rdquo; now available
                    </span>
                  </div>
                </div>
            </div>
            <div className={`col-span-2 row-span-3 ${styles.fifthGrid} rounded-md border border-slate-700/50 relative`}>
              <div className='absolute bg-[rgba(0,0,0,.5)] bottom-0 top-0 left-0 right-0 flex items-center justify-center'>
                <span className='text-4xl font-bold text-white'>Try our moon rocks!</span>
              </div>
            </div>
        </div>
    </section>
  )
}
