import { ReactNode } from "react"
import { JsxElement } from "typescript"

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    children : ReactNode
}
export const Button = ({children, ...rest} : Props) => {
    return (
        <button className="p-2.5 hover:bg-red-700 bg-red-600 text-white rounded-lg" {...rest}>
            {children}
        </button>
    )
}   