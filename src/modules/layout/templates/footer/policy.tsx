import Icons from "@modules/common/icons"

export default async function FooterPolicy() {
  const { RightArrow } = Icons

  return (
    <div className="">
      <h4 className="font-bold mb-4">Legal Terms</h4>
      <ul className="space-y-2 text-gray-400">
        <li className="hover:text-white cursor-pointer">Liability</li>
        <li className="hover:text-white cursor-pointer">Disputes</li>
        <li className="hover:text-white cursor-pointer">
          Intellectual Property
        </li>
      </ul>
    </div>
  )
}
