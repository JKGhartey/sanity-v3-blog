import Image from 'next/image'
import { draftMode } from "next/headers"
import { groq } from 'next-sanity';
import { client } from '@/lib/sanity.client';
import { PreviewSuspense } from 'next-sanity/preview';
import PreviewBlogList from '@/components/PreviewBlogList';
import BlogList from '@/components/BlogList';


const query = groq`
	*[_type == "post"] {
		...,
		author->,
		categories[]->
	} | order(_createdAt desc)
`;


export const revalidate = 60

export default async function HomePage() {

  const { isEnabled } = draftMode()
  if (isEnabled) {
    return <PreviewSuspense
      fallback={
        <div role="status">
          <p className="text-center text-lg animate-pulse text-[#F7AB0A]">
            Loading Preview Data...
          </p>
        </div>
      }
    >
      <PreviewBlogList query={query} />
    </PreviewSuspense>
  }

  const posts = await client.fetch(query)
  // const categories = await client.fetch
  return (
    <BlogList posts={posts} />
  )
}
