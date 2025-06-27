import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Image from "next/image"
interface CategoryItemProp {
  imagesSRC?: string
  text: string
  link?: string
}

const CategoryItem: React.FC<CategoryItemProp> = ({
  imagesSRC,
  text,
  link = ""
}) => {
  return (
    <LocalizedClientLink
      href={link}
      className="bg-white p-6 rounded-xl text-center hover:shadow-lg transition-all hover:-translate-y-1 border border-gray-200 hover:border-primary"
    >
      <div className="text-2xl text-primary mb-3 justify-items-center">
        <Image
          //@ts-ignore
          src={imagesSRC}
          alt={"Search"}
          width={50}
          height={50}
        />
      </div>
      <p className="text-sm font-medium text-gray-800">{text}</p>
    </LocalizedClientLink>
  )
}

export default CategoryItem
