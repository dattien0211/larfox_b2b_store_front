import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Icons from "@modules/common/icons"

export default async function TopNav() {
  const { FaceBook, Twitter, Mail, Skype, Clock, Location } = Icons

  return (
    <div className="h-10 w-full bg-grey-10">
      <div className="content-container h-full">
        <div className="w-full flex items-center justify-between h-full">
          <div className="flex gap-x-4 text-grey-45">
            <LocalizedClientLink
              href="#"
              className="flex items-center justify-center"
            >
              <FaceBook />
            </LocalizedClientLink>
            <LocalizedClientLink
              href="#"
              className="flex items-center justify-center"
            >
              <Twitter />
            </LocalizedClientLink>
            <LocalizedClientLink
              href="#"
              className="flex items-center justify-center"
            >
              <Skype />
            </LocalizedClientLink>
          </div>
          <div className="flex gap-x-4  text-grey-45">
            <div className="flex items-center justify-center">
              <Clock />
              <p className="ml-2 text-xs">Monday 10:00</p>
            </div>
            <div className="flex items-center justify-center">
              <Location />
              <p className="ml-2 text-xs">180 Tran Hung Dao, Ha Noi</p>
            </div>
            <div className="flex items-center justify-center">
              <Mail />
              <p className="ml-2 text-xs">ancoshop.support@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
