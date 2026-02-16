import { test , expect } from '@playwright/test'
import { LoginPage } from '../Pages/LoginPage'
import { LogoutPage } from '../Pages/LogoutPage'

test('Login Functionality' , async ({page}) =>{

    const login = new LoginPage(page)
    await login.visitUrl()
    await login.enterUsername('student')
    await login.enterPassword('Password123')
    await login.buttonClick()
    await login.PrintMessages()
})

test('Logout Functionality' , async ({page}) =>{

    const logout = new LogoutPage(page)
    await logout.visitUrl()
    await logout.LogoutButton()
})