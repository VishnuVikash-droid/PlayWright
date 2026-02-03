import {test,expect} from '@playwright/test'
test('Alerts' , async ({page}) =>{

    await page.goto('https://demo.automationtesting.in/Alerts.html')
    await page.once('dialog' , async (dialog) =>{
        console.log("Simple Alert:", dialog.message())
        await dialog.accept()
    })
    await page.locator('//button[@class="btn btn-danger"]').click()
    //await page.waitForTimeout(3000)


    await page.locator('(//a[@class="analystic"])[2]').click()
    await page.once('dialog' , async (dialog) =>{
        console.log("Confirm Alert:", dialog.message())
        await dialog.accept()
    })
    await page.locator('//button[@onclick="confirmbox()"]').click()


    await page.locator('(//a[@class="analystic"])[3]').click()
    await page.once('dialog', async (dialog) =>{
        console.log("Prompt Alert:", dialog.message())
        console.log("Default Prompt Alert:", dialog.defaultValue())
        await dialog.accept('vishnu')
    })
    await page.locator('//button[@onclick="promptbox()"]').click()
    const text=await page.locator('//p[@id="demo1"]').textContent()
    console.log(text)
    expect(text).toContain('vishnu')
})