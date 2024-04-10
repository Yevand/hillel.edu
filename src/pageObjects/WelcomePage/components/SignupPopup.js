

export class SignupPopup {
	_signupNameSelector = 'input[id = "signupName"]';
	_signupLastNameSelector = 'input[id = "signupLastName"]';
	_signupEmailSelector = 'input[id = "signupEmail"]';
	_signupPasswordSelector = 'input[id = "signupPassword"]';
	_signupRepeatPasswordSelector = 'input[id = "signupRepeatPassword"]';
	_registerBtnSelector = 'div.modal-footer > button';

	constructor(page) {
		this._page = page;
		this.container = page.locator('app-signup-modal');

		this.signupName = this.container.locator(this._signupNameSelector);
		this.nameErrorMsg = this.container.locator(`${this._signupNameSelector} + .invalid-feedback > p`);

		this.signupLastName = this.container.locator(this._signupLastNameSelector);
		this.lastNameErrorMsg = this.container.locator(`${this._signupLastNameSelector} + .invalid-feedback > p`);

		this.signupEmail = this.container.locator(this._signupEmailSelector);
		this.emailErrorMsg = this.container.locator(`${this._signupEmailSelector} + .invalid-feedback > p`);

		this.signupPassword = this.container.locator(this._signupPasswordSelector);
		this.pswErrorMsg = this.container.locator(`${this._signupPasswordSelector} + .invalid-feedback > p`);

		this.signupRepeatPassword = this.container.locator(this._signupRepeatPasswordSelector);
		this.reEnterErrorMsg = this.container.locator(`${this._signupRepeatPasswordSelector}+ .invalid-feedback > p`);

		this.registerBtn = this.container.locator(this._registerBtnSelector);
	}
}
