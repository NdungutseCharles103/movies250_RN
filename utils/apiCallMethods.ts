import axios from "axios";

const api = axios.create({
    baseURL: "https://api.themoviedb.org"
})

export const getApi = async (path: string, _options?: any) => {
    try {
        const res = await api.get(`/3/movie/${path}?api_key=580723fc25986a1cec69f928267db062&language=en-US&page=1`, _options);
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