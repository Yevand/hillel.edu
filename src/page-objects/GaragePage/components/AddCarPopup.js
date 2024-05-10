

export class AddCarPopup {
    _addBrandSelector = "addCarBrand"
    _addModelSelector = "addCarModel"
    _addMileageSelector = "addCarMileage"
    _addCarToGarageButtonSelector = `${this.container} .btn btn-primary`

    constructor(page) {
        this._page = page
        this.container = this._page.locator('app-add-car-modal')
        // this.container = page.getByTestId('addCarBrand')
        this.brandSelection = this.container.locator(this._addBrandSelector)
        this.modelSelection = this.container.locator(this._addModelSelector)
        this.mileadgeInput = this.container.locator(this._addMileageSelector)
        this.addCarToGarageButton = this.container.locator(this._addCarToGarageButtonSelector)


    }
}