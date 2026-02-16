// import {test,expect} from '@playwright/test'
// test('Alerts' , async ({page}) =>{

//     await page.goto('https://demo.automationtesting.in/Alerts.html')
//     await page.once('dialog' , async (dialog) =>{
//         console.log("Simple Alert:", dialog.message())
//         await dialog.accept()
//     })
//     await page.locator('//button[@class="btn btn-danger"]').click()
//     //await page.waitForTimeout(3000)


//     await page.locator('(//a[@class="analystic"])[2]').click()
//     await page.once('dialog' , async (dialog) =>{
//         console.log("Confirm Alert:", dialog.message())
//         await dialog.accept()
//     })
//     await page.locator('//button[@onclick="confirmbox()"]').click()


//     await page.locator('(//a[@class="analystic"])[3]').click()
//     await page.once('dialog', async (dialog) =>{
//         console.log("Prompt Alert:", dialog.message())
//         console.log("Default Prompt Alert:", dialog.defaultValue())
//         await dialog.accept('vishnu')
//     })
//     await page.locator('//button[@onclick="promptbox()"]').click()
//     const text=await page.locator('//p[@id="demo1"]').textContent()
//     console.log(text)
//     expect(text).toContain('vishnu')
// })



import {test, expect} from '@playwright/test'
    test('Alerts' , async({page})=>{
        await page.goto('https://the-internet.herokuapp.com/javascript_alerts')
        page.once('dialog', async(dialog)=>{
            console.log('Js Alert:', dialog.message())
            await dialog.accept()
        })
        await page.locator('//button[text()="Click for JS Alert"]').click()

        page.once('dialog', async (dialog) => {
            console.log('Js Confirm:', dialog.message())
            await dialog.dismiss()
        })
        await page.locator('//button[@onclick="jsConfirm()"]').click()

        page.once("dialog", async (dialog) => {
            console.log('Js Prompt:', dialog.message())
            await dialog.accept('vishnu')
        })
        await page.locator('//button[text()="Click for JS Prompt"]').click()
        await page.waitForTimeout(3000)
        // const text = await page.locator('//h4[text()="Result:"]').allTextContents()
        const text =await page.locator('//p[@id="result"]').textContent()
        console.log(text)
    })
