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
        className={`absolute -top-4 sm:-top-5 left-0 w-9 h-9 sm:w-16 sm:h-16 ${
          classIMG1 || ""
        }`}
      >
        <Image
          src={IMGS.RiceSpike}
          alt="Rice Spike"
          fill
          className="object-contain rotate-45"
        />
      </div>
      <div
        className={`absolute -bottom-4 sm:-bottom-5 right-0 w-9 h-9 sm:w-16 sm:h-16 ${
          classIMG2 || ""
        }`}
      >
        <Image
          src={IMGS.RiceSpike}
          alt="Rice Spike"
          fill
          className="object-contain scale-x-[-1] rotate-[-35deg]"
        />
      </div>
    </>
  )
}

export default RiceSpike
