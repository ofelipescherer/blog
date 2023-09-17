import { AsideAllTagsAndCategories } from '@/components/AsideAllTagsAndCategories'
import { Link } from '@/components/Lib/Link'
import { Posts } from '@/features/Posts'
import { allDocs } from 'contentlayer/generated'

interface PostsByTagProps {
  params: {
    tag: string

  }
}

export default function PostsByTag({ params: { tag } }: PostsByTagProps) {
  const docs = allDocs.filter(doc => doc.tags.includes(tag))

  return (
    <>
      <div className='m-auto flex w-full flex-col gap-4'>
        <h2 className='text-center text-sm capitalize'><Link target='_self' href="/">Filtered by: {tag}</Link></h2>
        <Posts docs={docs} />
      </div>
      <aside className='hidden flex-col gap-2 lg:flex'>
        <AsideAllTagsAndCategories selectedTag={tag} />
      </aside>
    </>

  )
}
