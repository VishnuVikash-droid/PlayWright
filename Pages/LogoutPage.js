export class LogoutPage{
    constructor(page){
        this.page = page
        
        this.LogoutBtn = page.locator('//a[text()="Log out"]')
    }
    async visitUrl(){
        await this.page.goto('https://practicetestautomation.com/logged-in-successfully/')
    }
    async LogoutButton(){
        await this.LogoutBtn.click()
    }
}