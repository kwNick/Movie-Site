import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const Footer = () => {
    return (
        <div className='bg-[#191919] px-10 py-20 grid grid-cols-1
         md:grid-cols-2 lg:grid-cols-4 gap-10'>
            <div>
                <h2 className='text-base uppercase font-bold text-white
                tracking-wide border-b border-b-gray-600 py-2 mb-5 relative'>
                    About Us <span className='w-16 h-1 bg-red-600 inline-block absolute left-0
                    -bottom-[1.5px] z-10'/>
                </h2>
                <Link href="/">
                    <Image
                        src="https://i.ibb.co/ZW0SbjJ/logo-dark.png"
                        alt="Logo" width={120} height={100}
                        priority={true} className='cursor-pointer w-40 h-auto'
                    />
                </Link>
            </div>
        </div>
    )
}

export default Footer