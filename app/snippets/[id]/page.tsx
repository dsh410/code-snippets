import { prisma } from '@/lib/prisma'
import { notFound } from 'next/navigation'
import SnippetById from '@/components/SnippetById'

interface SnippetPageProps {
  params: Promise<{
    id: string
  }>
}

export default async function SnippetDetailPage({ params }: SnippetPageProps) {
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