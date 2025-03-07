import Image from "next/image"

import IMGS from "@constants/IMGS"

const RiceSpike = () => {
  return (
    <>
      {" "}
      <div className="absolute -top-[2%] left-0 w-9 h-9 sm:w-16 sm:h-16  ">
        <Image
          src={IMGS.RiceSpike}
          alt="banner"
          width={64}
          height={64}
          className="w-full h-full object-contain rotate-45"
        />
      </div>
      <div className="absolute -bottom-[2%] right-0 w-9 h-9 sm:w-16 sm:h-16 ">
        <Image
          src={IMGS.RiceSpike}
          alt="banner"
          width={64}
          height={64}
          className="w-full h-full object-contain scale-x-[-1] rotate-[-35deg]"
        />
      </div>
    </>
  )
}

export default RiceSpike
