import BaseController from "./BaseController.js";

export default class CarController extends BaseController{
    #CREATE_CAR_PATH = '/api/cars'
    #PUT_CAR_PATH = '/api/cars/#'
    #GET_USER_CARS_PATH = '/api/cars'
    #GET_USER_CAR_PATH = '/api/cars/#'
    #GET_CARS_BRANDS_PATH = '/api/cars/brands'
    #GET_CARS_BRAND_BY_ID_PATH = '/api/cars/brands/#'
    #GET_CARS_MODELS_PATH = '/api/cars/models'
    #GET_CARS_MODEL_BY_ID_PATH = '/api/cars/models/#'
    #DELETE_USER_CARS_PATH = '/api/cars/#'

    constructor(request) {
        super(request);
    }

    async createCar(data){
        return this._request.post(this.#CREATE_CAR_PATH, {data})
    }

    async editCar(id, data){
        return this._request.put(this.#PUT_CAR_PATH.replace('#', id), {data})

    }

    async getCarById(id){
        return this._request.get(this.#GET_USER_CAR_PATH.replace('#', id))
    }

    async getUserCars(){
        return this._request.get(this.#GET_USER_CARS_PATH)
    }

    async getBrands(){
        return this._request.get(this.#GET_CARS_BRANDS_PATH)
    }

    async getBrandById(id){
        return this._request.get(this.#GET_CARS_BRAND_BY_ID_PATH.replace('#', id))

    }

    async getModels(){
        return this._request.get(this.#GET_CARS_MODELS_PATH)
    }

    async getModelById(id){
        return this._request.get(this.#GET_CARS_MODEL_BY_ID_PATH.replace('#', id))

    }

    async deleteCar(id){
        return this._request.delete(this.#DELETE_USER_CARS_PATH.replace('#', id))
    }
}