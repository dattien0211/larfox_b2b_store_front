import React from "react"

import { IconProps } from "types/icon"

const Verified: React.FC<IconProps> = ({
  size = "16",
  color = "currentColor",
  ...attributes
}) => {
  return (
    <svg
      width="16"
      height="17"
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...attributes}
    >
      <path
        d="M5.73268 15.1289L4.46602 12.9956L2.06602 12.4622L2.29935 9.99557L0.666016 8.12891L2.29935 6.26224L2.06602 3.79557L4.46602 3.26224L5.73268 1.12891L7.99935 2.09557L10.266 1.12891L11.5327 3.26224L13.9327 3.79557L13.6993 6.26224L15.3327 8.12891L13.6993 9.99557L13.9327 12.4622L11.5327 12.9956L10.266 15.1289L7.99935 14.1622L5.73268 15.1289ZM7.29935 10.4956L11.066 6.72891L10.1327 5.76224L7.29935 8.59557L5.86602 7.19557L4.93268 8.12891L7.29935 10.4956Z"
        fill={color}
      />
    </svg>
  )
}

export default Verified
