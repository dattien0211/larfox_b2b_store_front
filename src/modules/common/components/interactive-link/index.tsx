import { ArrowUpRightMini } from "@medusajs/icons"
import { Text } from "@medusajs/ui"
import LocalizedClientLink from "../localized-client-link"

type InteractiveLinkProps = {
  href: string
  children?: React.ReactNode
  onClick?: () => void
}

const InteractiveLink = ({
  href,
  children,
  onClick,
  ...props
}: InteractiveLinkProps) => {
  return (
    <LocalizedClientLink
      className="flex gap-x-1 items-center group !text-primary"
      href={href}
      onClick={onClick}
      {...props}
    >
      <Text className="text-ui-fg-interactive text-base !text-primary capitalize font-semibold">
        {children}
      </Text>
      <ArrowUpRightMini
        className="group-hover:rotate-45 ease-in-out duration-150"
        color="#b38439"
      />
    </LocalizedClientLink>
  )
}

export default InteractiveLink
