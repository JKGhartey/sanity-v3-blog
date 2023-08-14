import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import DarkModeButton from './DarkModeButton'

function Header() {
    return (
        <header className='flex items-center justify-between space-x-2 font-bold px-10 py-5'>
            <div className=" flex items-center space-x-2">
                <Link href="/" className='flex items-center'>
                    <Image className=' object-cover' width={80} height={20} src="/logo/icon2.png" alt="logo" />
                    <h1 className='text-3xl font-bold'>The Beacon</h1>
                </Link>
            </div>
            <div className="flex space-x-4">
                <Link href="/" className='px-5 py-3 text-sm md:text-base bg-gray-900 hover:bg-secondary text-tertiary flex items-center rounded-full text-center transition-all duration-[350ms] ease-out '>
                    Subscribe for more!
                </Link>
                <DarkModeButton />
            </div>
        </header>
    )
}

export default Header