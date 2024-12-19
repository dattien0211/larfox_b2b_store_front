import IMGS from "@constants/IMGS"
import Image from "next/image"

const Hero = () => {
  return (
    <div className="w-full">
      <Image
        src={IMGS.Banner}
        alt="Banner "
        width={1200}
        height={568}
        className="w-full"
        priority={true}
      />
    </div>
  )
}

export default Hero
