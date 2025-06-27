import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Image from "next/image"
interface BrandItemProp {
  imagesSRC?: string
  text: string
  link?: string
}

const BrandItem: React.FC<BrandItemProp> = ({
  imagesSRC,
  text,
  link = ""
}) => {
  return (
    <LocalizedClientLink
      href={link}
      className="bg-white py-5 px-3 rounded-xl text-center hover:shadow-lg transition-all hover:-translate-y-1 border border-gray-200 hover:border-primary"
    >
      <div className="text-2xl text-primary mb-3 justify-items-center">
        {imagesSRC ? (
          <Image
            src={imagesSRC}
            alt={"Search"}
            width={50}
            height={50}
          />
        ) : (
          <div className="w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold border-2 border-primary">
            {text?.[0]?.toUpperCase() || "?"}
          </div>
        )}
      </div>
      <p className="text-sm font-medium text-gray-800">{text}</p>
    </LocalizedClientLink>
  )
}

export default BrandItem
