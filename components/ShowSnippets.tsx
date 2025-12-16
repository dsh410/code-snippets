'use client'

import { useState } from 'react'
import Link from 'next/link'

interface Snippet {
  id: number
  title: string
  code: string
}

interface ShowSnippetsProps {
  snippets: Snippet[]
}

export default function ShowSnippets({ snippets }: ShowSnippetsProps) {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedSnippet, setSelectedSnippet] = useState<Snippet | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [copied, setCopied] = useState(false)

  // Filter snippets based on search term
  const filteredSnippets = snippets.filter(snippet =>
    snippet.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    snippet.code.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleSnippetClick = (snippet: Snippet) => {
    setSelectedSnippet(snippet)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedSnippet(null)
  }

  const copyToClipboard = async (code: string) => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy code:', err)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-light text-white mb-6 tracking-wide">
              Code Snippets
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full mb-8"></div>
            
            {/* Add New Snippet Button */}
            <Link
              href="/snippets/new"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white rounded-lg transition-all duration-200 font-light mb-8"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Add New Snippet
            </Link>
          </div>

          {/* Search Bar */}
          <div className="mb-8 max-w-md mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search snippets..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-200"
              />
              <svg className="absolute right-3 top-3.5 w-5 h-5 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          {/* Snippets Count */}
          <div className="text-center mb-8">
            <p className="text-white/60 font-light">
              {filteredSnippets.length} snippet{filteredSnippets.length !== 1 ? 's' : ''} found
            </p>
          </div>

          {/* Snippets Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredSnippets.map(snippet => (
              <div
                key={snippet.id}
                onClick={() => handleSnippetClick(snippet)}
                className="group bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 hover:bg-white/10 hover:border-purple-400/30 transition-all duration-300 cursor-pointer hover:transform hover:scale-105"
                role="button"
                tabIndex={0}
                aria-label={`View code snippet: ${snippet.title}`}
                onKeyDown={(e) => e.key === 'Enter' && handleSnippetClick(snippet)}
              >
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mr-3"></div>
                  <div className="w-2 h-2 bg-purple-300/50 rounded-full mr-2"></div>
                  <div className="w-2 h-2 bg-pink-300/50 rounded-full"></div>
                </div>
                <h3 className="text-xl font-light text-white mb-3 break-words group-hover:text-purple-200 transition-colors duration-300">
                  {snippet.title}
                </h3>
                <div className="w-full h-px bg-gradient-to-r from-transparent via-purple-400/30 to-transparent mb-4"></div>
                <p className="text-purple-200/60 text-sm font-light">
                  Click to view code
                </p>
                
                {/* Quick Actions */}
                <div className="flex gap-2 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Link
                    href={`/snippets/${snippet.id}`}
                    onClick={(e) => e.stopPropagation()}
                    className="px-3 py-1 bg-purple-600/50 hover:bg-purple-600 text-white text-xs rounded-lg transition-colors duration-200"
                  >
                    View
                  </Link>
                  <Link
                    href={`/snippets/${snippet.id}/edit`}
                    onClick={(e) => e.stopPropagation()}
                    className="px-3 py-1 bg-blue-600/50 hover:bg-blue-600 text-white text-xs rounded-lg transition-colors duration-200"
                  >
                    Edit
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredSnippets.length === 0 && (
            <div className="text-center py-20">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mx-auto mb-6 opacity-50"></div>
              <p className="text-white/60 text-lg font-light mb-4">
                {searchTerm ? 'No snippets found matching your search' : 'No code snippets found'}
              </p>
              {!searchTerm && (
                <Link
                  href="/snippets/new"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white rounded-lg transition-all duration-200 font-light"
                >
                  Create your first snippet
                </Link>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Modal for showing full snippet */}
      {isModalOpen && selectedSnippet && (
        <div 
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-50"
          onClick={closeModal}
        >
          <div 
            className="bg-slate-900 rounded-2xl border border-white/20 p-8 max-w-4xl w-full max-h-[80vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-light text-white">{selectedSnippet.title}</h2>
              <div className="flex gap-3">
                <button
                  onClick={() => copyToClipboard(selectedSnippet.code)}
                  className={`px-4 py-2 rounded-lg transition-colors duration-200 ${
                    copied 
                      ? 'bg-green-600 hover:bg-green-700 text-white' 
                      : 'bg-purple-600 hover:bg-purple-700 text-white'
                  }`}
                  aria-label="Copy code to clipboard"
                >
                  {copied ? 'Copied!' : 'Copy'}
                </button>
                <Link
                  href={`/snippets/${selectedSnippet.id}`}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200"
                >
                  View Full
                </Link>
                <button
                  onClick={closeModal}
                  className="px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors duration-200"
                  aria-label="Close modal"
                >
                  Close
                </button>
              </div>
            </div>

            {/* Code Display */}
            <div className="bg-slate-800 rounded-xl p-6 overflow-auto max-h-[60vh]">
              <pre className="text-gray-300 font-mono text-sm leading-relaxed whitespace-pre-wrap">
                <code>{selectedSnippet.code}</code>
              </pre>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}