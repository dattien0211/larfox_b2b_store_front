import React from "react"

import { IconProps } from "types/icon"

const FaceBook: React.FC<IconProps> = ({
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
      <path
        d="M9.33464 8.9987H11.0013L11.668 6.33203H9.33464V4.9987C9.33464 4.31203 9.33464 3.66536 10.668 3.66536H11.668V1.42536C11.4506 1.3967 10.63 1.33203 9.7633 1.33203C7.9533 1.33203 6.66797 2.4367 6.66797 4.46536V6.33203H4.66797V8.9987H6.66797V14.6654H9.33464V8.9987Z"
        fill={color}
      />
    </svg>
  )
}

export default FaceBook
