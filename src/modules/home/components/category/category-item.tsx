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
      className="group cursor-pointer border-b border-r border-primary/35
        hover:border-primary/45 hover:z-[1] hover:shadow-lg transition-all duration-150 ease-in-out"
    >
      <div className="w-full flex flex-col items-center justify-center p-2 sm:p-3 sm:gap-y-4 gap-y-2  overflow-hidden">
        {/* Image Container */}
        <div
          className="w-[95%] sm:w-[85%] aspect-square relative flex flex-col items-center justify-center 
          group-hover:scale-[1.15]  transition-transform duration-200 ease-out"
        >
          {(isAll || imagesSRC) && (
            <Image
              src={isAll ? IMGS.AllProducts : imagesSRC || ""}
              alt={text || "Category image"}
              fill
              className="object-cover w-full h-full rounded-md transition-opacity duration-300 ease-in-out 
                "
              sizes="(max-width: 640px) 75px, (max-width: 1024px) 120px, 150px"
              // priority={true}
              placeholder="blur"
              blurDataURL="/placeholder.jpg"
            />
          )}
        </div>

        {/* Text */}
        <h3
          className="line-clamp-2 text-[13px] sm:text-[15px] h-10 sm:h-12  text-center max-w-full 
          group-hover:text-primary transition-colors duration-200 font-semibold flex items-start capitalize"
        >
          {text}
        </h3>
      </div>
    </LocalizedClientLink>
  )
}

export default CategoryItem
