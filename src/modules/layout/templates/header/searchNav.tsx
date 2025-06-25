"use client"

import Icons from "@modules/common/icons"
import { useState } from "react"

export default function SearchNav() {
  const { Search } = Icons
  const [isShowModalSearch, setIsShowModalSearch] = useState(false)
  const handleOnFocus = () => {
    setIsShowModalSearch(!isShowModalSearch)
  }

  return (
    <header id="header" className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center">
            <div className="text-3xl font-bold gradient-text mr-2">LARFOX</div>
            <span className="text-lg font-medium text-gray-700">.COM</span>
          </div>
          <div className="hidden lg:flex items-center space-x-8 text-sm font-medium">
            <span className="text-gray-700 hover:text-primary cursor-pointer">
              Language
            </span>
            <span className="text-gray-700 hover:text-primary cursor-pointer">
              Sign in
            </span>
            <button className="gradient-bg text-white px-6 py-2 rounded-full hover:opacity-90">
              Sign up
            </button>
            <button className="border border-primary text-primary px-6 py-2 rounded-full hover:bg-primary hover:text-white">
              Get the app
            </button>
          </div>
        </div>
        <nav className="border-t border-gray-100 py-3">
          <div className="flex items-center space-x-8 text-sm font-medium overflow-x-auto">
            <span className="text-gray-700 hover:text-primary cursor-pointer whitespace-nowrap">
              All Categories
            </span>
            <span className="text-gray-700 hover:text-primary cursor-pointer whitespace-nowrap">
              AI Bidding/Selling Agent
            </span>
            <span className="text-gray-700 hover:text-primary cursor-pointer whitespace-nowrap">
              Financial Programs
            </span>
            <span className="text-gray-700 hover:text-primary cursor-pointer whitespace-nowrap">
              Daily News
            </span>
            <span className="text-gray-700 hover:text-primary cursor-pointer whitespace-nowrap">
              For Buyer
            </span>
            <span className="text-gray-700 hover:text-primary cursor-pointer whitespace-nowrap">
              For Supplier
            </span>
            <span className="text-gray-700 hover:text-primary cursor-pointer whitespace-nowrap">
              Help Center
            </span>
            <span className="text-gray-700 hover:text-primary cursor-pointer whitespace-nowrap">
              About Larfox
            </span>
          </div>
        </nav>
      </div>
    </header>
  )
}
