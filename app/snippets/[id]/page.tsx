import { prisma } from '@/lib/prisma'
import { notFound } from 'next/navigation'
import SnippetById from '@/components/SnippetById'
import Link from 'next/link'

interface SnippetPageProps {
  params: Promise<{
    id: string
  }>
}

export default async function SnippetDetailPage({ params }: SnippetPageProps) {
  // Add artificial delay to test loading component
  await new Promise(resolve => setTimeout(resolve, 2000))
  
  const { id } = await params
  const snippetId = parseInt(id);
  const snippet = await prisma.snippet.findUnique({
    where: {
      id: snippetId,
    }
  })

  if (!snippet) {
    notFound()
  }

  return (
        <SnippetById snippet={snippet} />
  )
}