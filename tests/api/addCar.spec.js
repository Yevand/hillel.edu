import {test, expect, request as apiRequest} from '@playwright/test';
import {BRANDS} from './fixtures/brands';
import {MODELS} from './fixtures/models';

test.describe('Cars API', ()=>{
    test.describe('Positive', ()=>{
        test('Should create Audi brand car', async ({request})=>{
            const brand = BRANDS.Audi

            for (const model of Object.values(MODELS[brand.id])) {
                await test.step(`Create car with brand '${brand.title}' and model ${model.title}`, async ()=>{
                    const requestBody = {
                        'carBrandId': brand.id,
                        'carModelId': model.id,
                        'mileage': Math.floor(Math.random() * 100)
                    }

                    const response = await request.post('/api/cars', {
                     data: requestBody
                    })

                    const body = await response.json()
                    const expected = {
                        "id": expect.any(Number),
                        "carBrandId": requestBody.carBrandId,
                        "carModelId": requestBody.carModelId,
                        "initialMileage": requestBody.mileage,
                        "updatedMileageAt": expect.any(String),
                        "carCreatedAt": expect.any(String),
                        "mileage": requestBody.mileage,
                        "brand": brand.title,
                        "model": model.title,
                        "logo": brand.logoFilename
                    }

                    expect(body.status).toBe('ok')
                    expect(body.data).toEqual(expected)
                })
            }
        })

        test('Should create BMW brand car', async ({request})=>{
            const brand = BRANDS.BMW

            for (const model of Object.values(MODELS[brand.id])) {
                await test.step(`Create car with brand '${brand.title}' and model ${model.title}`, async ()=>{
                    const requestBody = {
                        'carBrandId': brand.id,
                        'carModelId': model.id,
                        'mileage': Math.floor(Math.random() * 100)
                    }

                    const response = await request.post('/api/cars', {
                        data: requestBody
                    })

                    const body = await response.json()
                    const expected = {
                        "id": expect.any(Number),
                        "carBrandId": requestBody.carBrandId,
                        "carModelId": requestBody.carModelId,
                        "initialMileage": requestBody.mileage,
                        "updatedMileageAt": expect.any(String),
                        "carCreatedAt": expect.any(String),
                        "mileage": requestBody.mileage,
                        "brand": brand.title,
                        "model": model.title,
                        "logo": brand.logoFilename
                    }

                    expect(body.status).toBe('ok')
                    expect(body.data).toEqual(expected)
                })
            }
        })

        test('Should create Ford brand car', async ({request})=>{
            const brand = BRANDS.Ford

            for (const model of Object.values(MODELS[brand.id])) {
                await test.step(`Create car with brand '${brand.title}' and model ${model.title}`, async ()=>{
                    const requestBody = {
                        'carBrandId': brand.id,
                        'carModelId': model.id,
                        'mileage': Math.floor(Math.random() * 100)
                    }

                    const response = await request.post('/api/cars', {
                        data: requestBody
                    })

                    const body = await response.json()
                    const expected = {
                        "id": expect.any(Number),
                        "carBrandId": requestBody.carBrandId,
                        "carModelId": requestBody.carModelId,
                        "initialMileage": requestBody.mileage,
                        "updatedMileageAt": expect.any(String),
                        "carCreatedAt": expect.any(String),
                        "mileage": requestBody.mileage,
                        "brand": brand.title,
                        "model": model.title,
                        "logo": brand.logoFilename
                    }

                    expect(body.status).toBe('ok')
                    expect(body.data).toEqual(expected)
                })
            }
        })

        test('Should create Porsche brand car', async ({request})=>{
            const brand = BRANDS.Porsche

            for (const model of Object.values(MODELS[brand.id])) {
                await test.step(`Create car with brand '${brand.title}' and model ${model.title}`, async ()=>{
                    const requestBody = {
                        'carBrandId': brand.id,
                        'carModelId': model.id,
                        'mileage': Math.floor(Math.random() * 100)
                    }

                    const response = await request.post('/api/cars', {
                        data: requestBody
                    })

                    const body = await response.json()
                    const expected = {
                        "id": expect.any(Number),
                        "carBrandId": requestBody.carBrandId,
                        "carModelId": requestBody.carModelId,
                        "initialMileage": requestBody.mileage,
                        "updatedMileageAt": expect.any(String),
                        "carCreatedAt": expect.any(String),
                        "mileage": requestBody.mileage,
                        "brand": brand.title,
                        "model": model.title,
                        "logo": brand.logoFilename
                    }

                    expect(body.status).toBe('ok')
                    expect(body.data).toEqual(expected)
                })
            }
        })

        test('Should create Fiat brand car', async ({request})=>{
            const brand = BRANDS.Fiat

            for (const model of Object.values(MODELS[brand.id])) {
                await test.step(`Create car with brand '${brand.title}' and model ${model.title}`, async ()=>{
                    const requestBody = {
                        'carBrandId': brand.id,
                        'carModelId': model.id,
                        'mileage': Math.floor(Math.random() * 100)
                    }

                    const response = await request.post('/api/cars', {
                        data: requestBody
                    })

                    const body = await response.json()
                    const expected = {
                        "id": expect.any(Number),
                        "carBrandId": requestBody.carBrandId,
                        "carModelId": requestBody.carModelId,
                        "initialMileage": requestBody.mileage,
                        "updatedMileageAt": expect.any(String),
                        "carCreatedAt": expect.any(String),
                        "mileage": requestBody.mileage,
                        "brand": brand.title,
                        "model": model.title,
                        "logo": brand.logoFilename
                    }

                    expect(body.status).toBe('ok')
                    expect(body.data).toEqual(expected)
                })
            }
        })

    })

    test.describe('Negative', ()=> {
        test('Should not create Audi brand car without brand id', async ({request}) => {
            await test.step('Try to create car without brand id', async () => {
                const brand = BRANDS.Audi
                const model = MODELS[brand.id]

                const requestBody = {
                    'carBrandId': undefined,
                    'carModelId': model.id,
                    'mileage': Math.floor(Math.random() * 100)
                }

                const response = await request.post('/api/cars', {
                    data: requestBody
                })

                const body = await response.json()

                expect(body.status).toBe('error')
                expect(body.message).toBe('Car brand id is required')
            })
        })

        test('Should not create Audi brand car with invalid brand id', async ({request}) => {
            await test.step('Try to create car with invalid brand id', async () => {
                const brand = BRANDS.Audi
                const model = MODELS[brand.id]

                const requestBody = {
                    'carBrandId': 'null',
                    'carModelId': model.id,
                    'mileage': Math.floor(Math.random() * 100)
                }

                const response = await request.post('/api/cars', {
                    data: requestBody
                })

                const body = await response.json()

                expect(body.status).toBe('error')
                expect(body.message).toBe('Invalid car brand type')
            })
        })

        test('Should not create Audi brand car with invalid model id', async ({request}) => {
            await test.step('Try to create car with invalid model id', async () => {
                const brand = BRANDS.Audi
                const model = MODELS[brand.id]

                const requestBody = {
                    'carBrandId': brand.id,
                    'carModelId': 'null',
                    'mileage': Math.floor(Math.random() * 100)
                }

                const response = await request.post('/api/cars', {
                    data: requestBody
                })

                const body = await response.json()

                expect(body.status).toBe('error')
                expect(body.message).toBe('Invalid car model type')
            })
        })

        test('Should not create Audi brand car without model id', async ({request}) => {
            await test.step('Try to create car without model id', async () => {
                const brand = BRANDS.Audi
                const model = MODELS[brand.id]

                const requestBody = {
                    'carBrandId': brand.id,
                    'carModelId': undefined,
                    'mileage': Math.floor(Math.random() * 100)
                }

                const response = await request.post('/api/cars', {
                    data: requestBody
                })

                const body = await response.json()

                expect(body.status).toBe('error')
                expect(body.message).toBe('Car model id is required')
            })
        })

        test('Should not create Audi brand car with invalid mileage', async ({request}) => {
            await test.step('Try to create car with invalid mileage', async () => {
                const brand = BRANDS.Audi
                const model = MODELS[brand.id]

                const requestBody = {
                    'carBrandId': brand.id,
                    'carModelId': model.id,
                    'mileage': "test"
                }

                const response = await request.post('/api/cars', {
                    data: requestBody
                })

                const body = await response.json()

                expect(body.status).toBe('error')
                expect(body.message).toBe('Invalid mileage type')
            })
        })


    })
})