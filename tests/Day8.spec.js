import {test, expect} from '@playwright/test'
test('WebTable' , async({page}) =>{

    await page.goto('https://qavbox.github.io/demo/webtable/')
    const Totalrows =await page.locator('//table[@id="table02"]//tbody//tr').allTextContents()
    console.log(Totalrows.length)

    //Singlerow
    const SingleRow = await page.locator('//table[@id="table02"]//tbody//tr[1]')
    //console.log(SingleRow)
    for(let row of await SingleRow.allTextContents()){
        console.log(row)
        expect(row).toContain('Tiger Nixon')
    }

    //SingleCloumn
    const value = await page.locator('//table[@id="table02"]//tbody//tr//td[1]').allTextContents()
    console.log(value)

    // //Particular Cell
    // const ParticularCell = await page.locator('//table[@id="table02"]//tbody//tr[2]//td[3]').textContent()
    // console.log(ParticularCell)
    // expect(ParticularCell).toBe('61')
})