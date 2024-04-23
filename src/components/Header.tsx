import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import GenreDropDown from './GenreDropDown'
import SearchInput from './SearchInput'
import ThemeToggler from './ThemeToggler'
const Header = () => {
    return (
        <div className='w-full flex items-center justify-between backdrop-blur-2xl transition-colors p-5 bg-[#12121280] gap-4 md:gap-0 sticky z-50 top-0'>
            <Link href="/">
                <Image
                    src="https://i.ibb.co/ZW0SbjJ/logo-dark.png"
                    alt="Logo" width={120} height={100}
                    priority={true} className='cursor-pointer w-40 h-auto'
                />
            </Link>
            <div className='text-white flex space-x-3 items-center'>
                <GenreDropDown />
                <SearchInput />
                <ThemeToggler />
            </div>
        </div>
    )
}

export default Header