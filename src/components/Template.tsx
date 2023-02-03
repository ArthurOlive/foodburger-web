import { SessionContext, SessionContextProps } from "@/hooks/sessionContext"
import { getStore } from "@/libs/requests/storeRequest"
import { Store } from "@/libs/types/store"
import Head from "next/head"
import Router from "next/router"
import { ReactNode, useContext, useEffect, useState } from "react"
import { SideBar } from "./SideBar"

interface Props {
    children : ReactNode | ReactNode[] | undefined
}
export  const Template = ({children} : Props) => {

    const { token, setToken } = useContext<SessionContextProps>(SessionContext)
    const [store, setStore] = useState<Store>();

    const fetchStore = async () => {
        const data = await getStore(token as string)


        //if (data.content) setStore(data.content)
        //else Router.push("/completeStoreRegister")
    }

    useEffect(() => {
        fetchStore()
    }, [])

    return (
        <>
            <Head>
                <title>Foodburger</title>
                <link rel="shortcut icon" href="/assets/icon.ico" type="image/png"/>
            </Head>
            
            <div className="h-screen w-scren flex flex-col">
                <div className="w-full h-16 bg-zinc-900 flex p-4">
                    <div className="flex items-center justify-center h-full">
                        <img src="/assets/icon.png" className="w-8"/>
                    </div>
                </div>
                <div className="flex" style={{height: "calc(100% - 64px)"}}>
                    <SideBar/>
                    <div className="container mx-auto p-4"> 
                        <div className="h-full overflow-auto">

                            {/* Content is here */}
                            {children}

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}