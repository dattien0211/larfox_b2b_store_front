"use client"
import React, { createContext, useContext, useEffect, useState } from "react"

type OS = "mobile" | "tablet" | "desktop"

interface OSContextProps {
  os: OS
}

const OSContext = createContext<OSContextProps | undefined>(undefined)

const OSProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [os, setOS] = useState<OS>(() => {
    const width = typeof window !== "undefined" ? window.innerWidth : 1024
    return width < 640 ? "mobile" : width < 1024 ? "tablet" : "desktop"
  })

  useEffect(() => {
    let timeout: NodeJS.Timeout

    const determineOS = () => {
      clearTimeout(timeout)
      timeout = setTimeout(() => {
        const width = window.innerWidth
        setOS(width < 640 ? "mobile" : width < 1024 ? "tablet" : "desktop")
      }, 150) // Debounce to prevent excessive re-renders
    }

    window.addEventListener("resize", determineOS)
    return () => window.removeEventListener("resize", determineOS)
  }, [])

  return <OSContext.Provider value={{ os }}>{children}</OSContext.Provider>
}

const useOS = () => {
  const context = useContext(OSContext)
  if (!context) throw new Error("useOS must be used within an OSProvider")
  return context
}

export { OSProvider, useOS }
