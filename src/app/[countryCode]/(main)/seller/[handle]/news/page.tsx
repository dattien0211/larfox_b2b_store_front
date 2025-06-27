import { getBlogList } from "@lib/data/blog"
import { getBrandList } from "@lib/data/brand"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

type Props = {
  params: { countryCode: string; handle: string }
}
export default async function SellerNews({ params }: Props) {
  const { sellers } = await getBrandList()
  const seller = sellers.find((item) => item.handle === params.handle)
  const { blogs } = await getBlogList(1, { seller_id: seller?.id })
  return (
    <>
      <section id="news-timeline" className="py-12 border-t">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8">
            {"Company's "}
            <span className="gradient-text">News</span>
          </h2>
          <div className="space-y-6">
            {blogs.map((blog, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg border hover:shadow-md transition-shadow"
              >
                <div className="flex gap-4">
                  <img
                    src={blog.thumbnail.url}
                    alt={blog.title}
                    className="w-40 h-40 object-cover rounded-lg"
                  />
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold text-lg">{blog.title}</h3>
                        <span className="text-sm text-gray-500">
                          2 days ago
                        </span>
                      </div>
                      <p className="text-gray-700 mb-2">
                        {blog.short_description}
                      </p>
                    </div>
                    <LocalizedClientLink
                      href={`/blogs/${blog.handle}`}
                      className="text-primary text-sm font-medium hover:underline cursor-pointer"
                    >
                      Read more
                    </LocalizedClientLink>
                  </div>
                </div>
              </div>
            ))}
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
