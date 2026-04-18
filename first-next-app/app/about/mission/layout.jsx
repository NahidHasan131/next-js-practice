import Link from 'next/link'
import React from 'react'

export default function layout({children}) {
  return (
    <div>
        <nav>
            <ul className="flex gap-5 border-gray-600 border-b mb-8">
                <li><Link href= '/'>home</Link></li>
                <li><Link href= '/about'>About</Link></li>
            </ul>
        </nav>
        {children}
    </div>
  )
}
