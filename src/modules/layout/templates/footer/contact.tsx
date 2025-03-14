import storeConfig from "@constants/storeConfig"

export default async function FooterContact() {
  return (
    <div className="sm:col-span-6 lg:col-span-3">
      <h1 className="font-bold text-xl sm:text-2xl font-times">Liên hệ</h1>
      <div className="mt-2 sm:mt-8  space-y-1 sm:space-y-2 text-sm sm:text-base">
        <p>Địa chỉ: {storeConfig.STORE_ADDRESS}</p>
        <p>{storeConfig.STORE_PHONE}</p>
        <p>{storeConfig.STORE_EMAIL}</p>
      </div>
    </div>
  )
}
