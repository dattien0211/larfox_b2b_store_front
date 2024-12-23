import { useState, useEffect } from "react"
import { updateLineItem } from "@lib/data/cart"
import { debounce } from "lodash"

interface QuantityItemProps {
  itemQuantity: number
  itemId: string
  setUpdating: React.Dispatch<React.SetStateAction<boolean>> // Accept setUpdating from parent
  setError: React.Dispatch<React.SetStateAction<string | null>>
  isDisabled?: boolean
}

const QuantityItem = ({
  itemQuantity,
  itemId,
  setUpdating,
  setError,
  isDisabled,
}: QuantityItemProps) => {
  const [quantity, setQuantity] = useState(itemQuantity)

  const debouncedUpdate = debounce(async (newQuantity: number) => {
    setError(null)
    setUpdating(true)

    try {
      await updateLineItem({
        lineId: itemId,
        quantity: newQuantity,
      })
    } catch (err: any) {
      setError(err.message || "An error occurred.")
    } finally {
      setUpdating(false)
    }
  }, 300)

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
    } else if (e.target.value === "") {
      setQuantity(0) // Handle empty input (optional based on requirements)
    }
  }

  return (
    <div
      className="flex bg-grey-10 h-full"
      data-testid="cart-item-quantity"
      data-value={quantity}
    >
      <button
        className=" text-center text-lg disabled:opacity-50 h-full pl-4 pr-2"
        onClick={() => changeQuantity(quantity - 1)}
        disabled={quantity <= 1 || isDisabled}
      >
        -
      </button>
      <input
        disabled={isDisabled}
        className="bg-grey-10 w-14 text-center border-none outline-none focus:outline-none cursor-pointer "
        type="text"
        value={quantity}
        onChange={handleInputChange}
        min="1"
      />
      <button
        className=" text-center  text-lg disabled:opacity-50 h-full pr-4 pl-2"
        onClick={() => changeQuantity(quantity + 1)}
        disabled={isDisabled}
      >
        +
      </button>
    </div>
  )
}

export default QuantityItem
