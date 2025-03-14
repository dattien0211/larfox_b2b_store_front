const ProductItemSkeleton = () => {
  return (
    <div className="w-full flex flex-col border border-primary rounded-md shadow-sm animate-pulse">
      <div className="p-2 relative">
        <div className="bg-gray-300 w-full h-52 rounded-md" />
      </div>

      <div className="bg-primary h-[1px] w-full" />

      <div className="p-2">
        <div className="h-5 bg-gray-300 rounded-md w-3/4 mb-2" />
        <div className="h-5 bg-gray-300 rounded-md w-1/2 mb-2" />

        <div className="flex flex-row justify-between items-center mt-2">
          <div className="h-5 bg-gray-300 rounded-md w-1/4" />
          <div className="h-5 bg-gray-300 rounded-md w-1/4" />
        </div>

        <div className="mt-2 h-8 bg-gray-300 rounded-md w-full" />
      </div>
    </div>
  )
}

export default ProductItemSkeleton
