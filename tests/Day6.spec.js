import {test , expect} from '@playwright/test'
test('WindowsHandling' , async({browser})=>{
    const context=await browser.newContext()
    const page=await context.newPage()
    await page.goto('https://www.amazon.in/')
    await page.locator('//input[@id="twotabsearchtextbox"]').fill('iphone')
    await page.locator('//input[@id="nav-search-submit-button"]').click()
    await page.pause()

    const [newPage] = await Promise.all([
        context.waitForEvent('page'),
        // page.click('//h2[contains(@aria-label,"Sponsored Ad - iPhone 17 Pro 256 GB")]')
        page.locator()
        
    ])
    await newPage.waitForLoadState()

    const title= await newPage.title()
    console.log(title)
    })

// import {test , expect} from '@playwright/test'
// test('WindowsHandling' , async({browser})=>{
//     const context=await browser.newContext()
//     const page=await context.newPage()
//     await page.goto('https://www.flipkart.com/')
//     await page.locator('//input[@placeholder="Search for Products, Brands and More"]').fill('iphone')
//     await page.locator('//button[@type="submit"]').click()

//     const [newPage] = await Promise.all([
//         context.waitForEvent('page'),
//         page.click('//div[contains(text(),"Apple iPhone 16 (Black, 128 GB)")]')
        
//     ])
//     await newPage.waitForLoadState()

//     const title= await newPage.title()
//     console.log(title)
//     })

    


