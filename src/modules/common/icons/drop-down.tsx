import React from "react"

import { IconProps } from "types/icon"

const DropDown: React.FC<IconProps> = ({
  size = "12",
  color = "currentColor",
  ...attributes
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 12 7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...attributes}
    >
      <path
        d="M1.46289 1.13576L6.19432 5.86719L10.9257 1.13576"
        stroke={color}
        strokeWidth="1.472"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default DropDown
