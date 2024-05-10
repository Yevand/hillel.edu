import {SigninPopup} from "./components/SigninPopup";
import {SignupPopup} from "./components/SignupPopup";

export class WelcomePage {

    constructor(page) {
        this._page = page
        this.signInButton =  page.locator('button', {hasText: 'Sign In'})
        this.signUpButton = page.locator('button', {hasText: 'Sign up'});
    }

    async navigate() {
        await this._page.goto("https://qauto.forstudy.space/")
    }

    async openSignInPopup(){
        await this.signInButton.click()
        return new SigninPopup(this._page)
    }

    async openSignUpPopup() {
        await this.signUpButton.click();
        return new SignupPopup(this._page)
    }

}