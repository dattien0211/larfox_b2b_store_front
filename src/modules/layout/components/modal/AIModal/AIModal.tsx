const AIModal = () => {
    return (
        <div className="fixed right-0 top-36 animate-float w-1/6 min-w-[220px] max-w-md px-2 z-50">
          <div className="bg-white p-4 rounded-2xl shadow-xl border border-gray-100 w-full">
            <div className="flex items-center mb-2">
              <div className="w-3 h-3 bg-green-400 rounded-full mr-2"></div>
              <span className="text-sm font-medium">AI Agent</span>
            </div>
            <p className="text-sm text-gray-600 mb-3">
              Quick questions about TechPro Solutions?
            </p>
            <button className="gradient-bg text-white px-4 py-1 rounded-lg text-sm w-full">
              Ask AI
            </button>
          </div>
        </div>
    )
}

export default AIModal
