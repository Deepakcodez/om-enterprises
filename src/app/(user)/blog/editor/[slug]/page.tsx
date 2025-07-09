import React from 'react'
import BlogEditorTipTap from './components/BlogEditor'

export default async function UpdateBloge({params}:{
  params: Promise<{ slug: string }>
}) {
  return (
    <div className=" w-full min-h-screen ">
      {await params.then(({ slug }) => (
          <BlogEditorTipTap slug={slug}/>
      ))}
    </div>
  )
}
