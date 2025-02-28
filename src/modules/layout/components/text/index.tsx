interface ListProductsProps {
  subTitle?: string
  title?: string
}

const Text: React.FC<ListProductsProps> = ({ subTitle, title }) => {
  return (
    <>
      <div className="content-container relative">
        <div className="flex flex-col items-center relative z-20">
          <h2 className="italic text-primary font-times font-bold text-lg sm:text-xl lg:text-2xl">
            {title}
          </h2>
          <h1 className="sm:text-3xl text-2xl md:text-4xl md:text-44px font-bold font-times sm:mt-2">
            {subTitle}
          </h1>
        </div>
      </div>
    </>
  )
}

export default Text
