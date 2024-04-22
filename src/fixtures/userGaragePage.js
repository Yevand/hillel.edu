import {expect as baseExpect, test as base} from "@playwright/test";
import {GaragePage} from '../pageObjects/GaragePage/GaragePage';
import {USER_YEVHENII_STORAGE_STATE_PATH} from "../constants";

export const test = base.extend({
    garagePage: async ({browser}, use) => {
        const ctx = await browser.newContext({
            storageState: USER_YEVHENII_STORAGE_STATE_PATH
        })
        const page = await ctx.newPage()
        const garagePage = new GaragePage(page)
        await garagePage.navigate()

        await use(garagePage)
    }
})

export const expect = baseExpect