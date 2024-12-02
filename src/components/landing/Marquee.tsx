import { upperMarquee,lowerMarquee } from "@/const/imgArray"
import MarqueeItem from "./MarqueeItem"
export default function Marquee() {
  return (
    <div className="container mx-auto">
      <MarqueeItem images={upperMarquee} from={0} to={"-100%"} />
      <MarqueeItem images={lowerMarquee} from={"-100%"} to={0} />
    </div>
  )
}
