export default function AboutLoading() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero skeleton */}
      <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-20 px-4">
        <div className="max-w-7xl mx-auto animate-pulse">
          <div className="h-16 bg-gray-200 rounded-lg w-2/3 mb-6"></div>
          <div className="space-y-3">
            <div className="h-6 bg-gray-200 rounded w-full"></div>
            <div className="h-6 bg-gray-200 rounded w-5/6"></div>
          </div>
        </div>
      </div>

      {/* Content sections skeleton */}
      <div className="max-w-7xl mx-auto px-4 py-16 space-y-16">
        {/* Mission section */}
        <div className="animate-pulse">
          <div className="h-10 bg-gray-200 rounded-lg w-1/3 mb-6"></div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-3">
              <div className="h-4 bg-gray-200 rounded w-full"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6"></div>
              <div className="h-4 bg-gray-200 rounded w-4/6"></div>
            </div>
            <div className="h-64 bg-gray-200 rounded-lg"></div>
          </div>
        </div>

        {/* Team section */}
        <div className="animate-pulse">
          <div className="h-10 bg-gray-200 rounded-lg w-1/4 mb-8"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="text-center">
                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
                <div className="h-6 bg-gray-200 rounded w-3/4 mx-auto mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}