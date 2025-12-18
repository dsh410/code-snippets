import { prisma } from '@/lib/prisma'
import { notFound } from 'next/navigation'
import EditSnippetForm from '@/components/EditSnippetForm'

interface EditSnippetPageProps {
  params: Promise<{
    id: string
  }>
}

export default async function EditSnippetPage({ params }: EditSnippetPageProps) {
  // Add artificial delay to test loading component
  await new Promise(resolve => setTimeout(resolve, 2000))
  
  const { id } = await params
  const snippetId = parseInt(id)
  
  const snippet = await prisma.snippet.findUnique({
    where: { id: snippetId }
  })

  if (!snippet) {
    notFound()
  }

  return <EditSnippetForm snippet={snippet} />
}
