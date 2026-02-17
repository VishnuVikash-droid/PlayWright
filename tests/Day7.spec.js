// import {test, expect} from '@playwright/test'
// test('DynamicHandling', async ({browser}) =>{
//     const context=await browser.newContext()
//     const page=await context.newPage()
//     await page.goto('https://www.amazon.in/')
//     await page.locator('//input[@id="twotabsearchtextbox"]').fill('iphone')
//     await page.locator('//input[@id="nav-search-submit-button"]').click()

//     const [newPage] = await Promise.all([
//         context.waitForEvent('page'),
//         //page.click('//h2[text()="Results"]//ancestor::div[@data-cel-widget="search_result_1"]//following-sibling::div[@data-asin="B0CHX7FDD7"]//descendant::h2[contains(@aria-label , "iPhone 15 Pro Max (512 GB) - White Titanium")]')
//         // page.click('//h2[text()="Results"]//ancestor::div[@class="sg-col-inner"]//following-sibling::div[@data-asin="B0FGY7C13L"]//descendant::h2[contains(@aria-label , "Pixel 9A (Porcelain, 256 GB) (8 GB RAM)")]')
//         page.click('//h2[text()="Results"]//ancestor::div[@data-cel-widget="search_result_1"]//following-sibling::div[@data-asin="B0FGY7C13L"]//descendant::h2[contains(@aria-label,"Pixel 9A (Porcelain, 256 GB) (8 GB RAM)")]')

//     ])
//     await newPage.waitForLoadState()
    
//     const title =await newPage.title()
//     console.log(title)

// })

import {test, expect} from '@playwright/test'
test('DynamicHandling', async ({browser}) =>{
    const context=await browser.newContext()
    const page=await context.newPage()
    await page.goto('https://www.flipkart.com/')
    await page.locator('//input[@title="Search for Products, Brands and More"]').fill('iphone')
    await page.locator('//button[@type="submit"]').click()
    // await page.pause()

    const [newPage] = await Promise.all([
        context.waitForEvent('page'),
        page.click('//div[@class="WNv7PR dKeN6y"]//ancestor::div[@class="QSCKDh eRsYMo col-12-12"]//following-sibling::div[@class="lvJbLV col-12-12"]//descendant::div[contains(text() , "Apple iPhone 16 (Ultramarine, 128 GB)")]')
    ])
    await newPage.waitForLoadState()
    
    const title =await newPage.title()
    console.log(title)

})
