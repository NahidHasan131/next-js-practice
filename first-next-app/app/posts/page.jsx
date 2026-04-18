import getAllPosts from '@/lib/getAllPosts'
import Link from 'next/link';
import React from 'react'

export default async function page() {
    const posts = await getAllPosts();
    // console.log(posts)
  return (
    <div>
        <h1 className='font-bold text-4xl mb-5'>All posts</h1>

        <div className='grid grid-cols-3 gap-5'>
            {posts.map((post)=>(
                <div key={post.id} className='border text-center rounded-xl p-5 '>
                    <Link href={`/posts/${post.id}`}><h1 className='text-xl font-semibold mb-4'>{post.title}</h1></Link>
                </div>
            ))}
        </div>
    </div>
  )
}
