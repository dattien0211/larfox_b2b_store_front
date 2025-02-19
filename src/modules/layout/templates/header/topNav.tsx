"use client"

import React, { useState, useEffect } from "react"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import moment from "moment-timezone"
import Icons from "@modules/common/icons"

moment.locale("vi")

export default function TopNav() {
  const { FaceBook, Twitter, Mail, Skype, Clock, Location } = Icons

  const [vietnameseTime, setVietnameseTime] = useState("")

  // Function to format the time
  const updateTime = () => {
    const formattedTime = moment.tz("Asia/Ho_Chi_Minh").format("dddd HH:mm")
    const timeInVietnamese = formattedTime
      .replace("Monday", "Thứ Hai")
      .replace("Tuesday", "Thứ Ba")
      .replace("Wednesday", "Thứ Tư")
      .replace("Thursday", "Thứ Năm")
      .replace("Friday", "Thứ Sáu")
      .replace("Saturday", "Thứ Bảy")
      .replace("Sunday", "Chủ Nhật")
    setVietnameseTime(timeInVietnamese)
  }

  // Set the interval to update time every minute
  useEffect(() => {
    updateTime() // Set the initial time
    const interval = setInterval(updateTime, 60000) // Update every 60 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="sm:block hidden h-10 w-full bg-grey-10">
      <div className="content-container h-full">
        <div className="w-full flex items-center justify-between h-full">
          <div className="flex gap-x-4 text-grey-45">
            <LocalizedClientLink
              href="/"
              className="flex items-center justify-center"
            >
              <FaceBook />
            </LocalizedClientLink>
            <LocalizedClientLink
              href="/"
              className="flex items-center justify-center"
            >
              <Twitter />
            </LocalizedClientLink>
            <LocalizedClientLink
              href="/"
              className="flex items-center justify-center"
            >
              <Skype />
            </LocalizedClientLink>
          </div>
          <div className="flex gap-x-4  text-grey-45">
            <div className="flex items-center justify-center">
              <Clock />
              <p className="ml-2 text-xs">{vietnameseTime}</p>
            </div>
            <div className="flex items-center justify-center">
              <Location />
              <p className="ml-2 text-xs">180 Trần Hưng Đạo, Hà Nội</p>
            </div>
            <div className="flex items-center justify-center">
              <Mail />
              <p className="ml-2 text-xs">bongluashop.support@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
