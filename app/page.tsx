import {prisma} from '@/lib/prisma'
import ShowSnippets from '../components/ShowSnippets';

export default async function Home() {

  const snippets = await prisma.snippet.findMany()
 
  return (
   <ShowSnippets snippets={snippets}/>
  );
}
