import React from 'react'
import SidebarWrapper from './sidebar-wrapper'
import Image from 'next/image'
import Link from 'next/link'
import { SearchBar, SearchIcon } from './search'

const Header = () => {
    return (
        <>
            <header className=' px-8 py-6 bg-primary'>
                <div className='max-w-screen-2xl mx-auto flex items-center justify-between '>
                    <div className='flex items-center gap-6 '>
                        <SidebarWrapper />
                        <Link href={'/'}>
                            <Image
                                src={'/byeanime.png'}
                                alt='logo'
                                width={140}
                                height={60}
                            />
                        </Link>
                    </div>
                    <div className='flex gap-4 items-center'>
                        <SearchIcon />
                        <button className='bg-secondary px-3 py-1 rounded-md  text-lg font-semibold'>
                            Login
                        </button>
                    </div>
                </div>
            </header>
            <SearchBar />
        </>
    )
}

export default Header