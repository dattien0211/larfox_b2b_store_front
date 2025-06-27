"use client"
import { useState } from "react"
import { Certificate } from "../../../../types/global"
import Lightbox from "react-image-lightbox"
import "react-image-lightbox/style.css"

export default function SellerCertificationItem({
  certificate,
}: {
  certificate: Certificate
}) {
  const [isOpen, setIsOpen] = useState(false)
  const [photoIndex, setPhotoIndex] = useState(0)

  const handleOpen = (index: number) => {
    setPhotoIndex(index)
    requestAnimationFrame(() => {
      setIsOpen(true)
    })
  }

  return (
    <>
      <button
        onClick={() => handleOpen(0)}
        className="bg-white p-6 rounded-lg text-center w-full"
      >
        {certificate.image.length > 0 && (
          <div className="flex flex-wrap justify-center gap-2">
            {certificate.image.map((image, index) => (
              <img
                key={image.url}
                onClick={(e) => {
                  e.stopPropagation()
                  handleOpen(index)
                }}
                className="w-20 h-20 object-contain cursor-pointer"
                src={image.url}
                alt={`Certification ${index + 1}`}
              />
            ))}
          </div>
        )}
        <span className="block mt-2 font-medium">{certificate.type}</span>
      </button>

      {isOpen && certificate.image[photoIndex] && (
        <Lightbox
          mainSrc={certificate.image[photoIndex].url}
          nextSrc={
            certificate.image[(photoIndex + 1) % certificate.image.length].url
          }
          prevSrc={
            certificate.image[
              (photoIndex + certificate.image.length - 1) %
                certificate.image.length
            ].url
          }
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex(
              (photoIndex + certificate.image.length - 1) %
                certificate.image.length
            )
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % certificate.image.length)
          }
          enableZoom={true}
          reactModalStyle={{
            overlay: {
              backgroundColor: "rgba(0,0,0,0.85)",
              zIndex: 9999,
            },
            content: {
              inset: 0,
              zIndex: 9999,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "transparent",
              padding: 0,
              border: "none",
            },
          }}
        />
      )}
    </>
  )
}
