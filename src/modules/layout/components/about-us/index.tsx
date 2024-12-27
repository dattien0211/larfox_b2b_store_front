import Icons from "@modules/common/icons"
import FeatureCard from "./featureCard"

export default function AboutUs() {
  const { Gear, StarBadge, People, Inventory, Shield } = Icons

  const features = [
    {
      icon: <Gear color="#FFFFFF" />,
      title: "Chiết khấu hấp dẫn",
      description: "Chiết khấu cáo dành cho doanh nghiệp",
    },
    {
      icon: <StarBadge color="#FFFFFF" />,
      title: "Thương hiệu uy tín",
      description: "Nói không với hàng giả hàng nhái kém chất lượng",
    },
    {
      icon: <People color="#FFFFFF" />,
      title: "Chất lượng vượt trội",
      description: "Cam kết cung cấp sản phẩm và dịch vụ chất lượng cao.",
    },
    {
      icon: <Inventory color="#FFFFFF" />,
      title: "Cam kết chính hãng",
      description: "Cung cấp các sản phẩm chính hãng, nguồn gốc rõ ràng",
    },
    {
      icon: <Shield color="#FFFFFF" />,
      title: "An toàn tuyệt đối",
      description: "Sản phẩm hoàn toàn an toàn, đã được kiểm tra kỹ lưỡng",
    },
  ]

  return (
    <div className="content-container flex items-center justify-center flex-wrap md:flex-nowrap gap-y-8 sm:gap-x-8 md:gap-x-4 mt-12 md:mt-20">
      {features.map((feature, index) => (
        <FeatureCard
          key={index}
          icon={feature.icon}
          title={feature.title}
          description={feature.description}
        />
      ))}
    </div>
  )
}
