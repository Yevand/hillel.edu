import {test as setup} from "@playwright/test";
import {WelcomePage} from "../../src/pageObjects/WelcomePage/WelcomePage";
import {expect} from "../../src/fixtures/userGaragePage";
import {authFile} from "../../src/constants";

setup.describe('Setup', ()=>{
    setup("Login and Save as Yevhenii", async({page})=>{
        const welcomePage = new WelcomePage(page)
        await welcomePage.navigate()
        const signInPopup = await welcomePage.openSignInPopup()
        await signInPopup.emailInput.fill('yevhenii-test@gmail.com');
        await signInPopup.passwordInput.fill('Testpassword123');
        await signInPopup.signInButton.click()

        await expect(page).toHaveURL(/garage/)

        await page.context().storageState({
            path: authFile
        })
    })
})