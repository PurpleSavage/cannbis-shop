import { Metadata } from "next";


export const metadata: Metadata = {
    title: "Elixir shop",
    description: "Cannabis shopping cart",
  };
export default function CartLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>){
    return (
      <div className={`flex grow`}>
        {children}
      </div>
    )
  }