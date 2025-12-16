'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

interface Snippet {
  id: number
  title: string
  code: string
}

interface SnippetByIdProps {
  snippetId: number
}

export default function SnippetById({snippet}: {snippet: Snippet}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <Link 
              href="/"
              className="inline-flex items-center text-purple-300 hover:text-white transition-colors duration-200 mb-6"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Snippets
            </Link>
            
            <div className="text-center">
              <h1 className="text-4xl font-light text-white mb-4 tracking-wide">
                {snippet.title}
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
            </div>
          </div>

          {/* Code Container */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8">
            {/* Code Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                <span className="ml-4 text-white/60 text-sm font-light">
                  {snippet.title}
                </span>
              </div>
            </div>

            {/* Code Display */}
            <div className="bg-slate-900/50 rounded-xl p-6 border border-white/5">
              <pre className="text-gray-300 font-mono text-sm leading-relaxed overflow-x-auto">
                <code className="whitespace-pre">{snippet.code}</code>
              </pre>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <Link
              href={`/snippets/${snippet.id}/edit`}
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white rounded-lg transition-all duration-200 font-light"
            >
              Edit Snippet
            </Link>
            
            <button
              className="px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white rounded-lg transition-all duration-200 font-light"
            >
              Delete Snippet
            </button>
          </div>

          {/* Snippet Info */}
          <div className="mt-12 text-center">
            <div className="inline-block bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 px-6 py-4">
              <p className="text-white/60 text-sm font-light">
                Snippet ID: <span className="text-purple-300">{snippet.id}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}