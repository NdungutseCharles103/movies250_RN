import { getApi } from './../utils/apiCallMethods';
import { useState, useEffect } from 'react';


export function useFetch(_path: string, method?: string, options?: any) {
    const [path, setPath] = useState(_path)
    const [isLoading, setLoading] = useState(true)
    const [data, setData] = useState<any>([])

    const handleApi = async () => {
        const newMeth = method?.toUpperCase()
        switch (newMeth) {
            case 'GET':
                try {
                    const resData = await getApi(path, options)
                    setData(resData)
                    setLoading(false)
                } catch (error) {
                    setLoading(false)
                }
                break;

            default:
                try {
                    const resData = await getApi(path, options)
                    setData(resData)
                    // setData(["me", "you", 'I'])
                    setLoading(false)
                } catch (error) {
                    setLoading(false)
                }
                break;
        }
    }

    useEffect(() => {
        handleApi()
    }, [path])

    return {data, isLoading, setData, setPath}
}