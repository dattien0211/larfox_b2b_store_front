import React from "react"

import { IconProps } from "types/icon"

const RightArrow: React.FC<IconProps> = ({
  size = "12",
  color = "currentColor",
  ...attributes
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...attributes}
    >
      <g clipPath="url(#clip0_2023_9844)">
        <path
          d="M9.12735 6.42826L3.731 11.8228C3.49422 12.059 3.11058 12.059 2.8732 11.8228C2.63641 11.5866 2.63641 11.203 2.8732 10.9668L7.84151 6.00027L2.87379 1.03376C2.63701 0.797565 2.63701 0.413931 2.87379 0.177143C3.11058 -0.0590475 3.49481 -0.0590475 3.7316 0.177143L9.12795 5.57164C9.3611 5.80539 9.3611 6.19506 9.12735 6.42826Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_2023_9844">
          <rect
            width="12"
            height="12"
            fill="white"
            transform="matrix(-1 0 0 1 12 0)"
          />
        </clipPath>
      </defs>
    </svg>
  )
}

export default RightArrow
