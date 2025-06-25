import Icons from "@modules/common/icons"

export default async function FooterOfferForm() {
  const { Send } = Icons

  return (
    <div className="">
      <h4 className="font-bold mb-4">Help Center</h4>
      <ul className="space-y-2 text-gray-400">
        <li className="hover:text-white cursor-pointer">Contact Support</li>
        <li className="hover:text-white cursor-pointer">FAQ</li>
      </ul>
    </div>
  )
}
