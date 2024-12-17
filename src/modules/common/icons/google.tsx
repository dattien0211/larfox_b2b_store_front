import React from "react"

import { IconProps } from "types/icon"

const Google: React.FC<IconProps> = ({
  size = "14",
  color = "currentColor",
  ...attributes
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 14 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...attributes}
    >
      <g clipPath="url(#clip0_2023_9801)">
        <path
          d="M11.7919 4.84766H10.4466V5.91898H9.10742V6.99523H10.4466V8.06656H11.7919V6.99523H13.131V5.91898H11.7919V4.84766Z"
          fill={color}
        />
        <path
          d="M4.36076 10.4769C6.72956 10.4769 8.30311 8.8471 8.30311 6.54666C8.30311 6.28325 8.2752 6.07992 8.23634 5.87713H4.36131V7.26018H6.69125C6.59602 7.84763 5.98575 8.99463 4.36131 8.99463C2.96181 8.99463 1.81901 7.85836 1.81901 6.45331C1.81901 5.04826 2.96126 3.91145 4.36131 3.91145C5.16204 3.91145 5.69403 4.24622 5.9967 4.53163L7.11104 3.48334C6.39351 2.82508 5.46963 2.42969 4.36076 2.42969C2.09267 2.42969 0.255859 4.23013 0.255859 6.45331C0.255859 8.6765 2.09267 10.4769 4.36076 10.4769Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_2023_9801">
          <rect
            width="12.8756"
            height="12.8756"
            fill={color}
            transform="translate(0.255859 0.015625)"
          />
        </clipPath>
      </defs>
    </svg>
  )
}

export default Google
