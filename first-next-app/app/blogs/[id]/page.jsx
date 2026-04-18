import { notFound } from 'next/navigation';
import React from 'react';

const page = async ({params}) => {
    const {id} = await params;

    if(Number(id) > 3){
     notFound();
    }

    return (
        <div className='m-5 text-orange-500'>
            The blog id is: {id}
        </div>
    );
};

export default page;