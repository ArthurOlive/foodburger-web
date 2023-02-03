import { Button } from "@/components/Button";
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
        <div>
            <Button onClick={singout}>Deslogar</Button>
        </div>
    )
}