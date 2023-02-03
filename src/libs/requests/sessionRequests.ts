import Api from "../api"
import Response from "../types/response"

export const singin = async (username : string, password: string) : Promise<Response<string>> => { 
    const resp = await Api.post<Response<string>>("/authenticate", 
      {
        "username" : username,
        "password" : password
      }
    )

    return resp.data as Response<string>
}