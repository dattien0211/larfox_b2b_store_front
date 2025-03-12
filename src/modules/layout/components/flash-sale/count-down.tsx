"use client"

import { useState, useEffect } from "react"

const CountdownTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<number>(3 * 60 * 60) // 1 hour in seconds

  useEffect(() => {
    if (timeLeft <= 0) return

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1)
    }, 1000)

    return () => clearInterval(timer)
  }, [timeLeft])

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600)
    const minutes = Math.floor((seconds % 3600) / 60)
    const secs = seconds % 60
    return { hours, minutes, secs }
  }

  const { hours, minutes, secs } = formatTime(timeLeft)

  return (
    <div className="flex w-full items-center sm:gap-x-4 justify-between sm:justify-normal">
      <div className="text-primary text-xl sm:text-2xl font-times font-semibold text-nowrap">
        Khuyến Mãi
      </div>
      <div className="hidden sm:block w-8 h-[1px] bg-primary"></div>
      <div className="flex items-center gap-x-1 sm:gap-x-3">
        <div className="flex items-center gap-x-1">
          <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#404040] rounded-md font-bold text-sm sm:text-xl text-white flex items-center justify-center">
            {String(hours).padStart(2, "0")}
          </div>
          <p className="text-xs sm:text-lg font-times  text-primary">Giờ</p>
        </div>

        <div className="flex items-center gap-x-1">
          <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#404040] rounded-md font-bold text-sm sm:text-xl text-white flex items-center justify-center">
            {String(minutes).padStart(2, "0")}
          </div>
          <p className="text-xs sm:text-lg font-times  text-primary">Phút</p>
        </div>

        <div className="flex items-center gap-x-1">
          <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#404040] rounded-md font-bold text-sm sm:text-xl text-white flex items-center justify-center">
            {String(secs).padStart(2, "0")}
          </div>
          <p className="text-xs sm:text-lg font-times  text-primary">Giây</p>
        </div>
      </div>
    </div>
  )
}

export default CountdownTimer
