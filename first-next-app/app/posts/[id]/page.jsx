import getPost from '@/lib/getPost';
import React from 'react'

export async function generateMetadata({params}){
    const {id} = await params;
    const post = await getPost(id);

    return {
        title: post.title,
        description: post.body
  }
}

export default async function page({params}) {
    const {id} = await params;
    const post = await getPost(id);

  return (
    <div className='max-w-2xl mx-auto border border-gray-400 p-5'>
        <h1 className='text-3xl text-orange-500'>{post.title}</h1>
        <p className='text-xs text-gray-400 mt-4'>{post.body}</p>
    </div>
  )
}
