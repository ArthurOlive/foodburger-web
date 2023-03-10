import { Header } from "@/components/Header";
import { Template } from "@/components/Template";
import { Button } from "@/components/utils/Button";
import { Input } from "@/components/utils/Input";
import Head from "next/head";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

export default function Register() {

    const [name, setName] = useState<string>("");
    const [document, setDocument] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [validPassword, setValidPassword] = useState<string>("");

    useEffect(() => {
        clearValues()
    })

    const clearValues = () => {
        setName("")
        setDocument("")
        setEmail("")
        setPassword("")
        setValidPassword("")
    }

    const createUser = (e : React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
       

    }

    return (
        <>
            <Head>
                <title>Foodburger</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <main className='w-screen h-screen flex-col'>
                <Header/>
                <div className='bg-black/25 h-full' style={{height:"calc(100% - 80px)"}}>
                <div className='flex flex-row items-center justify-center h-full z-50'>
                    <div className='w-2/6 bg-black/75 h-full p-10 flex justify-center items-center'>
                        <div className='flex flex-col gap-3'>
                            <div>
                                <h1 className='text-2xl text-white font-bold'>Cadastro</h1>
                                <span className='text-white'>Experimente e aprecie os melhores hamburgers</span>
                            </div>
                            <form className='flex flex-col gap-3' onSubmit={(e) => {e.preventDefault(); }}>
                                <Input label="Nome" value={name}  onChange={(e) => setName(e.target.value)} darkMode={true}/>
                                <Input label="Cpf/Cnpj" value={document}  onChange={(e) => setDocument(e.target.value)} darkMode={true}/>
                                <Input label="Email" value={email}  onChange={(e) => setEmail(e.target.value)} darkMode={true}/>
                                <Input label="Senha" value={password}  onChange={(e) => setPassword(e.target.value)} darkMode={true}/>
                                <Input label="Repita a senha" value={validPassword}  onChange={(e) => setValidPassword(e.target.value)} darkMode={true}/>
                                <Button type='submit' onClick={createUser}>Cadastrar</Button>
                            </form>
                        </div>
                    </div>
                    <div className='w-4/6 h-full'></div>
                </div>
                <div className='-z-10 absolute top-0 w-screen'> 
                    <img className=' w-screen h-screen' src="/assets/bg-cadastro.png"/>
                </div>
                </div>
                
            </main>
        </>
    )
}