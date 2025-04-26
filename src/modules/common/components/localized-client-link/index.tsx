"use client"

import Link from "next/link"
import { useParams } from "next/navigation"
import React from "react"

/**
 * Use this component to create a Next.js `<Link />` that persists the current country code in the URL,
 * without having to explicitly pass it as a prop.
 */
const LocalizedClientLink = ({
  children,
  href,
  prefetch = false,
  ...props
}: {
  children?: React.ReactNode
  href: string
  className?: string
  onClick?: () => void
  passHref?: true
  prefetch?: boolean
  [x: string]: any
}) => {
  const { countryCode } = useParams()

  return (
    <Link href={`/${countryCode}${href}`} prefetch={prefetch} {...props}>
      {children}
    </Link>
  )
}

export default LocalizedClientLink
