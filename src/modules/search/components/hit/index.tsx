import { Container, Text } from "@medusajs/ui"

import Thumbnail from "@modules/products/components/thumbnail"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { HttpTypes } from "@medusajs/types"
import { Dispatch, SetStateAction } from "react"

export type ProductHit = {
  id: string
  title: string
  handle: string
  description: string | null
  thumbnail: string | null
  variants: HttpTypes.StoreProductVariant[]
  collection_handle: string | null
  collection_id: string | null
}

type HitProps = {
  hit: ProductHit
  setShow: Dispatch<SetStateAction<boolean>>
}

const Hit = ({ hit, setShow }: HitProps) => {
  return (
    <LocalizedClientLink
      onClick={() => setShow(false)}
      href={`/san-pham/${hit.handle}`}
      data-testid="search-result"
    >
      <Container
        key={hit.id}
        className="group flex sm:flex-col gap-4 sm:gap-2 w-full p-2 shadow-elevation-card-rest hover:shadow-elevation-card-hover items-center sm:justify-center"
      >
        <Thumbnail
          thumbnail={hit.thumbnail}
          size="square"
          className="group h-14 w-14 sm:h-full sm:w-full"
        />
        <div className="flex flex-col">
          <Text
            className="text-ui-fg-subtle sm:h-[42px] line-clamp-1 sm:line-clamp-2 group-hover:text-primary"
            data-testid="search-result-title"
          >
            {hit.title}
          </Text>
        </div>
      </Container>
    </LocalizedClientLink>
  )
}

export default Hit
