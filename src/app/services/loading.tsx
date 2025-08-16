export default function ServicesLoading() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero section skeleton */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 py-16 px-4">
        <div className="max-w-7xl mx-auto animate-pulse">
          <div className="h-12 bg-gray-200 rounded-lg w-1/2 mb-4"></div>
          <div className="h-6 bg-gray-200 rounded w-3/4"></div>
        </div>
      </div>

      {/* Services grid skeleton */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="bg-white border border-gray-200 rounded-lg p-8 animate-pulse">
              <div className="w-16 h-16 bg-gray-200 rounded-lg mb-6"></div>
              <div className="h-6 bg-gray-200 rounded w-3/4 mb-4"></div>
              <div className="space-y-2">
                <div className="h-4 bg-gray-200 rounded w-full"></div>
                <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                <div className="h-4 bg-gray-200 rounded w-4/6"></div>
              </div>
              <div className="mt-6 h-10 bg-gray-200 rounded-lg"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}