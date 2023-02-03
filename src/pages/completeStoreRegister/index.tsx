import { Button } from "@/components/utils/Button";
import Router from "next/router";

export default function CompleteStoreRegister () {
    return (
        <div className="bg-zinc-900">
        <div className="container mx-auto w-screen h-screen flex items-center justify-center">
            <div className="flex flex-col w-1/3 p-10 rounded-lg shadow-md gap-10 bg-white">
                <h1 className="text-3xl font-semibold"><img className="w-10" src="/assets/icon.png"/> Seja muito bem vindo ao foodburger.</h1>
                <p className="text-justify text-base">Antes de comerçamos precisamos completar as informaçoes de sua loja, não se preocupe leva apenas 1 minuto, vamos la?</p>
                <Button onClick={() => Router.push("/completeStoreRegister/createStore")}>Começar</Button>
            </div>
        </div>
        </div>
    )
}