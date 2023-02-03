import { MenuItem } from "@/components/cardapio/MenuItem"
import { Template } from "@/components/Template"
import { Button } from "@/components/utils/Button"
import { Input } from "@/components/utils/Input"

export default function Cardapio() {
    return (
        <Template>
            <div className="flex justify-between">
                <Input darkMode={false}/>
                <Button>Adicionar lanche</Button>
            </div>
            <section className="p-2">
                <h1 className="mb-2 text-xl">Burgers</h1>
                <hr/>
                <div className="grid grid-cols-6 gap-4 p-4">
                    {/* Contains itens */}
                    <MenuItem/>
                    <MenuItem/>
                    <MenuItem/>
                    <MenuItem/>
                    <MenuItem/>
                    <MenuItem/>
                    <MenuItem/>
                
                </div>
            </section>
        </Template>
    )
}