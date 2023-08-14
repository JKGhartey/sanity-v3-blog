import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Header() {
    return (
        <header className='flex items-center justify-between space-x-2 font-bold px-10 py-5'>
            <div className=" flex items-center space-x-2">
                <Link href="/" className='flex items-center'>
                    <Image className=' object-cover' width={80} height={20} src="/logo/icon2.png" alt="logo" />
                    <h1 className='text-3xl font-bold'>The Beacon</h1>
                </Link>
            </div>
            <div className="">
                <Link href="/" className='px-5 py-3 text-sm md:text-base bg-gray-900 text-tertiary flex items-center rounded-full text-center '>
                    Subscribe for more!
                </Link>
            </div>
        </header>
    )
}

export default Header