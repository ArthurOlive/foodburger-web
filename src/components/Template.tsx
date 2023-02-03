import Head from "next/head"
import { ReactNode } from "react"
import { SideBar } from "./SideBar"

interface Props {
    children : ReactNode | ReactNode[] | undefined
}
export  const Template = ({children} : Props) => {
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