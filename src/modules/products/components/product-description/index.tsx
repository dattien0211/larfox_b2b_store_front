"use client"

import React from "react"
import { Heading } from "@medusajs/ui"
import "react-quill/dist/quill.snow.css"

const ProductDescription = ({ description }: { description?: string }) => {
  if (!description) return null

  return (
    <div className="w-full" data-testid="product-description">
      <Heading
        level="h1"
        className="text-primary text-xl sm:text-28 capitalize"
      >
        Mô tả sản phẩm
      </Heading>
      <div className="border border-grey-20 px-2 pt-2 pb-6 sm:px-4 sm:pt-4 sm:pb-12 sm:mt-4 mt-2">
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
