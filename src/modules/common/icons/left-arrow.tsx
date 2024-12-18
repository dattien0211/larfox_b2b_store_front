import React from "react"

import { IconProps } from "types/icon"

const LeftArrow: React.FC<IconProps> = ({
  size = "16",
  color = "currentColor",
  ...attributes
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...attributes}
    >
      <g clipPath="url(#clip0_138_5965)">
        <path
          d="M6.00732 8.44695L12.3282 2.12597C12.5938 1.86034 12.5938 1.42969 12.3282 1.16406C12.0625 0.89843 11.6319 0.89843 11.3663 1.16411L4.56448 7.96606C4.43688 8.09357 4.36523 8.26656 4.36523 8.44695C4.36523 8.62737 4.43692 8.80037 4.56448 8.92792L11.3663 15.7295C11.499 15.8623 11.6731 15.9287 11.8472 15.9287C12.0213 15.9287 12.1953 15.8623 12.3282 15.7295C12.5938 15.4638 12.5938 15.0332 12.3282 14.7676L6.00732 8.44695Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_138_5965">
          <rect
            width="14.9639"
            height="14.9639"
            fill={color}
            transform="translate(0.964844 0.964844)"
          />
        </clipPath>
      </defs>
    </svg>
  )
}

export default LeftArrow
