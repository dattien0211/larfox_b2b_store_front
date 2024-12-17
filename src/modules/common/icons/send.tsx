import React from "react"

import { IconProps } from "types/icon"

const Send: React.FC<IconProps> = ({
  size = "22",
  color = "currentColor",
  ...attributes
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...attributes}
    >
      <path
        d="M10.5 11.5001L14 8.0001M20.048 2.0531C17.87 -0.292899 1.48601 5.4531 1.50001 7.5501C1.51501 9.9291 7.89801 10.6601 9.66701 11.1571C10.731 11.4561 11.016 11.7611 11.261 12.8771C12.372 17.9291 12.931 20.4431 14.201 20.4991C16.228 20.5891 22.173 4.3421 20.048 2.0531Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Send
