import { test , expect } from '@playwright/test'
test('Dropdown' , async ({page})=>{
    await page.goto('https://letcode.in/dropdowns')
    // const SingleElement=await page.locator('//select[@id="fruits"]')
    // await SingleElement.selectOption({index:3})
    // const text=await SingleElement.locator('option:checked').textContent()
    // console.log("Select Fruit:",text)
    // await page.waitForTimeout(3000)

    // await page.goto('https://letcode.in/dropdowns')
    // const MultiElement=await page.locator('//select[@id="superheros"]')
    // await MultiElement.selectOption([{index:1},{label:"Black Panther"},{value:"bt"}])
    // const SuperHeros=await MultiElement.locator('option:checked').allTextContents()
    // console.log("Select Super Heros:", SuperHeros)
    // await page.waitForTimeout(3000)

    const dropdown = page.locator('select')
    const values = await dropdown.locator('option').allTextContents()
    console.log(values)
})