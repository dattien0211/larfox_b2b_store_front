import { Text, clx } from "@medusajs/ui"
import { VariantPrice } from "types/global"

export default async function PreviewPrice({ price }: { price: VariantPrice }) {
  if (!price) {
    return null
  }

  return (
    <>
      <Text
        className={clx("text-primary text-sm sm:text-xl font-bold", {
          "text-ui-fg-interactive": price.price_type === "sale",
        })}
        data-testid="price"
      >
        {price.calculated_price}
      </Text>
      {price.price_type === "sale" && (
        <Text
          className="text-black-20 line-through text-xs sm:text-base ml-2 sm:ml-4 "
          data-testid="original-price"
        >
          {price.original_price}
        </Text>
      )}
    </>
  )
}
