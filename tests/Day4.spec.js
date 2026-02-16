import { test , expect} from '@playwright/test'
test('Frames' , async ({page}) =>{
    await page.goto('https://demo.automationtesting.in/Frames.html')
    const singeFrame=page.frameLocator('//iframe[@id="singleframe"]')
    await singeFrame.locator('//input[@type="text"]').fill('Vishnu Vikash')
    await page.locator('(//a[@class="analystic"])[2]').click()

    const multiFrame=page.frameLocator('//iframe[@src="MultipleFrames.html"]')
    const frame = multiFrame.frameLocator('//iframe[@src="SingleFrame.html"]')
    await frame.locator('//input[@type="text"]').fill('Maanja')
})


