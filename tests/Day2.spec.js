// import {test , expect} from '@playwright/test'

// test('Login Check' , async ({page}) =>{
//     await page.goto('https://www.facebook.com/')
//     await page.locator('//input[@id="email"]').fill('monsterwiky@gmail.com')
//     await page.locator('//input[@name="pass"]').fill('Maanja')
//     await page.locator('//button[text()="Log in"]').click()
//     await page.waitForTimeout(3000)
// });


import {test , expect} from '@playwright/test'

test('Login Check' , async ({page}) =>{
    await page.goto('https://www.instagram.com/accounts/login/')
    await page.locator('//input[@autocomplete="username webauthn"]').fill("Vishnu_appiyan")
    await page.locator('//input[@type="password"]').fill('Vishnu@123')
    await page.locator('//span[text()="Log in"]').click()
    await page.waitForTimeout(3000)
    
})




