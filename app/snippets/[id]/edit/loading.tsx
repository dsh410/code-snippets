export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center px-4">
      <div className="text-center">
        <div className="relative mb-8">
          <div className="w-20 h-20 border-6 border-white/10 border-t-6 border-t-purple-400 rounded-full animate-spin mx-auto"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <svg className="w-6 h-6 text-white animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
          </div>
        </div>
        
        <h2 className="text-xl font-light text-white mb-3 tracking-wider animate-pulse">
          Loading Editor
        </h2>
        <div className="w-12 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full animate-pulse"></div>
        
        <div className="flex justify-center space-x-2 mt-6">
          <div className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-bounce"></div>
          <div className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-bounce delay-75"></div>
          <div className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-bounce delay-150"></div>
        </div>
      </div>
    </div>
  )
}