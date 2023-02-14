import axios, { AxiosError } from "axios"
import { toast } from "react-hot-toast"
import { Map } from "typescript"
import Api from "../api"
import Response from "../types/response"

export const singin = async (username : string, password: string) : Promise<Response<string> | undefined> => { 
  try {
    const resp = await Api.post<Response<string>>("/authenticate", 
      {
        "username" : username,
        "password" : password
      }
    )

    return resp.data as Response<string>
  } catch(e) {
    console.log(e)
    if (axios.isAxiosError(e)) {
      if (e.response?.status == 400) {
        const contentError : Object = ( e.response?.data as Response<Object> ).content
        console.log(contentError)
        if (contentError != undefined)
          Object.values(contentError).forEach((values) => 
            toast.error(values, {position:"bottom-right"})
          )
      } 
      if (e.response?.status == 401) {
        toast.error("Email ou senha estão errados", {position:"bottom-right"})
      }
      if (e.response?.status == 500) {
        toast.error("Alguma coisa de errado aconteceu...", {position:"bottom-right"})
      }
    } else 
      toast.error("Alguma coisa de errado aconteceu...", {position:"bottom-right"})
  }
}