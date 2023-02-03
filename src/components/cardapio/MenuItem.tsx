export const MenuItem = () => {
    return (
        <div className="w-full h-full shadow-md bg-white flex flex-col rounded cursor-pointer">
            <img src="/assets/burger1.png"/>
            <div className="flex-col gap-2 p-2">
                <h2 className="font-semibold text-gay-800">Especial da casa</h2>
                <span className="text-red-600">R$ 12.80</span>
                <p className="text-justify text-xs text-gray-700 max-h-20 
                overflow-y-hidden text-clip truncate whitespace-normal">
                    Blender de 180 g, cebola caramelizada, bacon, pão brioche na matenga e creme de queijo cheda da casa
                </p>
                <span className="text-justify text-xs text-gray-800">Cod 1.</span>
            </div>
        </div>
    )
}