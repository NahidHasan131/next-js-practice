import getAllPostsComments from '@/lib/getAllPostsComments';
import getPost from '@/lib/getPost';
import Comments from '@/app/components/Comments'
import { Suspense } from 'react';
import getAllPosts from '@/lib/getAllPosts';

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
    const postPromise = getPost(id);
    const commentsPromise = getAllPostsComments(id);

    // const [post, comments] = await Promise.all([postPromise, commentsPromise])
    const post = await postPromise;

  return (
    <div className='max-w-2xl mx-auto border border-gray-400 p-5'>
        <h1 className='text-3xl text-orange-500'>{post.title}</h1>
        <p className='text-xs text-gray-400 mt-4'>{post.body}</p>

        <Suspense fallback="Loading all comments...">
            <Comments commentsPromise={commentsPromise}/>
        </Suspense>
    </div>
  )
}

export async function generateStaticParams (params) {
    const posts = await getAllPosts();

    return posts.map((post)=>({
        id: post.id.toString()
    }))
}
