import {SignupPopup} from './components/SignupPopup';

export class WelcomePage {

    constructor(page) {
        this._page = page

        this.signUpBtn = page.locator('button', {hasText: 'Sign up'});
    }

    async navigate() {
        await this._page.goto("")
    }

    async openPopup() {
        await this.signUpBtn.click();
        return new SignupPopup(this._page)
    }

}