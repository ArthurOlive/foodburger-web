import { Button } from "@/components/utils/Button";
import { Input } from "@/components/utils/Input";
import { SessionContext, SessionContextProps } from "@/hooks/sessionContext";
import { saveStore } from "@/libs/requests/storeRequest";
import Router from "next/router";
import { FormEvent, useContext, useState } from "react";

export default function CreateStore() {
    const { token, setToken } = useContext<SessionContextProps>(SessionContext)

    const [name, setName] = useState<string>("")
    const [describe, setDescribe] = useState<string>("")

    const createStore = async (event : FormEvent) => {
        event.preventDefault()

        await saveStore(name, describe, token as string)

        Router.push("/pedidos")
    }

    return (
        <div className="bg-zinc-900">
            <div className="container mx-auto w-screen h-screen flex items-center justify-center">
                <div className="flex flex-col gap-10 p-10 bg-white rounded-lg shadow">
                    <div className="flex flex-col justify-center gap-2">
                        <img src="/assets/store.svg" className="h-20"/>
                        <h1 className="text-2xl">Preencha as informações da sua loja.</h1>
                    </div>
                    <form className="flex flex-col gap-3 justify-center">
                        {/* Tem que fazer a imagem aqui */}
                        <Input value={name} onChange={(e) => setName(e.target.value)} label="Nome da loja"/>
                        <Input value={describe} onChange={(e) => setDescribe(e.target.value)} label="Descrição"/>
                        <Button onClick={createStore}>Salvar</Button>
                    </form>
                </div>
            </div>
        </div>
    )
}