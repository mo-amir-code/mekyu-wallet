import { MaxWidthMD } from "@/wrappers"
import { TypographyH2 } from "../../typography"
import TypographySmall from "../../typography/TypographySmall"


const Hero = () => {
  return (
    <MaxWidthMD>
        <div>
            <div className={"space-y-1"} >
                <TypographySmall content="Total Balance" className="text-muted-foreground" />
                <TypographyH2 content="$29.87" />
            </div>
        </div>
    </MaxWidthMD>
  )
}

export default Hero
