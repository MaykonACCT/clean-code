import type { FC, PropsWithChildren } from 'react'
import { useState, useContext, createContext } from 'react'

const User = createContext<User>({} as User)

export const UserProvider: FC<PropsWithChildren<{}>> = ({ children }) => {
    const [getUser, setUser] = useState<UserProps>()

    return (
        <User.Provider value={{ getUser, setUser }}>
            {children}
        </User.Provider>
    )
}

export const useUserContext = () => useContext(User)