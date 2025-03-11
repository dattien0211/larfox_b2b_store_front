import React from "react"
import { Heading } from "@medusajs/ui"
import { HttpTypes } from "@medusajs/types"
import "react-quill/dist/quill.snow.css"

const ProductDescription = ({ description }: { description?: string }) => {
  if (!description) return null

  return (
    <div className="mt-6 md:mt-14 w-full">
      <Heading level="h1" className="text-primary text-xl sm:text-2xl ">
        Mô tả sản phẩm
      </Heading>
      <div className="border border-grey-20 sm:pt-4 md:pt-6 sm:pb-8 md:pb-12 sm:px-8 md:px-10 mt-6 sm:mt-10 p-4">
        <div
          className="ql-editor rich-text-content"
          dangerouslySetInnerHTML={{
            __html: description
              ? description.replace(/\n/g, "<br />")
              : "Mô tả sản phẩm đang được cập nhật.",
          }}
        ></div>
      </div>
    </div>
  )
}

export default ProductDescription
