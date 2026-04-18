import Image from 'next/image';
import React from 'react';

import calender from '@/public/calender.webp'

const page = () => {
    // throw new Error("There was a big error");

    return (
        <div>
            <h2 className='text-3xl'>mission page</h2>
            <p className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod ipsam fugiat quidem eum sed deleniti voluptatem exercitationem tempora minima ratione labore, distinctio porro, vero fugit alias minus quaerat earum consectetur?</p>
            
            <Image src={calender} alt='Din panjika' width={400} placeholder="blur"/>
        </div>
    );
};

export default page;