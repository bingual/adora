import puppeteer from 'puppeteer';
import db from '@/utils/db';
import moment from 'moment-timezone';

const fn = async () => {
    const browser = await puppeteer.launch({
        headless: 'new',
    });
    const page = await browser.newPage();
    await page.goto(`http://localhost:4000/test`);

    type itemTypes = {
        off_rate: string;
        price: string;
        origin_price: string;
    };

    const items: itemTypes[] = [];

    // CSS Selector
    const offRateSelector = `.description .off_rate > p`;
    const priceSelector = `.description .price > p`;
    const originPriceSelector = `.description .origin_price > p`;

    // 엘리먼트에서 text 추출 후 배열로 반환
    const [offRates, prices, originPrices] = await Promise.all([
        page.$$eval(offRateSelector, (els) => {
            return els.map((el) => el.textContent);
        }),
        page.$$eval(priceSelector, (els) => {
            return els.map((el) => el.textContent);
        }),
        page.$$eval(originPriceSelector, (els) => {
            return els.map((el) => el.textContent);
        }),
    ]);

    console.log(
        `offRates length : ${offRates.length}\nprices length : ${prices.length}\noriginPrices length : ${originPrices.length}`,
    );

    // 객체 생성
    for (let i = 0; i < 5; i++) {
        const item = {
            off_rate: offRates[i] || '0',
            price: prices[i]!,
            origin_price: originPrices[i] || '0',
        };
        items.push(item);
    }
    console.log(items);

    await browser.close();
};

const fn2 = async () => {
    const browser = await puppeteer.launch({
        headless: 'new',
    });
    const page = await browser.newPage();
    await page.goto(`http://localhost:4000/test`);

    type itemTypes = {
        off_rate: string;
        price: string;
        origin_price: string;
    };

    const items: itemTypes[] = [];

    // CSS Selector
    const offRateSelector = `.description .off_rate > p`;
    const priceSelector = `.description .price > p`;
    const originPriceSelector = `.description .origin_price > p`;

    // 엘리먼트에서 text 추출 후 배열로 반환
    const descriptions = await page.$$('.description');
    for (const description of descriptions) {
        const off_rate_element = await description.$(offRateSelector);
        const price_element = await description.$(priceSelector);
        const origin_price_element = await description.$(originPriceSelector);

        const off_rate =
            (await (
                await off_rate_element?.getProperty('textContent')
            )?.jsonValue()) ?? '0';
        const price =
            (await (
                await price_element?.getProperty('textContent')
            )?.jsonValue()) ?? '0';
        const origin_price =
            (await (
                await origin_price_element?.getProperty('textContent')
            )?.jsonValue()) ?? '0';
        items.push({ off_rate, price, origin_price });
    }

    console.log(items);
};

fn2();

const fn3 = async () => {
    const getUser = await db.user.findFirst({
        where: {
            username: 'bingual@naver.com',
        },
    });

    const date = moment(getUser?.created_at)
        .tz('Asia/Seoul')
        .format('YYYY-MM-DD HH:mm:ss');
    return console.log(date);
};
