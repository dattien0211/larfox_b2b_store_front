import Image from "next/image"
import IMGS from "@constants/IMGS"

const RiceSpike = ({
  classIMG1,
  classIMG2,
}: {
  classIMG1?: string
  classIMG2?: string
}) => {
  return (
    <>
      <div
        className={`absolute -top-4 sm:-top-5 left-0 w-12 h-12 sm:w-16 sm:h-16 z-20 ${
          classIMG1 || ""
        }`}
      >
        <Image
          src={IMGS.RiceSpike}
          alt="Rice Spike"
          fill
          sizes="(max-width: 640px) 36px, 64px"
          className="object-contain rotate-45"
        />
      </div>
      <div
        className={`absolute -bottom-4 sm:-bottom-5 right-0 w-12 h-12 sm:w-16 sm:h-16 z-20 ${
          classIMG2 || ""
        }`}
      >
        <Image
          src={IMGS.RiceSpike}
          alt="Rice Spike"
          fill
          sizes="(max-width: 640px) 36px, 64px"
          className="object-contain scale-x-[-1] rotate-[-35deg]"
        />
      </div>
    </>
  )
}

export default RiceSpike
