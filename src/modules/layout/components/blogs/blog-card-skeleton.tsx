import clsx from "clsx"

const BlogCardSkeleton = ({
  isRow = false,
  isSmall = false,
}: {
  isRow?: boolean
  isSmall?: boolean
}) => {
  return (
    <div
      className={clsx(
        "w-full shadow-lg relative h-[220px] md:h-[380px] rounded-lg overflow-hidden bg-gray-200 animate-pulse",
        isRow ? "!flex-row" : ""
      )}
    >
      {/* Image Placeholder */}
      <div className="absolute inset-0 bg-gray-200"></div>

      {/* Text Skeleton */}
      <section className="absolute bottom-0 left-0 z-10 w-full rounded-lg">
        <div
          className={clsx(
            "px-2 shadow-inner opacity-50 flex items-center justify-center h-12 md:h-24",
            isSmall ? "items-center h-16 md-20" : "items-end h-20 md:h-24"
          )}
          style={{
            background:
              "linear-gradient(180deg, #000000 30.46%, rgba(0, 0, 0, 0) 100%)",
          }}
        >
          <div
            className={clsx(
              "h-4 bg-gray-400 rounded w-3/4 animate-pulse",
              isSmall ? "sm:h-5" : "sm:h-6"
            )}
          ></div>
        </div>
      </section>
    </div>
  )
}

export default BlogCardSkeleton
