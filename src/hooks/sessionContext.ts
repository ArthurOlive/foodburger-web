import { createContext } from "react";

export interface SessionContextProps {
    token : string | undefined | null,
    setToken : Function
}

const defaultValue : SessionContextProps = {token : null, setToken : () => {}}

export const SessionContext = createContext<SessionContextProps>(defaultValue);