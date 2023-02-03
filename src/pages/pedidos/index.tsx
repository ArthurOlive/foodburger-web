import { SideBar } from "@/components/SideBar";
import { Button } from "@/components/utils/Button";
import { SessionContext, SessionContextProps } from "@/hooks/sessionContext";
import Router from "next/router";
import { useContext } from "react";

export default function Home () {

    const { token, setToken } = useContext<SessionContextProps>(SessionContext)

    const singout = () => {
        localStorage.setItem("token", "")
        setToken(null)
    }

    return (
        <div className="h-screen w-scren flex flex-col">
            <div className="w-full h-16 bg-black">

            </div>
            <div className="flex" style={{height: "calc(100% - 64px)"}}>
                <SideBar/>
                <div className="container p-4"> 
                    <div>

                        {/* Content is here */}
                        
                        <Button onClick={singout}>Deslogar</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}