import { ReactNode } from "react"
import { MdOutlineStickyNote2} from "react-icons/md"
import { JsxElement } from "typescript"

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    icon : ReactNode,
    text : string
}
export const SideBarItem = ({icon, text, ...rest} : Props) => {
    return (
        <button 
            className="text-white flex flex-col items-center 
            justify-center p-2 bg-gray-900 rounded
            cursor-pointer
            hover:bg-black
            " 
            
            {...rest}>
            <span className='text-2xl'>{icon}</span>
            <span className="text-xs">{text}</span>
        </button>
    )
}