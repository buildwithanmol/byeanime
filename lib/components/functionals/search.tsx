'use client';

import { searchBarAtom } from "@/lib/recoil/atom";
import { Filter, Search } from "lucide-react";
import Link from "next/link";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";


export const SearchIcon = () => {
    const [open, setOpen] = useRecoilState(searchBarAtom)
    return <Search onClick={() => setOpen(!open)} className="cursor-pointer" />
}

export const SearchBar = () => {
    const isOpen = useRecoilValue(searchBarAtom)
    return isOpen ? <div className=" bg-primary pb-6 px-8">
        <div className="max-w-screen-2xl mx-auto flex  gap-4 items-center">
            <Link href="/filter" className="bg-secondary p-2 rounded-md grid place-items-center ">
                <Filter />
            </Link>
            <input type="text" placeholder="Search..." className="w-full bg-white rounded-md text-primary  py-2 px-4 outline-none" />
        </div>
    </div> : null
}