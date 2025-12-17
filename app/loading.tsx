export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center px-4">
      <div className="text-center">
        {/* Main Loading Spinner */}
        <div className="relative mb-8">
          <div className="w-24 h-24 border-8 border-white/10 border-t-8 border-t-purple-400 rounded-full animate-spin mx-auto"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-white text-2xl font-mono font-bold animate-pulse">
              &lt;/&gt;
            </div>
          </div>
        </div>
        
        <h2 className="text-2xl font-light text-white mb-3 tracking-wider animate-pulse">
          Loading Snippets
        </h2>
        <div className="w-16 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full animate-pulse"></div>
        
        <div className="flex justify-center space-x-2 mt-6">
          <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce delay-75"></div>
          <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce delay-150"></div>
        </div>
      </div>
    </div>
  )
}