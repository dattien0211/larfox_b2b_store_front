"use client"
import React, { createContext, useContext, useEffect, useState } from "react"

type OS = "mobile" | "tablet" | "desktop"

interface OSContextProps {
  os: OS
}

const OSContext = createContext<OSContextProps | undefined>(undefined)

const OSProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [os, setOS] = useState<OS>("desktop")

  useEffect(() => {
    const determineOS = () => {
      const width = window.innerWidth
      if (width < 640) {
        setOS("mobile")
      } else if (width < 1024) {
        setOS("tablet")
      } else {
        setOS("desktop")
      }
    }

    // Initial check
    determineOS()

    // Add resize event listener
    window.addEventListener("resize", determineOS)

    return () => {
      window.removeEventListener("resize", determineOS)
    }
  }, [])

  return <OSContext.Provider value={{ os }}>{children}</OSContext.Provider>
}

// Custom hook for consuming the OS context
const useOS = () => {
  const context = useContext(OSContext)
  if (!context) {
    throw new Error("useOS must be used within an OSProvider")
  }
  return context
}

export { OSProvider, useOS }
