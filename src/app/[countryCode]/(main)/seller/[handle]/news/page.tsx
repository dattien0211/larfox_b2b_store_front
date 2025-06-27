type Props = {
  params: { countryCode: string; handle: string }
}
export default async function SellerNews({ params }: Props) {
  return (
    <>
      <div className="border-b">
        <div className="mb-6 container mx-auto">
          <img
            className="w-full h-64 rounded-xl object-cover"
            src="https://storage.googleapis.com/uxpilot-auth.appspot.com/bfd5c2ff67-fee05dd31993ff88dc45.png"
            alt="modern technology company office building with glass facade and digital displays"
          />
        </div>
      </div>
      <section id="news-timeline" className="py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8">
            Company <span className="gradient-text">News Timeline</span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="timeline-item cursor-pointer hover:bg-gray-50 p-4 rounded-lg transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-lg text-gray-900">
                    TechPro Solutions Launches Revolutionary AI Platform
                  </h3>
                  <span className="text-sm text-gray-500 whitespace-nowrap ml-4">
                    Dec 15, 2024
                  </span>
                </div>
                <p className="text-gray-700">
                  Our new AI-powered business intelligence platform
                  revolutionizes how enterprises analyze data and make strategic
                  decisions...
                </p>
              </div>

              <div className="timeline-item cursor-pointer hover:bg-gray-50 p-4 rounded-lg transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-lg text-gray-900">
                    Strategic Partnership with Global Tech Giant
                  </h3>
                  <span className="text-sm text-gray-500 whitespace-nowrap ml-4">
                    Dec 8, 2024
                  </span>
                </div>
                <p className="text-gray-700">
                  Partnership announcement that will expand our cloud services
                  to 15 new markets across Asia Pacific region...
                </p>
              </div>

              <div className="timeline-item cursor-pointer hover:bg-gray-50 p-4 rounded-lg transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-lg text-gray-900">
                    ISO 27001 Certification Achieved
                  </h3>
                  <span className="text-sm text-gray-500 whitespace-nowrap ml-4">
                    Nov 28, 2024
                  </span>
                </div>
                <p className="text-gray-700">
                  TechPro Solutions successfully achieves ISO 27001
                  certification, reinforcing our commitment to information
                  security...
                </p>
              </div>

              <div className="timeline-item cursor-pointer hover:bg-gray-50 p-4 rounded-lg transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-lg text-gray-900">
                    Q3 2024 Growth Report Released
                  </h3>
                  <span className="text-sm text-gray-500 whitespace-nowrap ml-4">
                    Oct 30, 2024
                  </span>
                </div>
                <p className="text-gray-700">
                  Company reports 45% year-over-year growth in Q3 2024, driven
                  by increased demand for AI and cloud solutions...
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div
        id="news-overlay"
        className="fixed inset-0 bg-[red] bg-opacity-50 overlay z-50 hidden"
      >
        <div className="flex items-center justify-center h-[800px] p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b p-6 flex justify-between items-center">
              <h2
                id="article-title"
                className="text-2xl font-bold gradient-text"
              ></h2>
              <button className="text-gray-500 hover:text-gray-700 text-2xl">
                <i className="fas fa-times"></i>
              </button>
            </div>
            <div className="p-6">
              <div id="article-content" className="prose max-w-none mb-8"></div>

              <div className="border-t pt-6">
                <h3 className="text-xl font-semibold mb-4">Comments</h3>
                <div className="space-y-4 mb-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                      <img
                        className="w-8 h-8 rounded-full mr-3"
                        src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-1.jpg"
                        alt="User avatar"
                      />
                      <span className="font-medium">Sarah Chen</span>
                      <span className="text-sm text-gray-500 ml-2">
                        2 hours ago
                      </span>
                    </div>
                    <p className="text-gray-700">
                      This is exciting news! Looking forward to seeing how this
                      AI platform will transform our industry.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                      <img
                        className="w-8 h-8 rounded-full mr-3"
                        src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg"
                        alt="User avatar"
                      />
                      <span className="font-medium">Mike Johnson</span>
                      <span className="text-sm text-gray-500 ml-2">
                        5 hours ago
                      </span>
                    </div>
                    <p className="text-gray-700">
                      Congratulations on this milestone! When will the platform
                      be available for beta testing?
                    </p>
                  </div>
                </div>
                <div className="border-t pt-4">
                  <h4 className="font-medium mb-3">Add a comment</h4>
                  <div className="space-y-3">
                    <textarea
                      className="w-full border rounded-lg p-3 h-24 resize-none"
                      placeholder="Write your comment..."
                    ></textarea>
                    <button className="gradient-bg text-white px-6 py-2 rounded-lg font-medium">
                      Post Comment
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
