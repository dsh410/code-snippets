'use client'

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {Snippet} from '@prisma/client';



interface EditSnippetFormProps {
  snippet: Snippet
}

export default function EditSnippetForm({ snippet }: EditSnippetFormProps) {
  const [title, setTitle] = useState(snippet.title)
  const [code, setCode] = useState(snippet.code)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    try {
      const response = await fetch(`/api/snippets/${snippet.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, code }),
      })

      if (!response.ok) {
        throw new Error('Failed to update snippet')
      }

      router.push(`/snippets/${snippet.id}`)
      router.refresh()
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to update snippet')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleCancel = () => {
    router.push(`/snippets/${snippet.id}`)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <Link 
              href={`/snippets/${snippet.id}`}
              className="inline-flex items-center text-purple-300 hover:text-white transition-colors duration-200 mb-6"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Snippet
            </Link>
            
            <div className="text-center">
              <h1 className="text-4xl font-light text-white mb-4 tracking-wide">
                Edit Snippet
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
              <p className="text-white/60 text-sm font-light mt-4">
                ID: {snippet.id}
              </p>
            </div>
          </div>

          {/* Form Container */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8">
            <form  className="space-y-6">
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
                  defaultValue={snippet.title}
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
                    <span className="text-white/60 text-xs font-light">editing: {snippet.title}</span>
                  </div>
                  
                  <textarea
                    name="code"
                    defaultValue={snippet.code}
                    className="w-full px-4 py-4 bg-slate-800/50 border border-white/10 border-t-0 rounded-b-xl text-gray-300 placeholder-white/40 font-mono text-sm leading-relaxed min-h-80 resize-y focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-200"
                    id="code"
                    placeholder="// Paste your code here..."
                    required
                    aria-required="true"
                  />
                </div>
                <p className="text-white/50 text-xs font-light">
                  Tip: Make sure to preserve proper indentation and formatting
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
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Save Changes
                  </div>
                </button>
                
                <Link
                  href={`/snippets/${snippet.id}`}
                  className="flex-1 px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white rounded-xl transition-all duration-200 font-light hover:scale-[1.02] text-center flex items-center justify-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  Cancel
                </Link>
              </div>
            </form>
          </div>

          {/* Info Panel */}
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-4">
              <h3 className="text-white font-light mb-2">Quick Actions</h3>
              <div className="space-y-2">
                <Link
                  href="/"
                  className="block text-purple-300 hover:text-white text-sm transition-colors duration-200"
                >
                  → View all snippets
                </Link>
                <Link
                  href="/snippets/new"
                  className="block text-purple-300 hover:text-white text-sm transition-colors duration-200"
                >
                  → Create new snippet
                </Link>
              </div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-4">
              <h3 className="text-white font-light mb-2">Editing Tips</h3>
              <ul className="text-white/60 text-sm space-y-1">
                <li>• Use descriptive titles</li>
                <li>• Include proper comments</li>
                <li>• Format code consistently</li>
                <li>• Test before saving</li>
              </ul>
            </div>
          </div>

          {/* Warning Notice */}
          <div className="mt-6 p-4 bg-amber-500/10 border border-amber-500/20 rounded-xl">
            <div className="flex items-start">
              <svg className="w-5 h-5 text-amber-400 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
              <div>
                <p className="text-amber-200 text-sm font-medium">
                  Editing Active Snippet
                </p>
                <p className="text-amber-200/70 text-xs mt-1">
                  Changes will overwrite the existing code. Make sure to backup important snippets.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}