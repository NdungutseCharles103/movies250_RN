import axios from "axios";
import { API_KEY } from "@env";

export const image_path = "https://image.tmdb.org/t/p/w500"

export const api = axios.create({
    baseURL: "https://api.themoviedb.org"
})

// const api_key = process.env.REACT_APP_API_KEY

export const getApi = async (path: string, _options?: any) => {
    console.log(`/3/${path}?api_key=${API_KEY}&language=en-US&page=1${_options?.adds && _options?.adds}`)
    try {
        const res = await api.get(`/3/${path}?api_key=${API_KEY}&language=en-US&page=1${_options?.adds && _options?.adds}`, _options);
        const data = await res.data
        return data
    } catch (error: any) {
        console.log(error);
        return {error: error, message: error?.message}
    }
}

export const postApi = async (path: string, body: any, _options?: any)=>{
    try {
        const res = await api.post(`/${path}`, body, _options);
        const data = await res.data
        return data
    } catch (error: any) {
        console.log(error);
        return {error: error, message: error?.message}
    }
}