import React from "react"

import { IconProps } from "types/icon"

const Clock: React.FC<IconProps> = ({
  size = "16",
  color = "currentColor",
  ...attributes
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...attributes}
    >
      <path
        d="M8 2.5C4.6875 2.5 2 5.1875 2 8.5C2 11.8125 4.6875 14.5 8 14.5C11.3125 14.5 14 11.8125 14 8.5C14 5.1875 11.3125 2.5 8 2.5Z"
        stroke={color}
        strokeMiterlimit="10"
      />
      <path
        d="M8 4.5V9H11"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Clock
