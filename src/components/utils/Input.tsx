import clsx from "clsx"

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
    label? : string,
    darkMode? : boolean
}
export const Input = ({label, darkMode=false, ...rest} : Props) =>  {
    return (
        <>
            {label && <label className={clsx("", {"text-white" : darkMode, "text-gray-800" : !darkMode})}>{label}</label>}
            <input 
                type="text" 
                className={clsx("rounded-lg p-3 outline-none shadow", {
                    "bg-zinc-800 border-zinc-900 text-white" : darkMode,
                    "bg-slate-50 border-bg-slate-200" : !darkMode 
                })}
                {...rest}
            />
        </>
    )

}