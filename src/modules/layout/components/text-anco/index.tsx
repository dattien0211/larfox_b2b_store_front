interface ListProductsProps {
  backgroundText?: string
  subTitle?: string
  title?: string
  description?: string
  classBGText?: string
  classDesText?: string
}

const TextAnco: React.FC<ListProductsProps> = ({
  backgroundText,
  subTitle,
  title,
  description,
  classBGText,
  classDesText,
}) => {
  return (
    <>
      <div className="content-container relative">
        <div
          className={`${classBGText} text-nowrap absolute text-grey-15 font-bold font-times text-60px sm:text-80px  md:text-110px lg:text-140px  left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-10`}
        >
          {backgroundText}
        </div>
        <div className="flex flex-col items-center relative z-20">
          <h2 className="italic text-primary font-times font-bold text-lg sm:text-xl lg:text-2xl">
            {title}
          </h2>
          <h1 className="sm:text-3xl text-2xl   md:text-4xl md:text-44px font-bold font-times sm:mt-2">
            {subTitle}
          </h1>
        </div>
      </div>
      {description && (
        <h3
          className={`mt-2 sm:mt-4 text-base md:text-xl text-center sm:px-0 px-4 + ${classDesText}`}
        >
          {description}
        </h3>
      )}
    </>
  )
}

export default TextAnco
