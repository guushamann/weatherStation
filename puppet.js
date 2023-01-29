import puppeteer from 'puppeteer';

export const getImage = async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto('http://localhost:1337/');

    // Set screen size
    await page.setViewport({ width: 400, height: 300 });
    await page.screenshot({ path: 'test.png', fullPage: true })
    await browser.close();
}