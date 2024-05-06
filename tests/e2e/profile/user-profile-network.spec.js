import {test, expect} from "@playwright/test";
import {GaragePage} from "../../../src/page-objects/GaragePage/GaragePage";
import {ProfilePage} from "../../../src/page-objects/ProfilePage/ProfilePage";

test.describe('Profile (network)', () => {
	let garagePage
	let profilePage
    test('Should change the response', async ({page}) => {
		profilePage = new ProfilePage(page)
		garagePage = new GaragePage(page)

		// await garagePage.navigate()

		await page.route('**/users/profile',  (route) => {route.fulfill({
			path: 'tests/e2e/profile/fixtures/profile.json'
			});
		});

		await garagePage.navigate()

		await profilePage.openProfileButton.click()

		await expect(profilePage.profileName).toHaveText('Alexander Melnichenko')

		await expect(profilePage.profileDOB).toHaveText('17.07.2000')

		await expect(profilePage.profileCountry).toHaveText('Czech Republic')

	});
})