export class ProfilePage {
    constructor(page) {
        this._page = page
        this.openProfileButton = page.locator('nav > div > a.btn.btn-white.btn-sidebar.sidebar_btn.-profile')
        this.profileNameSelector = page.locator('app-profile > div > div.panel-page_content > div > p')
        this.profileDOBSelector = page.locator('app-profile > div > div.panel-page_content > div > ul > li:nth-child(1) > span.profile-info_text')
        this.profileCountrySelector = page.locator('app-profile > div > div.panel-page_content > div > ul > li:nth-child(2) > span.profile-info_text')
    }

    get page(){
        return this._page
    }

    get profileName(){
        return this.profileNameSelector
    }

    get profileDOB(){
        return this.profileDOBSelector
    }

    get profileCountry(){
        return this.profileCountrySelector
    }

}