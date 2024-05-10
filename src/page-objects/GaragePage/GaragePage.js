

export class GaragePage {
    constructor(page, url) {
            this._page = page
            this._url = url
            this.addCarButton = page.locator('div.panel-page_heading.d-flex.justify-content-between > button')

        }

        get page (){
            return this._page
        }

        async navigate(){
            await this._page.goto("")
        }

}