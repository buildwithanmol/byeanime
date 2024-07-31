'use client'
import React, { useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { ByeAnimeDisplayData } from '@/lib/types'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, ChevronRight, Clock, Play, PlayCircle, PlayCircleIcon } from 'lucide-react'

export function Carousel({ carousel_data }: { carousel_data: ByeAnimeDisplayData[] | null }) {
    const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()])
    const icons = [
        <Play key={0} size={15} />,
        <Clock key={1} size={15} />,
        <Calendar key={2} size={15} />
    ]
    return (
        <div className="embla" ref={emblaRef}>
            <div className="embla__container">
                {carousel_data && carousel_data?.length > 0 && carousel_data.map((data, index) => (
                    <div key={index} className="embla__slide grid grid-cols-5 items-center p-4">
                        <div className='px-5 h-full flex items-center justify-center col-span-2'>
                            <div>
                                <p className='text-secondary text-xl'> {data.ranking} </p>
                                <br />
                                <h1 className='text-white text-3xl font-semibold'> {data.title} </h1>
                                <br />
                                <div className='flex items-center'>
                                    {data.types.map((item, key) => (
                                        key === 4 ?
                                            item.split(" ").map((subItem, subKey) => {
                                                // Determine the background color based on the length and position
                                                let bgColor = '';
                                                const splitItems = item.split(" ");
                                                if (splitItems.length === 9) {
                                                    if (subKey === 0) bgColor = 'bg-green-300';
                                                    if (subKey === 1) bgColor = 'bg-cyan-300';
                                                    if (subKey === 2) bgColor = 'bg-gray-100';
                                                } else if (splitItems.length === 5) {
                                                    if (subKey === 0) bgColor = 'bg-green-300';
                                                    if (subKey === 1) bgColor = 'bg-blue-300';
                                                } else {
                                                    bgColor = 'bg-green-300';
                                                }

                                                if (subItem.length === 0) return null;

                                                return (
                                                    <div className={`mx-[1px] px-1 rounded-md ${bgColor}`} key={subKey}>
                                                        {subItem}
                                                    </div>
                                                );
                                            })
                                            : (
                                                <div key={key} className={`flex items-center gap-1 mx-2 ${key === 3 ? 'bg-secondary px-2 rounded-md' : ''}`}>
                                                    {key === 0 ? icons[0] : key === 1 ? icons[1] : key === 2 ? icons[2] : null}
                                                    <span>{item}</span>
                                                </div>
                                            )
                                    ))}
                                </div>

                                <br />

                                <div className='text-lg font-light'>
                                    {data.description?.slice(0, 200)}
                                </div>
                                <br />

                                <div className='flex gap-4 '>
                                    <Link href={`/watch/${data.slug}`} className='flex items-center gap-2  rounded-full px-4 py-2 bg-secondary text-primary font-bold text-lg'>
                                        <PlayCircleIcon size={20} /> Watch Now
                                    </Link>
                                    <Link href={`/info/${data.slug}`} className='flex items-center gap-2  rounded-full px-4 py-2 bg-primary hover:bg-primary/50 text-xl'>
                                        Detail <ChevronRight size={15} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <Image
                            src={data.banner || 'https://via.placeholder.com/1920x1080'}
                            alt={data.title || 'banner_title'}
                            className="w-full h-full object-cover rounded-xl max-w-screen-2xl aspect-[14/7] col-span-3"
                            width={1920}
                            height={1080}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}
