import { Carousel } from '@/lib/components/functionals/carousel'
import Header from '@/lib/components/functionals/header'
import { ByeAnimeScraper } from '@/lib/scraper'
import React from 'react'

const Home = async () => {
    const init = await ByeAnimeScraper.create();
    const data = await init.display_data()

    return (
        <main>
            <Header />
            <Carousel carousel_data={data} />
        </main>
    )
}

export default Home