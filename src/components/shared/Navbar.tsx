
import { GiChemicalBolt } from "react-icons/gi";
import OptionsNavigation from "./OptionsNavigation";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-black flex py-4 px-12 items-center">
        <div className="flex gap-2 ">
            <GiChemicalBolt size={20} color="white" />
            <span className="block tracking-widest font-bold px-6">Elixir</span>
        </div>
        <OptionsNavigation/>
        <div className="text-white flex gap-2">
            <button className="py-2">login</button>
            <button className="bg-white rounded-full py-2 px-6 text-black">Sign up</button>
        </div>
    </nav>
  )
}
