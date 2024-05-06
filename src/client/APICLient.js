import CarController from "../controllers/CarsController";
import AuthController from "../controllers/AuthController";
import {request} from "@playwright/test";

export default class APIClient {
    constructor(request) {
        this.auth = new AuthController(request)
        this.cars = new CarController(request)
    }

    static async authenticateWithNewUser(registerData){
        const client = request.newContext()
        const authController = new AuthController(client)
        await authController.signUp(registerData)
        // await authController.signIn({email: registerData.email, password: registerData.password})
        return new APIClient(client)
    }

    static async authenticate(userData){
        const client = request.newContext()
        const authController = new AuthController(client)
        await authController.signIn(userData)
        return new APIClient(client)
    }
}
