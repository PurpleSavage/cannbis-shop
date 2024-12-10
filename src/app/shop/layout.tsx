import { Metadata } from "next";
import Categories from "@/components/shop/Categories";
import ShopCard from "@/components/shop/ShopCard";
import styles from '../../css/shop/shop.module.css'



export const metadata: Metadata = {
    title: "Elixir shop",
    description: "Cannabis Products Store",
  };

export default function ShopLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <div
          className={`relative  flex px-4 pt-8  grow  pb-4 ${styles.gridArea} gap-2 `}
        >
          <section className=" sticky top-24 border border-slate-800/50  rounded-lg space-y-10 py-8 px-10 
          shadow-inner  shadow-gray-500/50 [grid-area:categories] self-start ">
            <Categories/>
          </section>
          <section className="[grid-area:main] flex overflow-y-auto">
            {children}
          </section>
          <section className="sticky top-24 [grid-area:shopcard] self-start shadow-inner shadow-gray-500/50 py-8 px-10 
          rounded-lg space-y-4">
            <ShopCard/>
          </section>
      </div>
    );
}