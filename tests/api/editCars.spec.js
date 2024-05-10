import {test, expect, request as apiRequest} from "../../src/fixtures/userGaragePage";
import {authFile} from "../../src/constants";
import CarController from "../../src/controllers/CarsController";


test.describe("Cars API", ()=> {
    test.describe("Update cars", () => {
        let carsController

        test.beforeEach(async ({request}) => {
            request = await apiRequest.newContext({
                storageState: authFile
            })

            carsController = new CarController(request)
        })

        test.afterAll(async () => {
            const carsResponse = await carsController.getUserCars()
            const cars = await carsResponse.json()

            await Promise.all(
                cars.data.map((car) => carsController.deleteCar(car.id))
            )
        })
        
        test('Should edit Audi brand car', async ()=>{

            const getBrands = await carsController.getBrands()
            const brands = await getBrands.json()
            const brand = brands.data[0]

            const getModels = await carsController.getModels()
            const models = await getModels.json()
            const audiModels = await models.data.slice(0, 5)
            const firstModel = audiModels[0]
            const secondModel = audiModels[1]

            const requestBody = {
                'carBrandId': brand.id,
                'carModelId': firstModel.id,
                'mileage': Math.floor(Math.random() * 100)
            }

            const createUserCar = await carsController.createCar(requestBody)

            const userCarsResponse = await carsController.getUserCars()

            const userCarsBody = await userCarsResponse.json()

            const editCarRequest = {
                "carBrandId": brand.id,
                "carModelId": secondModel.id,
                "mileage": requestBody.mileage + 1
            }

            const editCarResponse = await carsController.editCar(userCarsBody.data[0].id, editCarRequest)

            const body = await editCarResponse.json()

            const expected = {
                "id": userCarsBody.data[0].id,
                "carBrandId": brand.id,
                "carModelId": secondModel.id,
                "initialMileage": expect.any(Number),
                "updatedMileageAt": expect.any(String),
                "carCreatedAt": expect.any(String),
                "mileage": expect.any(Number),
                "brand": brand.title,
                "model": secondModel.title,
                "logo": brand.logoFilename
            }

            expect(editCarResponse.status()).toBe(200)
            expect(body.status).toBe('ok')
            expect(body.data).toEqual(expected)
        })

        test('Should edit BMW brand car', async ()=>{
            const getBrands = await carsController.getBrands()
            const brands = await getBrands.json()
            const brand = brands.data[1]

            const getModels = await carsController.getModels()
            const models = await getModels.json()
            const bmwModels = await models.data.slice(5, 11)
            const firstModel = bmwModels[0]
            const secondModel = bmwModels[1]

            const requestBody = {
                'carBrandId': brand.id,
                'carModelId': firstModel.id,
                'mileage': Math.floor(Math.random() * 100)
            }

            const createUserCar = await carsController.createCar(requestBody)

            const userCarsResponse = await carsController.getUserCars()

            const userCarsBody = await userCarsResponse.json()

            const editCarRequest = {
                "carBrandId": brand.id,
                "carModelId": secondModel.id,
                "mileage": requestBody.mileage + 1
            }

            const editCarResponse = await carsController.editCar(userCarsBody.data[0].id, editCarRequest)

            const body = await editCarResponse.json()

            const expected = {
                "id": userCarsBody.data[0].id,
                "carBrandId": brand.id,
                "carModelId": secondModel.id,
                "initialMileage": expect.any(Number),
                "updatedMileageAt": expect.any(String),
                "carCreatedAt": expect.any(String),
                "mileage": expect.any(Number),
                "brand": brand.title,
                "model": secondModel.title,
                "logo": brand.logoFilename
            }

            expect(editCarResponse.status()).toBe(200)
            expect(body.status).toBe('ok')
            expect(body.data).toEqual(expected)
        })

        test('Should edit Ford brand car', async ()=>{
            const getBrands = await carsController.getBrands()
            const brands = await getBrands.json()
            const brand = brands.data[2]

            const getModels = await carsController.getModels()
            const models = await getModels.json()
            const fordModels = await models.data.slice(10, 15)
            const firstModel = fordModels[0]
            const secondModel = fordModels[1]

            const requestBody = {
                'carBrandId': brand.id,
                'carModelId': firstModel.id,
                'mileage': Math.floor(Math.random() * 100)
            }

            const createUserCar = await carsController.createCar(requestBody)

            const userCarsResponse = await carsController.getUserCars()

            const userCarsBody = await userCarsResponse.json()

            const editCarRequest = {
                "carBrandId": brand.id,
                "carModelId": secondModel.id,
                "mileage": requestBody.mileage + 1
            }

            const editCarResponse = await carsController.editCar(userCarsBody.data[0].id, editCarRequest)

            const body = await editCarResponse.json()

            const expected = {
                "id": userCarsBody.data[0].id,
                "carBrandId": brand.id,
                "carModelId": secondModel.id,
                "initialMileage": expect.any(Number),
                "updatedMileageAt": expect.any(String),
                "carCreatedAt": expect.any(String),
                "mileage": expect.any(Number),
                "brand": brand.title,
                "model": secondModel.title,
                "logo": brand.logoFilename
            }

            expect(editCarResponse.status()).toBe(200)
            expect(body.status).toBe('ok')
            expect(body.data).toEqual(expected)
        })

        test('Should edit Porsche brand car', async ()=>{
            const getBrands = await carsController.getBrands()
            const brands = await getBrands.json()
            const brand = brands.data[3]

            const getModels = await carsController.getModels()
            const models = await getModels.json()
            const porscheModels = await models.data.slice(15, 18)
            const firstModel = porscheModels[0]
            const secondModel = porscheModels[1]

            const requestBody = {
                'carBrandId': brand.id,
                'carModelId': firstModel.id,
                'mileage': Math.floor(Math.random() * 100)
            }

            const createUserCar = await carsController.createCar(requestBody)

            const userCarsResponse = await carsController.getUserCars()

            const userCarsBody = await userCarsResponse.json()

            const editCarRequest = {
                "carBrandId": brand.id,
                "carModelId": secondModel.id,
                "mileage": requestBody.mileage + 1
            }

            const editCarResponse = await carsController.editCar(userCarsBody.data[0].id, editCarRequest)

            const body = await editCarResponse.json()

            const expected = {
                "id": userCarsBody.data[0].id,
                "carBrandId": brand.id,
                "carModelId": secondModel.id,
                "initialMileage": expect.any(Number),
                "updatedMileageAt": expect.any(String),
                "carCreatedAt": expect.any(String),
                "mileage": expect.any(Number),
                "brand": brand.title,
                "model": secondModel.title,
                "logo": brand.logoFilename
            }

            expect(editCarResponse.status()).toBe(200)
            expect(body.status).toBe('ok')
            expect(body.data).toEqual(expected)
        })

        test('Should edit Fiat brand car', async ()=>{
            const getBrands = await carsController.getBrands()
            const brands = await getBrands.json()
            const brand = brands.data[4]

            const getModels = await carsController.getModels()
            const models = await getModels.json()
            const fiatModels = await models.data.slice(18, 23)
            const firstModel = fiatModels[0]
            const secondModel = fiatModels[1]

            const requestBody = {
                'carBrandId': brand.id,
                'carModelId': firstModel.id,
                'mileage': Math.floor(Math.random() * 100)
            }

            const createUserCar = await carsController.createCar(requestBody)

            const userCarsResponse = await carsController.getUserCars()

            const userCarsBody = await userCarsResponse.json()

            const editCarRequest = {
                "carBrandId": brand.id,
                "carModelId": secondModel.id,
                "mileage": requestBody.mileage + 1
            }

            const editCarResponse = await carsController.editCar(userCarsBody.data[0].id, editCarRequest)

            const body = await editCarResponse.json()

            const expected = {
                "id": userCarsBody.data[0].id,
                "carBrandId": brand.id,
                "carModelId": secondModel.id,
                "initialMileage": expect.any(Number),
                "updatedMileageAt": expect.any(String),
                "carCreatedAt": expect.any(String),
                "mileage": expect.any(Number),
                "brand": brand.title,
                "model": secondModel.title,
                "logo": brand.logoFilename
            }

            expect(editCarResponse.status()).toBe(200)
            expect(body.status).toBe('ok')
            expect(body.data).toEqual(expected)
        })
    })
        //end of tests
})