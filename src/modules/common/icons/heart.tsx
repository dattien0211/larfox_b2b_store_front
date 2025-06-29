import React from "react"

import { IconProps } from "types/icon"

const Heart: React.FC<IconProps> = ({
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
        d="M12 8C12 8 12 8 11.24 7C10.36 5.84 9.06 5 7.5 5C5.01 5 3 7.01 3 9.5C3 10.43 3.28 11.29 3.76 12C4.57 13.21 12 21 12 21M12 8C12 8 12 8 12.76 7C13.64 5.84 14.94 5 16.5 5C18.99 5 21 7.01 21 9.5C21 10.43 20.72 11.29 20.24 12C19.43 13.21 12 21 12 21"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Heart
