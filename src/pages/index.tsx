import Head from 'next/head'
import { Content, Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { Input } from '@/components/utils/Input'
import { Button } from '@/components/utils/Button'
import Image from 'next/image'
import { Header } from '@/components/Header'
import Api from '@/libs/api'
import { useContext, useState } from 'react'
import Router from 'next/router'
import { SessionContext, SessionContextProps } from '@/hooks/sessionContext'
import { singin } from '@/libs/requests/sessionRequests'
import Response from '@/libs/types/response'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [username, setUsername] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const { setToken } = useContext<SessionContextProps>(SessionContext)

  const authenticate = async () => {
    const response : Response<string> | undefined = await singin(username, password);
      
    if (response != undefined) setToken(response.content)
  }

  return (
    <>
      <Head>
        <title>Foodburger</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className='w-screen h-screen flex-col'>
        <Header btnLogin={true}/>
        <div className='bg-black/25 h-full' style={{height:"calc(100% - 80px)"}}>
          <div className='flex flex-row items-center justify-center h-full z-50'>
            <div className='w-4/6 h-full'></div>
            <div className='w-2/6 bg-black/75 h-full p-10 flex justify-center items-center'>
              <div className='flex flex-col gap-14'>
                <div>
                  <h1 className='text-2xl text-white font-bold'>Portal do parceiro</h1>
                  <span className='text-white'>Gerencie seus pedidos de forma simples e facil</span>
                </div>
                <form className='flex flex-col gap-3' onSubmit={(e) => {e.preventDefault(); authenticate()}}>
                  <Input darkMode={true} value={username} onChange={(e) => setUsername(e.target.value)} label='Email'/>
                  <Input darkMode={true} value={password} onChange={(e) => setPassword(e.target.value)} label='Senha' type="password"/>
                  <Button type='submit'>Entrar</Button>
                </form>
              </div>
            </div>
          </div>
          <div className='-z-10 absolute top-0 w-screen'> 
            <img className=' w-screen h-screen' src="/assets/burger.png"/>
          </div>
        </div>
        
      </main>
    </>
  )
}
