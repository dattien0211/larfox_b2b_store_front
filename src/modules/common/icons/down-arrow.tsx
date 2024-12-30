import React from "react"

import { IconProps } from "types/icon"

const DownArrow: React.FC<IconProps> = ({
  size = "12",
  color = "currentColor",
  ...attributes
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 12 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...attributes}
    >
      <path
        d="M1 1.63576L5.73143 6.36719L10.4629 1.63576"
        stroke={color}
        strokeWidth="1.472"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default DownArrow
