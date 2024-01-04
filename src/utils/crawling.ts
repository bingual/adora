import db from '@/utils/db';
import moment from 'moment-timezone';
import puppeteer from 'puppeteer';
import fs from 'fs';
import imgDownload from 'image-downloader';
import path from 'path';

// 편의성 개선은 나중에
const crawling = async (provider: number) => {
    const browser = await puppeteer.launch({
        headless: 'new',
    });
    const page = await browser.newPage();

    const nowDate = moment().tz('Asia/Seoul').format('YYYYMM');

    const progress = 'color: #99CCFF;';
    const completion = 'color: #9DD84B';

    if (provider === 1) {
        const brand = async () => {
            type BrandTypes = {
                brand_name: string;
                description: string;
                thumbnail: string;
            };
            type ProdTypes = {
                brand_name: string;
                thumbnail: string;
            };

            const brandData: BrandTypes[] = [];
            const prodData: ProdTypes[] = [];

            const brandDir = path.join(
                __dirname,
                '..',
                '..',
                'public',
                'brand',
                nowDate,
            );

            const prodDir = path.join(
                __dirname,
                '..',
                '..',
                'public',
                'brand',
                nowDate,
                'product',
            );

            const brandPath = `/brand/${nowDate}`;
            const prodPath = `/brand/${nowDate}/product`;

            if (!fs.existsSync(brandDir)) {
                fs.mkdirSync(brandDir, { recursive: true });
            }
            if (!fs.existsSync(prodDir)) {
                fs.mkdirSync(prodDir, { recursive: true });
            }

            await page.goto(`https://kkst.kr/brand/`);

            const baseSel = 'div.brand-wr div.brand-list-area div.brand-item';

            const brandTitleSel = `${baseSel} > div.brand-title > a > div.right-menu div.brand-name > h3`;
            const brandDescSel = `${baseSel} > div.brand-title > a > div.right-menu div.brand-name > p`;

            const brandThumbnailSel = `${baseSel} > div.brand-title > a > div.left-area div.brand-thum > img`;
            const prodThumbnailSel = `${baseSel} > div > ul.brand-product-wr > li > div.thumbnail > a > img`;

            const els = await page.$$(baseSel);

            for (const [idx, el] of els.entries()) {
                const [brandNameEl, brandDescEl, brandThumbEl, prodThumbEls] =
                    await Promise.all([
                        el.$(brandTitleSel),
                        el.$(brandDescSel),
                        el.$(brandThumbnailSel),
                        el.$$(prodThumbnailSel),
                    ]);

                const [brandName, brandDesc, brandThumb] = await Promise.all([
                    brandNameEl?.evaluate((el) => el.textContent!.trim())!,
                    brandDescEl?.evaluate((el) => el.textContent!.trim())!,
                    brandThumbEl?.evaluate((el) => el.src!.trim())!,
                ]);

                brandData.push({
                    brand_name: brandName,
                    description: brandDesc,
                    thumbnail: `${brandPath}/${brandThumb.split('/').at(-1)}`,
                });

                await imgDownload.image({
                    url: brandThumb,
                    dest: brandDir,
                });

                for (const prodThumbEl of prodThumbEls) {
                    const prodThumb = await prodThumbEl.evaluate((el) =>
                        el.src!.trim(),
                    )!;

                    prodData.push({
                        brand_name: brandName,
                        thumbnail: `${prodPath}/${prodThumb.split('/').at(-1)}`,
                    });

                    await imgDownload.image({
                        url: prodThumb,
                        dest: prodDir,
                    });
                }
                console.log(
                    `%c Crawling in Progress... [${idx + 1}/${els.length}]`,
                    progress,
                );
            }

            await db.brand.createMany({
                data: brandData,
            });

            await db.brand_group.createMany({
                data: prodData,
            });
        };
        await brand();
        await browser.close();
        console.log('%c Crawling Completion!', completion);
    }

    if (provider === 2) {
        const shoppingProduct = async (
            cateNum: number,
            maxPageNum: number,
            cate: string,
        ) => {
            type ProdTypes = {
                brand_name: string;
                product_name: string;
                off_rate: number;
                price: number;
                origin_price: number;
                thumbnail: string;
                category: string;
                stock_quantity: number;
            };

            const prodData: ProdTypes[] = [];

            const prodDir = path.join(
                __dirname,
                '..',
                '..',
                'public',
                'product',
                nowDate,
            );
            const prodPath = `/product/${nowDate}`;

            if (!fs.existsSync(prodDir)) {
                fs.mkdirSync(prodDir);
            }

            for (let i = 1; i <= maxPageNum; i++) {
                await page.goto(
                    `https://kkst.kr/shopping/?cate_no=${cateNum}&page=${i}`,
                );

                const baseSel =
                    'div.shopping-wr > div.ec-base-product ul.prdList > li.xans-record-';

                const brandNameSel = `${baseSel} > div.description > div.flex-wr > a`;
                const prodNameSel = `${baseSel} > div.description > div.flex-wr > div.name > a > span:nth-child(2)`;

                const offRateSel = `${baseSel} > div.description > div.flex-wr > div.price-wr > p.rate`;
                const priceSel = `${baseSel} > div.description > div.flex-wr > div.price-wr > p.price`;
                const originPriceSel = `${baseSel} > div.description > div.flex-wr > div.price-wr > p.origin_price`;

                const thumbnailSel = `${baseSel} > div.thumbnail > div.prdImg > a > img`;
                const soldOutSel = `${baseSel} > div.thumbnail > div.sold-out-ico > img`;

                const els = await page.$$(baseSel);

                for (const el of els) {
                    const [
                        brandNameEl,
                        prodNameEl,
                        offRateEl,
                        priceEl,
                        originPriceEl,
                        prodThumbEl,
                        soldOutEl,
                    ] = await Promise.all([
                        el.$(brandNameSel),
                        el.$(prodNameSel),
                        el.$(offRateSel),
                        el.$(priceSel),
                        el.$(originPriceSel),
                        el.$(thumbnailSel),
                        el.$(soldOutSel),
                    ]);

                    const [
                        brandName,
                        prodName,
                        offRate,
                        price,
                        originPrice,
                        prodThumb,
                        soldOut,
                    ] = await Promise.all([
                        brandNameEl?.evaluate((el) =>
                            el
                                .textContent!.replace(
                                    '9999아카이브',
                                    '9999 아카이브',
                                )
                                .trim(),
                        )!,
                        prodNameEl?.evaluate((el) => el.textContent!.trim())!,
                        offRateEl?.evaluate((el) =>
                            Number(el.textContent?.replaceAll('%', '').trim()),
                        ) ?? 0,
                        priceEl?.evaluate((el) =>
                            Number(
                                el.textContent
                                    ?.replaceAll('₩', '')
                                    .replaceAll(',', '')
                                    .trim(),
                            ),
                        ) ?? 0,
                        originPriceEl?.evaluate((el) =>
                            Number(
                                el.textContent
                                    ?.replaceAll('₩', '')
                                    .replaceAll(',', '')
                                    .trim(),
                            ),
                        ) ?? 0,
                        prodThumbEl?.evaluate((el) => el.src)!,
                        soldOutEl?.evaluate((el) => el.src) ? 0 : 10,
                    ]);

                    prodData.push({
                        brand_name: brandName,
                        product_name: prodName,
                        off_rate: offRate,
                        price: price,
                        origin_price: originPrice,
                        thumbnail: `${prodPath}/${prodThumb.split('/').at(-1)}`,
                        category: cate,
                        stock_quantity: soldOut,
                    });

                    await imgDownload.image({
                        url: prodThumb,
                        dest: prodDir,
                    });
                }
                console.log(
                    `%c Crawling in Progress... [${i}/${maxPageNum}]`,
                    progress,
                );
            }

            await db.product.createMany({
                data: prodData,
            });
        };

        const shoppingCase = [
            {
                cate_no: 141,
                maxPageNum: 11,
                cate: 'outer',
            },
            {
                cate_no: 142,
                maxPageNum: 10,
                cate: 'top',
            },
            {
                cate_no: 143,
                maxPageNum: 6,
                cate: 'pants',
            },
            {
                cate_no: 144,
                maxPageNum: 1,
                cate: 'shoes',
            },
            {
                cate_no: 145,
                maxPageNum: 2,
                cate: 'accessory',
            },
            {
                cate_no: 146,
                maxPageNum: 1,
                cate: 'grooming',
            },
        ];

        for (const [
            idx,
            { cate_no, maxPageNum, cate },
        ] of shoppingCase.entries()) {
            console.log(
                `%c Overall Progress [${idx + 1}/${shoppingCase.length}]`,
                progress,
            );
            await shoppingProduct(cate_no, maxPageNum, cate);
        }

        await browser.close();
        console.log('%c Crawling Completion!', completion);
    }
};
crawling(2);
