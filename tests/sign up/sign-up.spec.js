import {test, expect} from '@playwright/test';
import {USERS} from '../../src/data/users';
import {WelcomePage} from '../../src/pageObjects/WelcomePage/WelcomePage';
import {SignupPopup} from '../../src/pageObjects/WelcomePage/components/SignupPopup';

test.describe('Sign up', () => {
	test.describe('Positive', () => {
		let welcomePage;
		let signupPopup;
		test.beforeEach(async ({page}) => {
			welcomePage = new WelcomePage(page);
			signupPopup = new SignupPopup(page);

			await welcomePage.navigate();
			await welcomePage.openPopup(page);
		});

		test('Should type all valid data and register user', async ({page}) => {
			await signupPopup.signupName.focus();
			await signupPopup.signupName.fill(USERS.user1.firstName);

			await signupPopup.signupLastName.fill(USERS.user1.lastName);

			await signupPopup.signupEmail.fill(USERS.user1.email);

			await signupPopup.signupPassword.fill(USERS.user1.password);

			await signupPopup.signupRepeatPassword.fill(USERS.user1.password);

			await expect(signupPopup.registerBtn).toBeEnabled();
			await signupPopup.registerBtn.click();

			await expect(page).toHaveURL('panel/garage');
		});
	});

	test.describe('Negative', () => {
		test.describe('Invalid data in Name input', () => {
			let welcomePage;
			let signupPopup;
			test.beforeEach(async ({page}) => {
				welcomePage = new WelcomePage(page);
				signupPopup = new SignupPopup(page);

				await welcomePage.navigate();
				await welcomePage.openPopup();
			});

			test('Should left Name input field empty', async () => {
				await signupPopup.signupName.focus();
				await signupPopup.signupName.blur();

				await signupPopup.nameErrorMsg.innerText();

				await expect(signupPopup.signupName).toHaveCSS('border-color', 'rgb(220, 53, 69)');
				await expect(signupPopup.nameErrorMsg).toHaveText('Name required');

				await expect(signupPopup.registerBtn).toBeDisabled();
			});

			test('Should type wrong data in Name input field', async () => {
				await signupPopup.signupName.focus();
				await signupPopup.signupName.fill('Тарас');
				await signupPopup.signupName.blur();

				await signupPopup.nameErrorMsg.innerText();

				await expect(signupPopup.signupName).toHaveCSS('border-color', 'rgb(220, 53, 69)');
				await expect(signupPopup.nameErrorMsg).toHaveText('Name is invalid');

				await signupPopup.signupName.fill('T');
				await signupPopup.signupName.blur();

				await signupPopup.nameErrorMsg.innerText();

				await expect(signupPopup.signupName).toHaveCSS('border-color', 'rgb(220, 53, 69)');
				await expect(signupPopup.nameErrorMsg).toHaveText('Name has to be from 2 to 20 characters long');

				await signupPopup.signupName.fill('TarasTarasTarasTarasT');
				await signupPopup.signupName.blur();

				await signupPopup.nameErrorMsg.innerText();

				await expect(signupPopup.signupName).toHaveCSS('border-color', 'rgb(220, 53, 69)');
				await expect(signupPopup.nameErrorMsg).toHaveText('Name has to be from 2 to 20 characters long');

				await expect(signupPopup.registerBtn).toBeDisabled();
			});
		});

		test.describe('Invalid data in Last name input', () => {
			let welcomePage;
			let signupPopup;
			test.beforeEach(async ({page}) => {
				welcomePage = new WelcomePage(page);
				signupPopup = new SignupPopup(page);

				await welcomePage.navigate();
				await welcomePage.openPopup();
			});

			test('Should left Last name input field empty', async () => {
				await signupPopup.signupLastName.focus();
				await signupPopup.signupLastName.blur();

				await signupPopup.lastNameErrorMsg.innerText();

				await expect(signupPopup.signupLastName).toHaveCSS('border-color', 'rgb(220, 53, 69)');
				await expect(signupPopup.lastNameErrorMsg).toHaveText('Last name required');

				await expect(signupPopup.registerBtn).toBeDisabled();
			});

			test('Should type wrong data in Last name input field', async () => {
				await signupPopup.signupLastName.focus();
				await signupPopup.signupLastName.fill('Тарасенко');
				await signupPopup.signupLastName.blur();

				await signupPopup.lastNameErrorMsg.innerText();

				await expect(signupPopup.signupLastName).toHaveCSS('border-color', 'rgb(220, 53, 69)');
				await expect(signupPopup.lastNameErrorMsg).toHaveText('Last name is invalid');

				await signupPopup.signupLastName.fill('T');
				await signupPopup.signupLastName.blur();

				await signupPopup.lastNameErrorMsg.innerText();

				await expect(signupPopup.signupLastName).toHaveCSS('border-color', 'rgb(220, 53, 69)');
				await expect(signupPopup.lastNameErrorMsg).toHaveText('Last name has to be from 2 to 20 characters long');

				await signupPopup.signupLastName.fill('TarasTarasTarasTarasTara');
				await signupPopup.signupLastName.blur();

				await signupPopup.lastNameErrorMsg.innerText();

				await expect(signupPopup.signupLastName).toHaveCSS('border-color', 'rgb(220, 53, 69)');
				await expect(signupPopup.lastNameErrorMsg).toHaveText('Last name has to be from 2 to 20 characters long');

				await expect(signupPopup.registerBtn).toBeDisabled();
			});
		});

		test.describe('Invalid data in Email input', () => {
			let welcomePage;
			let signupPopup;
			test.beforeEach(async ({page}) => {
				welcomePage = new WelcomePage(page);
				signupPopup = new SignupPopup(page);

				await welcomePage.navigate();
				await welcomePage.openPopup();
			});

			test('Should left Email input field empty', async () => {
				await signupPopup.signupEmail.focus();
				await signupPopup.signupEmail.blur();

				await signupPopup.emailErrorMsg.innerText();

				await expect(signupPopup.signupEmail).toHaveCSS('border-color', 'rgb(220, 53, 69)');
				await expect(signupPopup.emailErrorMsg).toHaveText('Email required');

				await expect(signupPopup.registerBtn).toBeDisabled();
			});

			test('Should type wrong data in Email input field', async () => {
				await signupPopup.signupEmail.focus();
				await signupPopup.signupEmail.fill('user@invalid-tld.123');
				await signupPopup.signupEmail.blur();

				await signupPopup.emailErrorMsg.innerText();

				await expect(signupPopup.signupEmail).toHaveCSS('border-color', 'rgb(220, 53, 69)');
				await expect(signupPopup.emailErrorMsg).toHaveText('Email is incorrect');

				await signupPopup.signupEmail.fill('user#domain.com');
				await signupPopup.signupEmail.blur();

				await signupPopup.emailErrorMsg.innerText();

				await expect(signupPopup.signupEmail).toHaveCSS('border-color', 'rgb(220, 53, 69)');
				await expect(signupPopup.emailErrorMsg).toHaveText('Email is incorrect');

				await signupPopup.signupEmail.fill('@.com');
				await signupPopup.signupEmail.blur();

				await signupPopup.emailErrorMsg.innerText();

				await expect(signupPopup.signupEmail).toHaveCSS('border-color', 'rgb(220, 53, 69)');
				await expect(signupPopup.emailErrorMsg).toHaveText('Email is incorrect');

				await expect(signupPopup.registerBtn).toBeDisabled();
			});
		});

		test.describe('Invalid data in Password input', () => {
			let welcomePage;
			let signupPopup;
			test.beforeEach(async ({page}) => {
				welcomePage = new WelcomePage(page);
				signupPopup = new SignupPopup(page);

				await welcomePage.navigate();
				await welcomePage.openPopup();
			});

			test('Should left Password input field empty', async () => {
				await signupPopup.signupPassword.focus();
				await signupPopup.signupPassword.blur();

				await signupPopup.pswErrorMsg.innerText();

				await expect(signupPopup.signupPassword).toHaveCSS('border-color', 'rgb(220, 53, 69)');
				await expect(signupPopup.pswErrorMsg).toHaveText('Password required');

				await expect(signupPopup.registerBtn).toBeDisabled();
			});

			test('Should type wrong data in Password input field', async () => {
				await signupPopup.signupPassword.focus();
				await signupPopup.signupPassword.fill('1234567');
				await signupPopup.signupPassword.blur();

				await signupPopup.pswErrorMsg.innerText();

				await expect(signupPopup.signupPassword).toHaveCSS('border-color', 'rgb(220, 53, 69)');
				await expect(signupPopup.pswErrorMsg).toHaveText(
					'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter'
				);

				await signupPopup.signupPassword.fill('12345678912345Te');
				await signupPopup.signupPassword.blur();

				await signupPopup.pswErrorMsg.innerText();

				await expect(signupPopup.signupPassword).toHaveCSS('border-color', 'rgb(220, 53, 69)');
				await expect(signupPopup.pswErrorMsg).toHaveText(
					'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter'
				);

				await signupPopup.signupPassword.fill('12345678912345T');
				await signupPopup.signupPassword.blur();

				await signupPopup.pswErrorMsg.innerText();

				await expect(signupPopup.signupPassword).toHaveCSS('border-color', 'rgb(220, 53, 69)');
				await expect(signupPopup.pswErrorMsg).toHaveText(
					'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter'
				);

				await signupPopup.signupPassword.fill('12345678912345t');
				await signupPopup.signupPassword.blur();

				await signupPopup.pswErrorMsg.innerText();

				await expect(signupPopup.signupPassword).toHaveCSS('border-color', 'rgb(220, 53, 69)');
				await expect(signupPopup.pswErrorMsg).toHaveText(
					'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter'
				);

				await expect(signupPopup.registerBtn).toBeDisabled();
			});
		});

		test.describe('Invalid data in Re-enter input', () => {
			let welcomePage;
			let signupPopup;
			test.beforeEach(async ({page}) => {
				welcomePage = new WelcomePage(page);
				signupPopup = new SignupPopup(page);

				await welcomePage.navigate();
				await welcomePage.openPopup();
			});

			test('Should left Re-enter input field empty', async () => {
				await signupPopup.signupRepeatPassword.focus();
				await signupPopup.signupRepeatPassword.blur();

				await signupPopup.reEnterErrorMsg.innerText();

				await expect(signupPopup.signupRepeatPassword).toHaveCSS('border-color', 'rgb(220, 53, 69)');
				await expect(signupPopup.reEnterErrorMsg).toHaveText('Re-enter password required');

				await expect(signupPopup.registerBtn).toBeDisabled();
			});

			test('Should type wrong data in Re-enter input field', async () => {
				await signupPopup.signupPassword.fill('Test1234');
				await signupPopup.signupRepeatPassword.fill('Test1235');
				await signupPopup.signupRepeatPassword.blur();

				await signupPopup.reEnterErrorMsg.innerText();

				await expect(signupPopup.signupRepeatPassword).toHaveCSS('border-color', 'rgb(220, 53, 69)');
				await expect(signupPopup.reEnterErrorMsg).toHaveText('Passwords do not match');

				await expect(signupPopup.registerBtn).toBeDisabled();
			});
		});
	});
});
