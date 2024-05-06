import {test, expect, request as apiRequest} from "../../src/fixtures/userGaragePage";
import {authFile} from "../../src/constants";
import CarController from "../../src/controllers/CarsController";


test.describe("Get all brands and brand by ID", () => {
    let carsController

    test.beforeEach(async ({request}) => {
        request = await apiRequest.newContext({
            storageState: authFile
        })

        carsController = new CarController(request)
    })

    test("Get brands", async ()=>{
        const getBrands = await carsController.getBrands()
        const brands = await getBrands.json()

        const expected = [
            {
                "id": 1,
                "title": "Audi",
                "logoFilename": "audi.png"
            },
            {
                "id": 2,
                "title": "BMW",
                "logoFilename": "bmw.png"
            },
            {
                "id": 3,
                "title": "Ford",
                "logoFilename": "ford.png"
            },
            {
                "id": 4,
                "title": "Porsche",
                "logoFilename": "porsche.png"
            },
            {
                "id": 5,
                "title": "Fiat",
                "logoFilename": "fiat.png"
            }
        ]

        expect(brands.status).toBe("ok")
        expect(brands.data).toEqual(expected)
    })

    test("Get brand by ID", async ()=>{
        const getBrand = await carsController.getBrandById(1)
        const brand = await getBrand.json()

        const expected = {
            "id": 1,
            "title": "Audi",
            "logoFilename": "audi.png"
        }

        expect(brand.status).toBe("ok")
        expect(brand.data).toEqual(expected)
    })
})