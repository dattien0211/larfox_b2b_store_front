// ReviewModal.tsx
import React from "react"

import ICons from "@modules/common/icons"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

interface ReviewModalProps {
  showModal: boolean
  closeModal: () => void
}

const ReviewModal: React.FC<ReviewModalProps> = ({ showModal, closeModal }) => {
  if (!showModal) return null

  const { XMark } = ICons

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-50 transition-opacity duration-300">
      <div className="bg-white rounded-lg shadow-lg w-11/12 sm:w-3/4 md:w-1/2 lg:w-[30%] p-6 relative transform transition-transform duration-300 scale-95">
        <button
          onClick={closeModal}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
        >
          <XMark size={22} />
        </button>
        <h2 className="text-lg sm:text-xl font-bold mb-2 sm:mb-4 text-center sm:text-left">
          Bạn cần đăng nhập để đánh giá
        </h2>
        <p className="text-gray-600 mb-4 text-center sm:text-left text-base sm:text-lg ">
          Vui lòng đăng nhập để có thể gửi đánh giá và nhận ưu đãi!
        </p>
        <LocalizedClientLink
          href="/tai-khoan"
          onClick={closeModal}
          className="block w-[60%] sm:w-[40%] font-semibold mx-auto py-2 px-4 bg-primary text-white rounded hover:bg-orang-30 text-center"
        >
          Đăng nhập
        </LocalizedClientLink>
      </div>
    </div>
  )
}

export default ReviewModal
