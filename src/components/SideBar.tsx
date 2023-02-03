import {MdOutlineStickyNote2, MdOutlineMenuBook, MdPayments, MdOutlineExitToApp} from 'react-icons/md' 
import {AiTwotoneSetting} from 'react-icons/ai'
import { SideBarItem } from './SideBarItem'

export const SideBar = () => {
    return (
        <div className="flex flex-col justify-between bg-zinc-800 w-16 h-full gap-1 p-1" >
            <section className='flex flex-col gap-1'>
                <SideBarItem text={"Pedidos"}  icon={<MdOutlineStickyNote2/>}/>
                <SideBarItem text={"Cardapio"} icon={<MdOutlineMenuBook/>}/>
                <SideBarItem text={"Vendas"}   icon={<MdPayments/>}/>
            </section>
            <section className='flex flex-col gap-1'>
                <SideBarItem text={"Config"}  icon={<AiTwotoneSetting/>}/>
                <SideBarItem text={"Sair"}    icon={<MdOutlineExitToApp/>}/>
            </section>
        </div>
    )
}