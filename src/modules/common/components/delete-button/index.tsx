import { deleteLineItem } from "@lib/data/cart"
import { Spinner } from "@medusajs/icons"
import { clx } from "@medusajs/ui"
import { useState } from "react"
import Icons from "@modules/common/icons"

const DeleteButton = ({
  id,
  children,
  className,
}: {
  id: string
  children?: React.ReactNode
  className?: string
}) => {
  const { Trash } = Icons
  const [isDeleting, setIsDeleting] = useState(false)

  const handleDelete = async (id: string) => {
    setIsDeleting(true)
    await deleteLineItem(id).catch((err) => {
      setIsDeleting(false)
    })
  }

  return (
    <div
      className={clx(
        "flex items-center justify-between text-small-regular",
        className
      )}
    >
      <button
        className="flex gap-x-1 text-ui-fg-subtle hover:text-ui-fg-base cursor-pointer"
        onClick={() => handleDelete(id)}
      >
        {isDeleting ? (
          <Spinner className="animate-spin" />
        ) : (
          <Trash scale={2} />
        )}
        <span>{children}</span>
      </button>
    </div>
  )
}

export default DeleteButton
