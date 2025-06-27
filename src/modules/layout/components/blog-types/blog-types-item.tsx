import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Image from "next/image"

import { faUniversity, faChartLine, faLightbulb, faArrowTrendUp } from "@fortawesome/free-solid-svg-icons"

interface BlogTypesItemProp {
  thumbnail?: string
  title: string
  link?: string
  index?: number // truyền index để xác định icon/màu
}

const bgColors = [
  "bg-blue-100",
  "bg-green-100",
  "bg-yellow-100",
  "bg-purple-100"
]
const iconColors = [
  "text-blue-600",
  "text-green-600",
  "text-yellow-600",
  "text-purple-600"
]
const icons = [faUniversity, faChartLine, faLightbulb, faArrowTrendUp]

const BlogTypesItem: React.FC<BlogTypesItemProp> = ({
  thumbnail,
  title,
  link = "",
  index = 0
}) => {
  return (
    <LocalizedClientLink href={link}>
      <div className={`${bgColors[index % 4]} py-1 px-4 rounded-lg flex flex-col justify-center items-center h-28 text-center`}>
        {thumbnail ? (
          <Image
            src={thumbnail}
            alt={"Search"}
            width={50}
            height={50}
            className="mx-auto mb-2"
          />
        ) : (
          <FontAwesomeIcon icon={icons[index % 4]} className={`text-2xl ${iconColors[index % 4]} mb-2`} />
        )}
        <p className="font-medium mt-2">{title}</p>
      </div>
    </LocalizedClientLink>
  )
}

export default BlogTypesItem
