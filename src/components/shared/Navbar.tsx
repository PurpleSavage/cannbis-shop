import Link from "next/link";
import { GiChemicalBolt } from "react-icons/gi";
import OptionsNavigation from "./OptionsNavigation";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-black flex py-4 px-12 items-center bg-opacity-70" style={{ backdropFilter: 'blur(8px)' }}>
        <div className="flex gap-2 ">
            <GiChemicalBolt size={20} color="white" />
            <span className="block tracking-widest font-bold ">Elixir</span>
        </div>
        <OptionsNavigation/>
        <div className="text-white flex gap-4">
            <Link href="/auth" className="py-2 hover:text-green-600">login</Link>
            <Link href="/auth/register" className="bg-white rounded-full py-2 px-6
             text-black hover:text-green-600">Sign up</Link>
        </div>
    </nav>
  )
}
