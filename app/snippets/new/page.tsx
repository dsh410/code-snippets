import React from 'react'
import {prisma} from '@/lib/prisma'
import { redirect } from 'next/navigation'
import Link from 'next/link'

async function createSnippet(formData: FormData) {
  'use server'
  
  const title = formData.get('title') as string
  const code = formData.get('code') as string
  
  
  const snippet = await prisma.snippet.create({
    data: {
      title,
      code,
    }
  })
  
  console.log('Created snippet:', snippet)
  
  redirect('/')
}

export default async function SnippetCreatePage() {
  // Add artificial delay to test loading component
  await new Promise(resolve => setTimeout(resolve, 2000))
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
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
                Create a Snippet
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
            </div>
          </div>

          {/* Form Container */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8">
            <form action={createSnippet} className="space-y-6">
              {/* Title Input */}
              <div className="space-y-2">
                <label 
                  className="block text-sm font-light text-white/90" 
                  htmlFor="title"
                >
                  Snippet Title
                </label>
                <input
                  name="title"
                  className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-200"
                  id="title"
                  type="text"
                  placeholder="Enter a descriptive title..."
                  required
                  aria-required="true"
                />
              </div>

              {/* Code Input */}
              <div className="space-y-2">
                <label 
                  className="block text-sm font-light text-white/90" 
                  htmlFor="code"
                >
                  Code Content
                </label>
                <div className="relative">
                  {/* Code editor style header */}
                  <div className="flex items-center justify-between px-4 py-3 bg-slate-800/50 border border-white/10 rounded-t-xl">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                    <span className="text-white/60 text-xs font-light">code</span>
                  </div>
                  
                  <textarea
                    name="code"
                    className="w-full px-4 py-4 bg-slate-800/50 border border-white/10 border-t-0 rounded-b-xl text-gray-300 placeholder-white/40 font-mono text-sm leading-relaxed min-h-64 resize-y focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-200"
                    id="code"
                    placeholder="// Paste your code here&#10;function example() {&#10;  return 'Hello World!';&#10;}"
                    required
                    aria-required="true"
                  />
                </div>
                <p className="text-white/50 text-xs font-light">
                  Tip: Use proper indentation and formatting for better readability
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button 
                  type="submit" 
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white rounded-xl transition-all duration-200 font-light shadow-lg hover:shadow-purple-500/25 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-transparent"
                >
                  <div className="flex items-center justify-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    Create Snippet
                  </div>
                </button>
                
                <Link
                  href="/"
                  className="flex-1 px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white rounded-xl transition-all duration-200 font-light hover:scale-[1.02] text-center"
                >
                  Cancel
                </Link>
              </div>
            </form>
          </div>

          {/* Help Text */}
          <div className="mt-8 text-center">
            <p className="text-white/60 text-sm font-light">
              Create reusable code snippets to save time and share with your team
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
