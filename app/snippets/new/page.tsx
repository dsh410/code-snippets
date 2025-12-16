import React from 'react'
import {prisma} from '@/lib/prisma'
import { redirect } from 'next/navigation'

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

export default function SnippetCreatePage() {
  return (
    <div className="w-full max-w-2xl mx-auto p-4 sm:p-6 md:p-8">
      <form action={createSnippet} className="bg-white shadow-md rounded-lg p-4 sm:p-6 md:p-8 border-t-4 border-t-blue-600 border-x border-b border-gray-200">
        <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Create a Snippet</h1>
        
        <div className="flex flex-col gap-4 sm:gap-6">
          <div className="flex flex-col gap-2">
            <label 
              className="text-sm font-semibold text-gray-900" 
              htmlFor="title"
            >
              Title
            </label>
            <input
              name="title"
              className="border-2 border-gray-300 rounded-md p-2 sm:p-3 w-full text-gray-900 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
              id="title"
              type="text"
              required
              aria-required="true"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label 
              className="text-sm font-semibold text-gray-900" 
              htmlFor="code"
            >
              Code
            </label>
            <textarea
              name="code"
              className="border-2 border-gray-300 rounded-md p-2 sm:p-3 w-full text-gray-900 font-mono text-sm sm:text-base min-h-40 sm:min-h-48 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all resize-y"
              id="code"
              required
              aria-required="true"
            />
          </div>

          <button 
            type="submit" 
            className="mt-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-md p-2.5 sm:p-3 text-sm sm:text-base transition-all focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
          >
            Create
          </button>
        </div>
      </form>
    </div>
  )
}
