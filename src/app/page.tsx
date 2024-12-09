import Head from "@/components/landing/Head";
import Marquee from "@/components/landing/Marquee";
import BestProducts from "@/components/landing/BestProducts";
import CollageGrid from "@/components/landing/CollageGrid";
export default function Home() {
  return (
    <div className="space-y-40 pb-10">
      <Head/>
      <div className="container mx-auto w-full  text-white flex justify-center items-center overflow-x-hidden">
        <Marquee />
      </div>
      <BestProducts/>
      <CollageGrid/>
    </div>
  );
}
