import { useState, useCallback, useEffect } from "react"
import { updateLineItem } from "@lib/data/cart"
import { HttpTypes } from "@medusajs/types"
import { debounce } from "lodash"

interface QuantityItemProps {
  item: HttpTypes.StoreCartLineItem
}

const QuantityItem = ({ item }: QuantityItemProps) => {
  const [quantity, setQuantity] = useState(item.quantity)
  const [updating, setUpdating] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // Create a debounced function outside useCallback
  const debouncedUpdate = debounce(async (newQuantity: number) => {
    setError(null)
    setUpdating(true)

    try {
      await updateLineItem({
        lineId: item.id,
        quantity: newQuantity,
      })
    } catch (err: any) {
      setError(err.message || "An error occurred.")
    } finally {
      setUpdating(false)
    }
  }, 300) // 300ms debounce delay

  // Cleanup the debounce function on unmount
  useEffect(() => {
    return () => {
      debouncedUpdate.cancel()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const changeQuantity = (newQuantity: number) => {
    if (newQuantity < 1) return // Prevent quantity from going below 1

    setQuantity(newQuantity) // Update the local state immediately
    debouncedUpdate(newQuantity) // Call the debounced function
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10)
    if (!isNaN(value) && value >= 1) {
      changeQuantity(value)
    }
  }

  return (
    <div
      className="flex bg-grey-10 h-10"
      data-testid="cart-item-quantity"
      data-value={quantity}
    >
      <button
        className=" text-center text-lg disabled:opacity-50 h-full pl-4 pr-2"
        onClick={() => changeQuantity(quantity - 1)}
        disabled={quantity <= 1}
      >
        -
      </button>
      <input
        className="bg-grey-10 w-14 text-center border-none outline-none focus:outline-none cursor-pointer "
        type="text"
        value={quantity}
        onChange={handleInputChange}
        min="1"
        disabled={updating || !!error}
      />
      <button
        className=" text-center  text-lg disabled:opacity-50 h-full pr-4 pl-2"
        onClick={() => changeQuantity(quantity + 1)}
      >
        +
      </button>
    </div>
  )
}

export default QuantityItem
