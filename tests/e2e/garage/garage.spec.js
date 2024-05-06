import {test, expect} from "../../../src/fixtures/userGaragePage";
import {AddCarPopup} from "../../../src/page-objects/GaragePage/components/AddCarPopup";

test.describe("Garage", () => {
    test("Should add a car", async ({garagePage}, page) => {

        await expect(garagePage.addCarButton).toBeVisible()

        await garagePage.addCarButton.click()

        const addCarPopup = new AddCarPopup(page)

        await addCarPopup.brandSelection.selectOption("Audi")

        await addCarPopup.modelSelection.selectOption("A6")

        await addCarPopup.mileadgeInput.fill('150000')

        await addCarPopup.addCarToGarageButton.click()

    })
})