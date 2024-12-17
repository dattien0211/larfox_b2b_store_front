import React from "react"

import { IconProps } from "types/icon"

const Star: React.FC<IconProps> = ({
  size = "14",
  color = "currentColor",
  ...attributes
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...attributes}
    >
      <path
        d="M6.99937 10.0761L9.42021 11.5403C9.86354 11.8086 10.406 11.412 10.2894 10.9103L9.64771 8.15698L11.7885 6.30198C12.1794 5.96365 11.9694 5.32198 11.456 5.28115L8.63854 5.04198L7.53604 2.44031C7.33771 1.96781 6.66104 1.96781 6.46271 2.44031L5.3602 5.03615L2.5427 5.27531C2.02937 5.31615 1.81937 5.95781 2.2102 6.29615L4.35104 8.15115L3.70937 10.9045C3.5927 11.4061 4.1352 11.8028 4.57854 11.5345L6.99937 10.0761Z"
        fill={color}
      />
    </svg>
  )
}

export default Star
