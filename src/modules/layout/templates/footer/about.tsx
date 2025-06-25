import Icons from "@modules/common/icons"

export default async function FooterAbout() {
  const { RightArrow } = Icons

  return (
    <div className="">
      <h4 className="font-bold mb-4">Term of Use</h4>
      <ul className="space-y-2 text-gray-400">
        <li className="hover:text-white cursor-pointer">Service Agreement</li>
        <li className="hover:text-white cursor-pointer">Acceptable Use</li>
        <li className="hover:text-white cursor-pointer">Account Terms</li>
      </ul>
    </div>
  )
}
