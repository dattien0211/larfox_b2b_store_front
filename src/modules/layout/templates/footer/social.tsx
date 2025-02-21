import Icons from "@modules/common/icons"

export default async function FooterSocial() {
  const { Twitter, FaceBook, Instagram, Google } = Icons

  return (
    <div className="w-full sm:w-fit flex items-center justify-between sm:justify-center gap-x-2">
      <h1 className="text-white  font-bold text-lg sm:text-xl font-times">
        Follow Us
      </h1>
      <div className="w-[65px] sm:w-[45px] h-[1px] bg-white"></div>
      <div className="flex items-center justify-center gap-x-2">
        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center cursor-pointer">
          <Twitter color="#FFFFFF" />
        </div>
        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center cursor-pointer">
          <FaceBook color="#FFFFFF" />
        </div>
        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center cursor-pointer">
          <Instagram color="#FFFFFF" />
        </div>
        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center cursor-pointer">
          <Google color="#FFFFFF" />
        </div>
      </div>
    </div>
  )
}
