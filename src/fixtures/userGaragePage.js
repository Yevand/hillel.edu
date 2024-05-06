import {expect as baseExpect, request as baseRequest, test as base} from "@playwright/test";
import {GaragePage} from '../page-objects/GaragePage/GaragePage';
import {authFile} from "../constants.js";
import APIClient from "../client/APICLient";

export const test = base.extend({
    garagePage: async ({browser}, use) => {
        const ctx = await browser.newContext({
            storageState: authFile
        })
        const page = await ctx.newPage()
        const garagePage = new GaragePage(page)
        await garagePage.navigate()

        await use(garagePage)
    },

    apiNewUser: async ({}, use)=>{
        const client = await APIClient.authenticateWithNewUser('')
        await use(client)
    },

    page: async ({browser}, use)=>{
        const ctx = await browser.newContext({
            storageState: authFile
        })
        const page = await ctx.newPage()

        await use(page)

        await ctx.close()
    }
})
export const request = baseRequest
export const expect = baseExpect