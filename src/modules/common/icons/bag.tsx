import React from "react"

import { IconProps } from "types/icon"

const Bag: React.FC<IconProps> = ({
  size = "24",
  color = "currentColor",
  ...attributes
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...attributes}
    >
      <path
        d="M8 8V7C8 5.93913 8.42143 4.92172 9.17157 4.17157C9.92172 3.42143 10.9391 3 12 3C13.0609 3 14.0783 3.42143 14.8284 4.17157C15.5786 4.92172 16 5.93913 16 7V8M15 14V12M9 14V12"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M4 12C4 10.114 4 9.172 4.586 8.586C5.172 8 6.114 8 8 8H16C17.886 8 18.828 8 19.414 8.586C20 9.172 20 10.114 20 12V13C20 16.771 20 18.657 18.828 19.828C17.656 20.999 15.771 21 12 21C8.229 21 6.343 21 5.172 19.828C4.001 18.656 4 16.771 4 13V12Z"
        stroke={color}
        strokeWidth="2"
      />
    </svg>
  )
}

export default Bag
