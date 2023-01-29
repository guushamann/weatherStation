import puppeteer from 'puppeteer';

export const getImage = async () => {
    const browser = await puppeteer.launch({
        headless: true,
        executablePath: '/usr/bin/chromium-browser',
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    const page = await browser.newPage();

    await page.goto('http://localhost:1337/');

    // Set screen size
    await page.setViewport({ width: 400, height: 300 });
    await page.screenshot({ path: 'weather.png', fullPage: true })
    await browser.close();
}