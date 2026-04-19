import React from 'react'

export default async function comments({commentsPromise}) {
    const comment = await commentsPromise
  return (
    <div className='border-t'>
        {comment.map((comment)=>(
            <div className='border mt-5 p-5' key={comment.id}>
                <h3 className='font-bold'>Name: {comment.name}</h3>
                <h4 className='font-semibold'>Email: {comment.email}</h4>
                <p className='text-gray-500 '>{comment.body}</p>
            </div>
        ))}
    </div>
  )
}
