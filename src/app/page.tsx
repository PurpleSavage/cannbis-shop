import Head from "@/components/landing/Head";
import Marquee from "@/components/landing/Marquee";
export default function Home() {
  return (
    <div className="space-y-2">
      <Head/>
      <div className="container mx-auto w-full  text-white flex justify-center items-center overflow-x-hidden">
        <Marquee />
      </div>
    </div>
  );
}
