import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { ChevronDown } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const GenreArray = [
    { id: "101", name: "Action" },
    { id: "102", name: "Comedy" },
    { id: "103", name: "Horror" },
]

const GenreDropDown = () => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger className='text-white flex items-center text-sm font-medium'>
                Genre <ChevronDown className='ml-1' size={20} />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>Select a Genre</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {GenreArray.map((item) => (
                    <DropdownMenuItem key={item?.id}>
                        <Link href={`/genre/${item?.id}?genre=${item?.name}`}>
                            {item?.name}
                        </Link>
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default GenreDropDown