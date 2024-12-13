import { Metadata } from "next";


export const metadata: Metadata = {
    title: "Elixir auth",
    description: "Elixir auth page",
};
export default function AuthLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>){
    return(
        <div className="grow flex">
            {children}
        </div>
    )
}