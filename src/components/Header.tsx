import { Button } from "./utils/Button"

export const Header = () => {
    return (
        <div className="bg-black h-20 w-full flex items-center justify-between px-20">
            <div className="flex items-center justify-center gap-3">
                <img className="" src="/assets/icon.png"/> 
                <span className="text-white text-xl">FoodBurger</span>
            </div>
            <div>
                <Button>Cadastre-se</Button>
            </div>
        </div>
    )
}