import Api from "../api"
import Response from "../types/response"
import { Store } from "../types/store"

export const getStore = async (token : string) : Promise<Response<Store | null>> => { 
    const resp = await Api.get<Response<Store>>("/store", {
        headers : {"Authorization" : `Bearer ${token}`}
    })

    return resp.data as Response<Store>
}

export const saveStore = async (name : string, describe : string, token : string) => {
    await Api.post("/store", {
        "name" : name,
        "describe" : describe
    },
    {
        headers : {"Authorization" : `Bearer ${token}`}
    }
    )
}