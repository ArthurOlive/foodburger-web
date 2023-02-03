import { SideBar } from "@/components/SideBar";
import { Template } from "@/components/Template";
import { Button } from "@/components/utils/Button";
import { SessionContext, SessionContextProps } from "@/hooks/sessionContext";
import Router from "next/router";
import { useContext } from "react";

export default function Home () {

    return (
        <Template>
                        
            <Button>Deslogar</Button>
            
        </Template>
    )
}