import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Image from "next/image"
import IMGS from "@constants/IMGS"

interface CategoryItemProp {
  imagesSRC?: string
  text: string
  link?: string
  isCategory?: boolean
  isAll?: boolean
}

const CategoryItem: React.FC<CategoryItemProp> = ({
  imagesSRC,
  text,
  link = "",
  isCategory = true,
  isAll = false,
}) => {
  return (
    <LocalizedClientLink
      href={
        link !== ""
          ? isAll
            ? link
            : isCategory
            ? "/danh-muc-san-pham/" + link
            : "/bo-suu-tap/" + link
          : ""
      }
      className="cursor-pointer  border-b border-r
      border-primary/35 hover:border-primary/45
        hover:z-[1] hover:shadow-md transition-all duration-0 ease-linear"
    >
      <div className="w-full flex flex-col items-center justify-center p-2 gap-y-1 sm:p-3 sm:gap-y-3">
        <div className="w-[80%] aspect-square relative flex flex-col items-center justify-center">
          {(isAll || imagesSRC) && (
            <Image
              src={isAll ? IMGS.AllProducts : imagesSRC || ""}
              alt="img"
              fill
              className="object-contain w-full h-full rounded-sm"
              sizes="(max-width: 768px) 75px, (max-width: 1200px) 120px, 120px"
              priority
            />
          )}
        </div>
        <h3 className="text-black/80 line-clamp-2 text-xs sm:text-sm h-8 sm:h-10 text-center max-w-full">
          {text}
        </h3>
      </div>
    </LocalizedClientLink>
  )
}

export default CategoryItem
