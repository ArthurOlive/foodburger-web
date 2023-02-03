
type Props = React.InputHTMLAttributes<HTMLInputElement> & {
    label : string
}
export const Input = ({label, ...rest} : Props) =>  {
    return (
        <>
            <label className="text-white">{label}</label>
            <input 
                type="text" 
                className="bg-zinc-800 rounded-lg border-zinc-900 p-3 
                text-white outline-none"
                {...rest}
            />
        </>
    )

}