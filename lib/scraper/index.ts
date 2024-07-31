import puppeteer, { Page } from "puppeteer";
import { Browser } from "puppeteer";
import { ByeAnimeDisplayData } from "../types";
import chromium from '@sparticuz/chromium';

export class ByeAnimeScraper {
    private BASE_URL = 'https://hianime.to';
    private HOME = '/home'
    private browser: Browser;

    constructor(browser: Browser) {
        this.browser = browser;
    }

    // Basic functionalities

    static async create(): Promise<ByeAnimeScraper> {
        const browser = await puppeteer.launch({
            args: chromium.args,
            defaultViewport: chromium.defaultViewport,
            headless: true
        });
        return new ByeAnimeScraper(browser)
    }

    private async close() {
        if (this.browser) {
            await this.browser.close();
        }
    }

    // Scraping Functionalities

    async display_data(): Promise<ByeAnimeDisplayData[] | null> {
        const page = await this.get_page(this.HOME);

        if (!page) {
            return null;
        }

        const slides_data: ByeAnimeDisplayData[] = [];

        const slides = await page.$$('.swiper-slide:not(.swiper-slide-duplicate)');

        for (const slide of slides) {
            const content = await slide.evaluate((element) => {
                const titleElement = element.querySelector('.deslide-item > .deslide-item-content > .desi-head-title.dynamic-name');
                const rankingElement = element.querySelector('.deslide-item > .deslide-item-content > .desi-sub-text');
                const descriptionElement = element.querySelector('.desi-description');
                const watchButtonElement = element.querySelector('.desi-buttons > .btn-secondary') as HTMLAnchorElement;
                const bannerElement = element.querySelector('.deslide-cover > .deslide-cover-img > img');

                const title = titleElement ? titleElement.textContent : '';
                const ranking = rankingElement ? rankingElement.textContent : '';
                const description = descriptionElement ? descriptionElement.textContent?.replace(/\n/g, '').trim() : '';
                const slug = watchButtonElement ? watchButtonElement.getAttribute('href')?.replace("https://hianime.to/watch/", "").replace("/", "") : '';
                const banner = bannerElement ? bannerElement.getAttribute('data-src') : '';

                const types: string[] = [];
                element.querySelectorAll('.deslide-item > .deslide-item-content > .sc-detail > .scd-item').forEach((detail) => {
                    const text = detail?.textContent;
                    if (text) {
                        types.push(text.replace(/\n/g, '').trim());
                    }
                });

                return {
                    title,
                    ranking,
                    types,
                    description,
                    slug,
                    banner
                };
            });

            if (content && content.title) { // Ensure that we have a valid title before pushing to slides_data
                slides_data.push(content);
            }
        }

        this.close();

        return slides_data;
    }


    // Helper Functionalities

    async get_page(url: string): Promise<Page | null> {
        try {
            const page = await this.browser.newPage();
            await page.goto(this.BASE_URL + url, { waitUntil: 'domcontentloaded' })
            return page;
        } catch (error) {
            console.log(error);
            return null;
        }
    }

}