"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { useState, useEffect } from "react"
import clsx from "clsx"
import { ProductTag } from "types/global"

const TagFilter = ({ productTags }: { productTags?: ProductTag[] }) => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [selectedTags, setSelectedTags] = useState<string[]>([])

  useEffect(() => {
    const tags = searchParams.getAll("tag_id")
    setSelectedTags(tags)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams])

  const handleOnclick = (id: string) => {
    const currentParams = new URLSearchParams(searchParams.toString())

    // Toggle the selected tag
    if (selectedTags.includes(id)) {
      // Remove the tag if it is already selected
      const updatedTags = selectedTags.filter((tag) => tag !== id)
      currentParams.delete("tag_id") // Clear existing tag_id params
      updatedTags.forEach((tag) => currentParams.append("tag_id", tag)) // Re-add updated tags
    } else {
      // Add the tag if it is not selected
      currentParams.append("tag_id", id)
    }

    // Push the updated URL
    router.push(`?${currentParams.toString()}`, { scroll: false })
  }

  return (
    <>
      <h2 className="text-lg sm:text-xl font-semibold border-b border-gray-200 py-4 mt-4 sm:mt-8">
        Tags
      </h2>
      <div className="flex flex-wrap mt-4 sm:mt-8 gap-2">
        {productTags &&
          productTags.length > 0 &&
          productTags
            .slice() // Create a shallow copy to avoid mutating the original array
            .sort((a, b) => a.value.length - b.value.length) // Sort by length of name
            .map((tag) => (
              <div
                className={clsx(
                  "px-2 py-1 bg-grey-20 cursor-pointer hover:bg-primary hover:text-white transition",
                  {
                    "bg-primary border-primary": selectedTags.includes(tag.id),
                  }
                )}
                key={tag.id}
                onClick={() => handleOnclick(tag.id)}
              >
                <span
                  className={clsx("text-nowrap text-xs sm:text-sm", {
                    "text-white": selectedTags.includes(tag.id),
                  })}
                >
                  {tag.value}
                </span>
              </div>
            ))}
      </div>
    </>
  )
}

export default TagFilter
