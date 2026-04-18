import Link from 'next/link';
import React, { lazy } from 'react';

export const metadata = {
  title: "Blog page",
  description: "This is blog page that contain next Js blogs.",
};

const page = () => {
   const blogs = [
        {
            id: 1,
            title: "Blog1",
            description: 'This is lazy blog-1'
        }, {
            id: 2,
            title: "Blog2",
            description: 'This is lazy blog-2'
        },
         {
            id: 3,
            title: "Blog3",
            description: 'This is lazy blog-3'
        },
    ]
    return (
        <div>
            <ul>
                {blogs.map((blog)=>(
                    <li key={blog.id} className='mb-5'>
                        <Link href={`/blogs/${blog.id}`}>{blog.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default page;