import axios, { AxiosResponse } from 'axios';

const apiFood = axios.create({
    baseURL: 'https://foodish-api.com/'
});

interface getRandomFoodResponse {
    image: string
}


export function getRandomFood(): Promise<AxiosResponse<getRandomFoodResponse, any>> {
    return apiFood.get('api/');
}