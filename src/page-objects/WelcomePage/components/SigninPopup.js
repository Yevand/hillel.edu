

export class SigninPopup {
    _emailInputSelector = '#signinEmail'
    _passwordInputSelector = '#signinPassword'

    constructor(page) {
        this._page = page
        this.container = page.locator('app-signin-modal')

        this.emailInput =  this.container.locator(this._emailInputSelector)
        this.passwordInput =  this.container.locator(this._passwordInputSelector)
        this.signInButton = this.container.locator('.btn-primary')
    }
}