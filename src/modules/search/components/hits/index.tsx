import { clx } from "@medusajs/ui"
import React from "react"
import {
  UseHitsProps,
  useHits,
  useSearchBox,
} from "react-instantsearch-hooks-web"

import { ProductHit } from "../hit"
import ShowAll from "../show-all"
import { tree } from "next/dist/build/templates/app-page"

type HitsProps<THit> = React.ComponentProps<"div"> &
  UseHitsProps & {
    hitComponent: (props: { hit: THit }) => JSX.Element
  }

const Hits = ({
  hitComponent: Hit,
  className,
  ...props
}: HitsProps<ProductHit>) => {
  const { query } = useSearchBox()
  const { hits } = useHits(props)
  const width = typeof window !== "undefined" ? window.innerWidth : 0

  return (
    <div
      className={clx(
        "transition-[height,max-height,opacity] duration-300 ease-in-out sm:overflow-hidden w-full sm:w-[50vw] mb-1 p-px",
        className,
        {
          "max-h-full opacity-100": !!query,
          "max-h-0 opacity-0": !query && !hits.length,
        }
      )}
    >
      <div
        className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 xlarge:grid-cols-5 gap-4 mb-4"
        data-testid="search-results"
      >
        {hits.slice(0, width >= 1680 ? 15 : 8).map((hit, index) => (
          <li
            key={index}
            className={clx("list-none", {
              "hidden sm:block": index > 2,
            })}
          >
            <Hit hit={hit as unknown as ProductHit} />
          </li>
        ))}
      </div>
      <ShowAll />
    </div>
  )
}

export default Hits
