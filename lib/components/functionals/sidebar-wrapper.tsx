'use client'
import React, { useState } from 'react'
import Sidebar from './sidebar'
import { Menu } from 'lucide-react'

const SidebarWrapper = () => {
    const [open, setOpen] = useState(false)
    return (
        <Sidebar
            open={open}
            setOpen={setOpen}
            position='left'
            openBtn={
                <button onClick={() => setOpen(true)} className="">
                    <Menu className='text-secondary'  />
                </button>
            }
        >
            <div>
                <h2 className='font-light'>Drawer Content</h2>
            </div>
        </Sidebar>
    )
}

export default SidebarWrapper

