import {MdOutlineStickyNote2, MdOutlineMenuBook, MdPayments, MdOutlineExitToApp} from 'react-icons/md' 
import {AiTwotoneSetting} from 'react-icons/ai'
import { SideBarItem } from './SideBarItem'
import Router from 'next/router'
import { useContext } from 'react'
import { SessionContext, SessionContextProps } from '@/hooks/sessionContext'

export const SideBar = () => {

    const { token, setToken } = useContext<SessionContextProps>(SessionContext)

    const singout = () => {
        localStorage.setItem("token", "")
        setToken(null)
    }

    return (
        <div className="flex flex-col justify-between bg-zinc-800 w-16 h-full gap-1 p-1" >
            <section className='flex flex-col gap-1'>
                <SideBarItem onClick={() => Router.push("/pedidos")} text={"Pedidos"}  icon={<MdOutlineStickyNote2/>}/>
                <SideBarItem onClick={() => Router.push("/cardapio")} text={"Cardapio"} icon={<MdOutlineMenuBook/>}/>
                <SideBarItem onClick={() => Router.push("/vendas")} text={"Vendas"}   icon={<MdPayments/>}/>
            </section>
            <section className='flex flex-col gap-1'>
                <SideBarItem text={"Config"}  icon={<AiTwotoneSetting/>}/>
                <SideBarItem onClick={singout} text={"Sair"}    icon={<MdOutlineExitToApp/>}/>
            </section>
        </div>
    )
}