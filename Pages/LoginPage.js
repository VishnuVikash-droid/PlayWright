export class LoginPage {
    constructor(page){
        this.page = page
        this.username = page.locator('//input[@id="username"]')
        this.password = page.locator('//input[@id="password"]')
        this.LoginBtn = page.locator('//button[@id="submit"]')
        this.successTitle = page.locator('//h1[text()="Logged In Successfully"]')
        this.successMessage = page.locator('//p[@class="has-text-align-center"]') 
    }
    async visitUrl(){
        await this.page.goto('https://practicetestautomation.com/practice-test-login/')
    }
    async enterUsername(uname){
        await this.username.fill(uname)
    }
    async enterPassword(pword){
        await this.password.fill(pword)
    }
    async buttonClick(){
        await this.LoginBtn.click()
    }
    async getSuccessTitle(){
        return await this.successTitle.textContent()
    }
    async getSuccessMessage(){
       return await this.successMessage.textContent()
    }
    async PrintMessages(){
        const title = await this.getSuccessTitle()
        const msg = await this.getSuccessMessage()
        console.log(title)
        console.log(msg)
    }
}
