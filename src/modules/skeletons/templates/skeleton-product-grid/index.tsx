import repeat from "@lib/util/repeat"
import SkeletonProductPreview from "@modules/skeletons/components/skeleton-product-preview"

const SkeletonProductGrid = () => {
  return (
    <ul
      className="gap-2 sm:gap-4 px-1 py-2 bg-white lg:p-4 rounded-lg shadow-lg"
      data-testid="products-list-loader"
    >
      {repeat(3).map((index) => (
        <li key={index}>
          <SkeletonProductPreview />
        </li>
      ))}
    </ul>
  )
}

export default SkeletonProductGrid
