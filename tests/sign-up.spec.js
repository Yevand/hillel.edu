import {test, expect} from "@playwright/test";

test.describe("Sign up", () => {
    test.describe("Positive", () => {
        test.beforeEach(async ({page}) => {
            await page.goto('')
        })

        test("Should type all valid data and register user", async ({page}) => {
            const signUpBtn = page.locator('button', {hasText: 'Sign up'})
            await signUpBtn.click()

            const popup = page.locator('app-signup-modal')

            const singUpNameInput = popup.locator('input[id = "signupName"]')
            await singUpNameInput.focus
            await singUpNameInput.fill('Rustam')

            const signUpLastNameInput = popup.locator('input[id = "signupLastName"]')
            await signUpLastNameInput.fill('Tarasenko')

            const signUpEmailInput = popup.locator('input[id = "signupEmail"]')
            await signUpEmailInput.fill('aqa-rustam3@gmail.com')

            const signUpPswInput = popup.locator('input[id = "signupPassword"]')
            await signUpPswInput.fill('Test1235')

            const signUpRePswInput = popup.locator('input[id = "signupRepeatPassword"]')
            await signUpRePswInput.fill('Test1235')

            const registerBtn = popup.locator('div.modal-footer > button')
            await expect(registerBtn).toBeEnabled()
            await registerBtn.click()

            await page.waitForURL('**/panel/garage')

            const currentUrl = page.url()
            await expect(currentUrl).toBe('https://qauto.forstudy.space/panel/garage')




        })
    })
    test.describe("Negative", () => {
            test.describe("Invalid data in Name input", () => {
                test.beforeEach(async ({page}) => {
                    await page.goto('')
                })

                test("Should left Name input field empty", async ({page}) => {
                    const signUpBtn = page.locator('button', {hasText: 'Sign up'})
                    await signUpBtn.click()

                    const popup = page.locator('app-signup-modal')
                    const signUpNameInput = popup.locator('input[id = "signupName"]')

                    await signUpNameInput.focus()
                    await signUpNameInput.blur()

                    const nameErrorMsg = popup.locator('form > div:nth-child(1) > div > p')
                    const nameErrorMsgText = await nameErrorMsg.textContent()
                    // const signUpNameInputError = popup.locator('input[id = "signupName"]')
                    // const signUpNameInputStyle = await signUpNameInputError.evaluate((el) => {
                    //     return window.getComputedStyle(el).getPropertyValue('border-color')
                    // })
                    // await expect(signUpNameInputStyle).toBe('rgb(220, 53, 69)')
                    await expect(nameErrorMsgText).toMatch('Name required')

                    const registerBtn = popup.locator('div.modal-footer > button')
                    await expect(registerBtn).toBeDisabled()

                })

                test("Should type wrong data in Name input field", async ({page}) => {
                    const signUpBtn = page.locator('button', {hasText: 'Sign up'})
                    await signUpBtn.click()

                    const popup = page.locator('app-signup-modal')

                    const signUpNameInput = popup.locator('input[id = "signupName"]')
                    await signUpNameInput.focus()
                    await signUpNameInput.fill('Тарас')
                    await signUpNameInput.blur()
                    const nameErrorMsgText1 = await popup.locator('form > div:nth-child(1) > div > p').textContent()
                    // const signUpNameInputError = popup.locator('input[id = "signupName"]')
                    // const signUpNameInputStyle = await signUpNameInputError.evaluate((el) => {
                    //     return window.getComputedStyle(el).getPropertyValue('border-color')
                    // })
                    // await expect(signUpNameInputStyle).toBe('rgb(220, 53, 69)')
                    await expect(nameErrorMsgText1).toMatch('Name is invalid')

                    await signUpNameInput.fill('T')
                    await signUpNameInput.blur()
                    const nameErrorMsgText2 = await popup.locator('form > div:nth-child(1) > div > p').textContent()
                    // const signUpNameInputError = popup.locator('input[id = "signupName"]')
                    // const signUpNameInputStyle = await signUpNameInputError.evaluate((el) => {
                    //     return window.getComputedStyle(el).getPropertyValue('border-color')
                    // })
                    // await expect(signUpNameInputStyle).toBe('rgb(220, 53, 69)')
                    await expect(nameErrorMsgText2).toMatch('Name has to be from 2 to 20 characters long')

                    await signUpNameInput.fill('TarasTarasTarasTarasT')
                    await signUpNameInput.blur()
                    const nameErrorMsgText3 = await popup.locator('form > div:nth-child(1) > div > p').textContent()
                    // const signUpNameInputError = popup.locator('input[id = "signupName"]')
                    // const signUpNameInputStyle = await signUpNameInputError.evaluate((el) => {
                    //     return window.getComputedStyle(el).getPropertyValue('border-color')
                    // })
                    // await expect(signUpNameInputStyle).toBe('rgb(220, 53, 69)')
                    await expect(nameErrorMsgText3).toMatch('Name has to be from 2 to 20 characters long')

                    const registerBtn = popup.locator('div.modal-footer > button')
                    await expect(registerBtn).toBeDisabled()

                })

            })
            test.describe("Invalid data in Last name input", () => {
                test.beforeEach(async ({page}) => {
                    await page.goto('')
                })

                test("Should left Last name input field empty", async ({page}) => {
                    const signUpBtn = page.locator('button', {hasText: 'Sign up'})
                    await signUpBtn.click()

                    const popup = page.locator('app-signup-modal')
                    const signUpLastNameInput = popup.locator('input[id = "signupLastName"]')

                    await signUpLastNameInput.focus()
                    await signUpLastNameInput.blur()

                    const lastNameErrorMsg = popup.locator('form > div:nth-child(2) > div > p')
                    const lastNameErrorMsgText = await lastNameErrorMsg.textContent()

                    await expect(lastNameErrorMsgText).toMatch('Last name required')

                    const registerBtn = popup.locator('div.modal-footer > button')
                    await expect(registerBtn).toBeDisabled()
                })

                test("Should type wrong data in Last name input field", async ({page}) => {
                    const signUpBtn = page.locator('button', {hasText: 'Sign up'})
                    await signUpBtn.click()

                    const popup = page.locator('app-signup-modal')

                    const signUpLastNameInput = popup.locator('input[id = "signupLastName"]')
                    await signUpLastNameInput.focus()
                    await signUpLastNameInput.fill('Тарасенко')
                    await signUpLastNameInput.blur()
                    const lastNameErrorMsgText1 = await popup.locator('form > div:nth-child(2) > div > p').textContent()

                    await expect(lastNameErrorMsgText1).toMatch('Last name is invalid')

                    await signUpLastNameInput.fill('T')
                    await signUpLastNameInput.blur()
                    const lastNameErrorMsgText2 = await popup.locator('form > div:nth-child(2) > div > p').textContent()

                    await expect(lastNameErrorMsgText2).toMatch('Last name has to be from 2 to 20 characters long')

                    await signUpLastNameInput.fill('TarasTarasTarasTarasenko')
                    await signUpLastNameInput.blur()
                    const lastNameErrorMsgText3 = await popup.locator('form > div:nth-child(2) > div > p').textContent()

                    await expect(lastNameErrorMsgText3).toMatch('Last name has to be from 2 to 20 characters long')

                    const registerBtn = popup.locator('div.modal-footer > button')
                    await expect(registerBtn).toBeDisabled()

                })
            })
            test.describe("Invalid data in Email input", () => {
                test.beforeEach(async ({page}) => {
                    await page.goto('')
                })

                test("Should left Email input field empty", async ({page}) => {
                    const signUpBtn = page.locator('button', {hasText: 'Sign up'})
                    await signUpBtn.click()

                    const popup = page.locator('app-signup-modal')
                    const signUpEmailInput = popup.locator('input[id = "signupEmail"]')

                    await signUpEmailInput.focus()
                    await signUpEmailInput.blur()

                    const EmailErrorMsg = popup.locator('form > div:nth-child(3) > div > p')
                    const EmailErrorMsgText = await EmailErrorMsg.textContent()

                    await expect(EmailErrorMsgText).toMatch('Email required')

                    const registerBtn = popup.locator('div.modal-footer > button')
                    await expect(registerBtn).toBeDisabled()
                })

                test("Should type wrong data in Email input field", async ({page}) => {
                    const signUpBtn = page.locator('button', {hasText: 'Sign up'})
                    await signUpBtn.click()

                    const popup = page.locator('app-signup-modal')

                    const signUpEmailInput = popup.locator('input[id = "signupEmail"]')
                    await signUpEmailInput.focus()
                    await signUpEmailInput.fill('user@invalid-tld.123')
                    await signUpEmailInput.blur()
                    const EmailErrorMsgText1 = await popup.locator('form > div:nth-child(3) > div > p').textContent()

                    await expect(EmailErrorMsgText1).toMatch('Email is incorrect')

                    await signUpEmailInput.fill('user#domain.com')
                    await signUpEmailInput.blur()
                    const EmailErrorMsgText2 = await popup.locator('form > div:nth-child(3) > div > p').textContent()

                    await expect(EmailErrorMsgText2).toMatch('Email is incorrect')

                    await signUpEmailInput.fill('@.com')
                    await signUpEmailInput.blur()
                    const EmailErrorMsgText3 = await popup.locator('form > div:nth-child(3) > div > p').textContent()

                    await expect(EmailErrorMsgText3).toMatch('Email is incorrect')

                    const registerBtn = popup.locator('div.modal-footer > button')
                    await expect(registerBtn).toBeDisabled()
                })
            })
            test.describe("Invalid data in Password input", () => {
                test.beforeEach(async ({page}) => {
                    await page.goto('')
                })

                test("Should left Password input field empty", async ({page}) => {
                    const signUpBtn = page.locator('button', {hasText: 'Sign up'})
                    await signUpBtn.click()

                    const popup = page.locator('app-signup-modal')
                    const signUpPswInput = popup.locator('input[id = "signupPassword"]')

                    await signUpPswInput.focus()
                    await signUpPswInput.blur()

                    const PswErrorMsg = popup.locator('form > div:nth-child(4) > div > p')
                    const PswErrorMsgText = await PswErrorMsg.textContent()

                    await expect(PswErrorMsgText).toMatch('Password required')

                    const registerBtn = popup.locator('div.modal-footer > button')
                    await expect(registerBtn).toBeDisabled()
                })

                test("Should type wrong data in Email input field", async ({page}) => {
                    const signUpBtn = page.locator('button', {hasText: 'Sign up'})
                    await signUpBtn.click()

                    const popup = page.locator('app-signup-modal')

                    const signUpPswInput = popup.locator('input[id = "signupPassword"]')
                    await signUpPswInput.focus()
                    await signUpPswInput.fill('1234567')
                    await signUpPswInput.blur()
                    const PswErrorMsgText1 = await popup.locator('form > div:nth-child(4) > div > p').textContent()

                    await expect(PswErrorMsgText1).toMatch('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter')

                    await signUpPswInput.fill('12345678912345Te')
                    await signUpPswInput.blur()
                    const PswErrorMsgText2 = await popup.locator('form > div:nth-child(4) > div > p').textContent()

                    await expect(PswErrorMsgText2).toMatch('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter')

                    await signUpPswInput.fill('12345678912345T')
                    await signUpPswInput.blur()
                    const PswErrorMsgText3 = await popup.locator('form > div:nth-child(4) > div > p').textContent()

                    await expect(PswErrorMsgText3).toMatch('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter')

                    await signUpPswInput.fill('12345678912345t')
                    await signUpPswInput.blur()
                    const PswErrorMsgText4 = await popup.locator('form > div:nth-child(4) > div > p').textContent()

                    await expect(PswErrorMsgText4).toMatch('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter')

                    const registerBtn = popup.locator('div.modal-footer > button')
                    await expect(registerBtn).toBeDisabled()
                })
            })
            test.describe("Invalid data in Re-enter input", () => {
                test.beforeEach(async ({page}) => {
                    await page.goto('')
                })

                test("Should left Re-enter input field empty", async ({page}) => {
                    const signUpBtn = page.locator('button', {hasText: 'Sign up'})
                    await signUpBtn.click()

                    const popup = page.locator('app-signup-modal')
                    const signUpReEnterInput = popup.locator('input[id = "signupRepeatPassword"]')

                    await signUpReEnterInput.focus()
                    await signUpReEnterInput.blur()

                    const ReEnterErrorMsg = popup.locator('form > div:nth-child(5) > div > p')
                    const ReEnterErrorMsgText = await ReEnterErrorMsg.textContent()

                    await expect(ReEnterErrorMsgText).toMatch('Re-enter password required')

                    const registerBtn = popup.locator('div.modal-footer > button')
                    await expect(registerBtn).toBeDisabled()
                })

                test("Should type wrong data in Re-enter input field", async ({page}) => {
                    const signUpBtn = page.locator('button', {hasText: 'Sign up'})
                    await signUpBtn.click()

                    const popup = page.locator('app-signup-modal')

                    const signUpPswInput = popup.locator('input[id = "signupPassword"]')
                    const signUpReEnterInput = popup.locator('input[id = "signupRepeatPassword"]')
                    await signUpPswInput.fill('Test1234')
                    await signUpReEnterInput.fill('Test1235')
                    await signUpReEnterInput.blur()
                    const ReEnterErrorMsgText1 = await popup.locator('form > div:nth-child(5) > div > p').textContent()

                    await expect(ReEnterErrorMsgText1).toMatch('Passwords do not match')

                    const registerBtn = popup.locator('div.modal-footer > button')
                    await expect(registerBtn).toBeDisabled()
                })
            })
    })


})