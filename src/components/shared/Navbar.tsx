import Link from "next/link"
import { GiChemicalBolt } from "react-icons/gi";
export default function Navbar() {
  return (
    <nav className="flex py-4 px-12 items-center">
        <div className="flex gap-2">
            <GiChemicalBolt size={20} color="white" />
            <span className="block tracking-widest font-bold">Elixir</span>
        </div>
        <div className="grow text-white flex gap-10 items-center justify-center">
            <Link href="/">Home</Link>
            <Link href="#">Products</Link>
        </div>
        <div className="text-white flex gap-6">
            <button className="py-2 px-6">login</button>
            <button className="bg-white rounded-full py-2 px-6 text-black">Sign up</button>
        </div>
    </nav>
  )
}
