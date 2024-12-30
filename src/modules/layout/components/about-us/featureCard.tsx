import Icons from "@modules/common/icons"

interface FeatureCardProps {
  icon: JSX.Element
  title: string
  description: string
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
}) => (
  <div className="h-full w-[47%] md:w-1/5 flex flex-col items-center justify-start md:justify-center gap-y-2 md:gap-y-4 ">
    <div className="w-[62px] h-[62px] md:w-[70px] md:h-[70px] lg:w-[84px] lg:h-[84px] rounded-full bg-orang-25 flex items-center justify-center">
      {icon}
    </div>
    <h1 className="font-manrope-bold font-bold text-sm md:text-base text-center md:h-12 lg:h-fit">
      {title}
    </h1>
    <p className="text-center text-sm md:text-base h-[60px]  md:h-24">
      {description}
    </p>
  </div>
)

export default FeatureCard
