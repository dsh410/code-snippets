import {prisma} from '@/lib/prisma'
import ShowSnippets from '../components/ShowSnippets';

export default async function Home() {
  // Add artificial delay to test loading component
  await new Promise(resolve => setTimeout(resolve, 3000))

  const snippets = await prisma.snippet.findMany()
 
  return (
   <ShowSnippets snippets={snippets}/>
  );
}
