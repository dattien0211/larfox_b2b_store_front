import React from "react"

import { IconProps } from "types/icon"

const UpArrow: React.FC<IconProps> = ({
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
        d="M10.4609 5.86424L5.72951 1.13281L0.998081 5.86424"
        stroke={color}
        strokeWidth="1.472"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default UpArrow
