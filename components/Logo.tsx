import React from 'react'
import Image from "next/image"

const Logo = (props: any) => {
    const { renderDefault, title } = props


    return (
        <div className='flex items-center space-x-2 ml-12'>
            <Image className='rounded-full object-contain' width={70} height={70} src="/logo/icon.png" alt="logo" />
            <>{renderDefault(props)} </>
        </div>
    )
}

export default Logo