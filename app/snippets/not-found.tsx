import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center px-4">
      <div className="text-center max-w-2xl mx-auto">
        {/* 404 Animation */}
        <div className="mb-8 relative">
          <div className="text-[12rem] font-light text-white/20 select-none animate-pulse">
            404
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 animate-bounce"></div>
          </div>
        </div>

        {/* Error Message */}
        <div className="mb-8">
          <h1 className="text-4xl font-light text-white mb-4 tracking-wide">
            Snippet Not Found
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full mb-6"></div>
          <p className="text-white/60 text-lg font-light leading-relaxed">
            The code snippet you&apos;re looking for doesn&apos;t exist or may have been deleted.
          </p>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-20 w-2 h-2 bg-purple-400 rounded-full animate-ping opacity-60"></div>
          <div className="absolute top-40 right-32 w-3 h-3 bg-pink-400 rounded-full animate-pulse opacity-40"></div>
          <div className="absolute bottom-32 left-40 w-1 h-1 bg-purple-300 rounded-full animate-bounce opacity-50"></div>
          <div className="absolute bottom-20 right-20 w-2 h-2 bg-pink-300 rounded-full animate-ping opacity-30"></div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center relative z-10">
          <Link
            href="/"
            className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white rounded-xl transition-all duration-300 font-light shadow-lg hover:shadow-purple-500/25 hover:scale-105"
          >
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Snippets
            </div>
          </Link>

          <Link
            href="/snippets/new"
            className="group px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white rounded-xl transition-all duration-300 font-light hover:scale-105"
          >
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2 transition-transform group-hover:rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Create New Snippet
            </div>
          </Link>
        </div>

        {/* Suggestions */}
        <div className="mt-12 p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
          <h3 className="text-white font-light text-lg mb-4">What you can do:</h3>
          <ul className="text-white/60 text-sm space-y-2 text-left max-w-md mx-auto">
            <li className="flex items-center">
              <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-3 flex-shrink-0"></div>
              Check if the URL is correct
            </li>
            <li className="flex items-center">
              <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-3 flex-shrink-0"></div>
              Browse all available snippets
            </li>
            <li className="flex items-center">
              <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-3 flex-shrink-0"></div>
              Create a new code snippet
            </li>
            <li className="flex items-center">
              <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-3 flex-shrink-0"></div>
              Search for specific code examples
            </li>
          </ul>
        </div>

        {/* Error Code */}
        <div className="mt-8">
          <div className="inline-block px-4 py-2 bg-red-500/10 border border-red-500/20 rounded-lg">
            <span className="text-red-400 text-sm font-mono">ERROR_SNIPPET_NOT_FOUND</span>
          </div>
        </div>
      </div>
    </div>
  )
}