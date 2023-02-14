import Router from "next/router"
import { Button } from "./utils/Button"

interface Props {
    btnLogin ?: boolean
}
export const Header = ({btnLogin = false} : Props) => {
    return (
        <div className="bg-black h-20 w-full flex items-center justify-between px-20">
            <div className="flex items-center justify-center gap-3">
                <img className="" src="/assets/icon.png"/> 
                <span className="text-white text-xl">FoodBurger</span>
            </div>
            <div>
                {btnLogin ? 
                    <Button onClick={() => Router.push("/register")}>Cadastre-se</Button>
                    : 
                    <Button onClick={() => Router.push("/")}>Login</Button>
                }
            </div>
        </div>
    )
}