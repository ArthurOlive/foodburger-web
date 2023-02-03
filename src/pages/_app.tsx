import { SessionContext } from '@/hooks/sessionContext';
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { createContext, useEffect, useState } from 'react';
import Router from 'next/router'


export default function App({ Component, pageProps }: AppProps) {
  const [token, setToken] = useState<string>()

  useEffect(() => {
    if (token != null && token != undefined) {
      localStorage.setItem("token" , token)
      Router.push("/pedidos")
    } else if (localStorage.getItem("token") != null && localStorage.getItem("token") != "") {
      setToken(localStorage.getItem("token") as string)
      Router.push("/pedidos")
    } else {
      localStorage.setItem("token" , "")
      Router.push("/")
    }
  }, [token])

  return (
    <SessionContext.Provider value={{token, setToken}} >
      <Component {...pageProps} />
    </SessionContext.Provider>
  ) 
}
